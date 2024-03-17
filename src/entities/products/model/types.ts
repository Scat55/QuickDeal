interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categories;
  images: string[];
}

interface Categories {
  id: number;
  name: string;
  image: string;
}

export { type Product };
