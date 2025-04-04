
// Sample structure from the New Plant Diseases Dataset
export const testImageCategories = [
  {
    name: "Apple - Apple Scab",
    description: "Fungal disease causing dark, scabby lesions on apple leaves and fruit",
    thumbnailUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "as-1",
        name: "Captan Fungicide",
        description: "Broad spectrum fungicide effective against apple scab",
        price: 24.99,
        imageUrl: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "as-2",
        name: "Neem Oil Spray",
        description: "Organic solution for mild apple scab infections",
        price: 18.50,
        imageUrl: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=200&auto=format&fit=crop",
      }
    ]
  },
  {
    name: "Tomato - Late Blight",
    description: "Causes water-soaked lesions on leaves that eventually turn brown",
    thumbnailUrl: "https://images.unsplash.com/photo-1592393316318-fca5a83ddb95?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "tb-1",
        name: "Copper Fungicide",
        description: "Protective copper spray for late blight control",
        price: 19.99,
        imageUrl: "https://images.unsplash.com/photo-1620832951697-21e24b0792a3?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "tb-2",
        name: "Garden Disease Control",
        description: "Systemic fungicide for tomato diseases",
        price: 29.95,
        imageUrl: "https://images.unsplash.com/photo-1532992621581-14896083c518?q=80&w=200&auto=format&fit=crop",
      }
    ]
  },
  {
    name: "Corn - Common Rust",
    description: "Characterized by small, rusty-colored pustules on corn leaves",
    thumbnailUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "cr-1",
        name: "Rust Disease Control",
        description: "Specifically formulated for rust diseases in corn",
        price: 32.50,
        imageUrl: "https://images.unsplash.com/photo-1631053153509-02fb08474473?q=80&w=200&auto=format&fit=crop",
      }
    ]
  },
  {
    name: "Grape - Black Rot",
    description: "Causes brown circular lesions on leaves and black, shriveled fruit",
    thumbnailUrl: "https://images.unsplash.com/photo-1602330102257-04c00af50c1a?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "gr-1",
        name: "Mancozeb Fungicide",
        description: "Controls black rot and other fungal diseases",
        price: 26.75,
        imageUrl: "https://images.unsplash.com/photo-1617575642721-3d9935072c69?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "gr-2",
        name: "Grape Disease Control Kit",
        description: "Complete solution for grape disease management",
        price: 45.99,
        imageUrl: "https://images.unsplash.com/photo-1515694590185-73647ba02c10?q=80&w=200&auto=format&fit=crop",
      }
    ]
  },
  {
    name: "Potato - Early Blight",
    description: "Causes small, dark spots with concentric rings on potato leaves",
    thumbnailUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "pb-1",
        name: "Chlorothalonil Spray",
        description: "Effective against early blight in potatoes",
        price: 22.99,
        imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=200&auto=format&fit=crop",
      }
    ]
  },
  {
    name: "Healthy Plant",
    description: "Example of a healthy plant leaf for comparison",
    thumbnailUrl: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=300&auto=format&fit=crop",
    products: [
      {
        id: "hp-1",
        name: "Plant Nutrition Pack",
        description: "Essential nutrients to maintain plant health",
        price: 15.50,
        imageUrl: "https://images.unsplash.com/photo-1610459716431-e873fe31f1b5?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: "hp-2",
        name: "Preventive Plant Spray",
        description: "Regular use helps prevent common diseases",
        price: 17.99,
        imageUrl: "https://images.unsplash.com/photo-1583468982228-19eed673d9cc?q=80&w=200&auto=format&fit=crop",
      }
    ]
  }
];

export type TestImageCategory = typeof testImageCategories[0];
export type Product = TestImageCategory['products'][0];
