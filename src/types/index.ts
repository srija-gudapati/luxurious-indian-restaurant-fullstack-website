export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'meals' | 'desserts' | 'breads';
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}