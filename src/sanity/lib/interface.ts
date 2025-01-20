// src/sanity/lib/interface.ts
export interface Card {
    title: string;
    images: any;
      name: string;
      description: string;
      quantity: number;
      price: number;
      image_url: string; // Change 'any' to 'string' for better type safety
      tags: string[];
      rating: number;
      _id: string;
      isNew:boolean;
    dicountPercentage:number,
    category: string;
  }