
import * as tf from '@tensorflow/tfjs';

// Class labels for the plant disease detection model
export const diseaseClasses = [
  'Apple___Apple_scab',
  'Apple___Black_rot',
  'Apple___Cedar_apple_rust',
  'Apple___healthy',
  'Blueberry___healthy',
  'Cherry___Powdery_mildew',
  'Cherry___healthy',
  'Corn___Cercospora_leaf_spot Gray_leaf_spot',
  'Corn___Common_rust',
  'Corn___Northern_Leaf_Blight',
  'Corn___healthy',
  'Grape___Black_rot',
  'Grape___Esca_(Black_Measles)',
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
  'Grape___healthy',
  'Orange___Haunglongbing_(Citrus_greening)',
  'Peach___Bacterial_spot',
  'Peach___healthy',
  'Pepper,_bell___Bacterial_spot',
  'Pepper,_bell___healthy',
  'Potato___Early_blight',
  'Potato___Late_blight',
  'Potato___healthy',
  'Raspberry___healthy',
  'Soybean___healthy',
  'Squash___Powdery_mildew',
  'Strawberry___Leaf_scorch',
  'Strawberry___healthy',
  'Tomato___Bacterial_spot',
  'Tomato___Early_blight',
  'Tomato___Late_blight',
  'Tomato___Leaf_Mold',
  'Tomato___Septoria_leaf_spot',
  'Tomato___Spider_mites Two-spotted_spider_mite',
  'Tomato___Target_Spot',
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
  'Tomato___Tomato_mosaic_virus',
  'Tomato___healthy'
];

// Treatment recommendations for common plant diseases
export const diseaseTreatments: Record<string, string> = {
  'Apple___Apple_scab': 'Apply fungicides early in the growing season. Remove and destroy infected leaves. Ensure good air circulation by pruning.',
  'Apple___Black_rot': 'Remove mummified fruits and cankers from trees. Apply fungicides at appropriate intervals. Prune to improve air circulation.',
  'Apple___Cedar_apple_rust': 'Remove nearby cedar trees if possible. Apply preventative fungicides. Plant resistant apple varieties.',
  'Corn___Common_rust': 'Apply foliar fungicides. Plant resistant corn varieties. Avoid irrigation practices that leave foliage wet for extended periods.',
  'Grape___Black_rot': 'Remove mummies and infected plant parts. Apply fungicide treatments. Improve air circulation through proper canopy management.',
  'Potato___Early_blight': 'Rotate crops. Remove and destroy infected plant debris. Apply appropriate fungicides. Avoid overhead irrigation.',
  'Potato___Late_blight': 'Apply copper-based fungicides. Practice crop rotation. Plant certified disease-free seed potatoes. Harvest during dry weather.',
  'Tomato___Early_blight': 'Remove lower infected leaves. Apply fungicides. Use mulch to prevent soil splash. Provide adequate plant spacing.',
  'Tomato___Late_blight': 'Apply copper-based fungicides. Remove and destroy infected plants. Ensure proper spacing and staking for good air circulation.',
  'Tomato___Leaf_Mold': 'Reduce humidity. Improve air circulation. Remove infected leaves. Apply appropriate fungicides.',
  'Tomato___Septoria_leaf_spot': 'Remove infected leaves. Apply fungicides. Practice crop rotation. Avoid overhead watering.',
  'default': 'Remove and destroy infected plant parts. Ensure good air circulation. Consider appropriate fungicides or pesticides based on the specific disease. Consult with a local agricultural extension for specific recommendations.'
};

class ModelService {
  private model: tf.LayersModel | null = null;
  private isModelLoading = false;
  
  async loadModel() {
    if (this.model) return this.model;
    if (this.isModelLoading) {
      // Wait for model to finish loading
      while (this.isModelLoading) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.model;
    }
    
    try {
      console.log('Loading model...');
      this.isModelLoading = true;
      // Update to the correct model path
      this.model = await tf.loadLayersModel('/plant_disease_cnn_model_use/model.json');
      console.log('Model loaded successfully');
      return this.model;
    } catch (error) {
      console.error('Error loading model:', error);
      throw error;
    } finally {
      this.isModelLoading = false;
    }
  }
  
  async preprocessImage(imageUrl: string): Promise<tf.Tensor> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          // Convert image to tensor
          const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224]) // Resize to model input size
            .toFloat()
            .div(tf.scalar(255.0))  // Normalize to [0,1]
            .expandDims(0);         // Add batch dimension
          
          resolve(tensor);
        } catch (error) {
          reject(error);
        }
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = imageUrl;
    });
  }
  
  async predictDisease(imageUrl: string): Promise<{
    diseaseName: string;
    confidence: number;
    description: string;
    treatment: string;
  }> {
    try {
      const model = await this.loadModel();
      if (!model) {
        throw new Error('Model not loaded');
      }
      
      const processedImage = await this.preprocessImage(imageUrl);
      const predictions = await model.predict(processedImage) as tf.Tensor;
      const probabilities = await predictions.data();
      
      // Clean up tensors
      tf.dispose([processedImage, predictions]);
      
      // Get top result
      let maxProbIndex = 0;
      let maxProb = 0;
      
      for (let i = 0; i < probabilities.length; i++) {
        if (probabilities[i] > maxProb) {
          maxProb = probabilities[i];
          maxProbIndex = i;
        }
      }
      
      const predictedClass = diseaseClasses[maxProbIndex];
      const confidence = Math.round(maxProb * 100);
      
      // Process disease name for display
      const diseaseParts = predictedClass.split('___');
      const plant = diseaseParts[0];
      const condition = diseaseParts[1];
      
      // Skip processing if the plant is healthy
      const isHealthy = condition.toLowerCase().includes('healthy');
      const diseaseName = isHealthy ? `Healthy ${plant}` : condition.replace(/_/g, ' ');
      
      const description = isHealthy 
        ? `This ${plant.toLowerCase()} plant appears to be healthy with no visible signs of disease.`
        : `This appears to be ${condition.replace(/_/g, ' ')} on a ${plant.toLowerCase()} plant. This is a common disease affecting ${plant.toLowerCase()} crops.`;
      
      const treatment = isHealthy 
        ? 'No treatment needed. Continue regular plant care practices.'
        : diseaseTreatments[predictedClass] || diseaseTreatments['default'];
      
      return {
        diseaseName,
        confidence,
        description,
        treatment
      };
    } catch (error) {
      console.error('Prediction error:', error);
      throw error;
    }
  }
}

export const modelService = new ModelService();
