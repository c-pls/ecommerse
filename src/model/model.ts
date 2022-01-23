export interface CollectionItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CartItem extends CollectionItemProps {
  quantity: number;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
}

export type Collections = CollectionItemProps[];
export type CartItems = CartItem[];
