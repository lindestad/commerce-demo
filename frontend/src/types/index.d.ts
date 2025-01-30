// src/types/index.d.ts

export interface Product {
    _id: string;
    name: string;
    price: number;
    description?: string;
    images?: string[];
    // Add any other fields ? (category, etc.)
  }
  