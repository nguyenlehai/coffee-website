export interface CoffeeItem {
  id: number;
  nameKey: string; // Thay đổi từ 'name' sang 'nameKey'
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

export const MockDataAll: CoffeeItem[] = [
  {
    "id": 1,
    "nameKey": "matchaLatte",
    "image": "/images/mattcha.jpg",
    "price": "30K VND",
    "rating": 4.9,
    "votes": 1800,
    "popular": false,
    "available": true
  },
  {
    "id": 2,
    "nameKey": "milkCoffee",
    "image": "/images/milk-coffee.jpg",
    "price": "25K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 3,
    "nameKey": "MangoAvocadoBanana",
    "image": "/images/sinh-to-xoai-bo-chuoi.jpg",
    "price": "40K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 4,
    "nameKey": "MangoAvocadoBananaSingle",
    "image": "/images/sinh-tolle.jpg",
    "price": "40K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 5,
    "nameKey": "coconutCoffee",
    "image": "/images/coconut.jpg",
    "price": "25K VND",
    "rating": 4.8,
    "votes": 1650,
    "popular": false,
    "available": true
  },
  {
    "id": 6,
    "nameKey": "orangeJuice",
    "image": "/images/orange.jpg",
    "price": "30K VND",
    "rating": 4.8,
    "votes": 720,
    "popular": true,
    "available": true
  },
  {
    "id": 7,
    "nameKey": "blackCoffee",
    "image": "/images/black.webp",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 8,
    "nameKey": "saltCoffee",
    "image": "/images/salt-coffee.png",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 9,
    "nameKey": "cacao",
    "image": "/images/cacao.webp",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  },
  {
    "id": 10,
    "nameKey": "jasmineTeaBubble",
    "image": "/images/jasmine.jpeg",
    "price": "15K VND",
    "rating": 4.6,
    "votes": 780,
    "popular": true,
    "available": true
  },
  {
    "id": 11,
    "nameKey": "lemonTea",
    "image": "/images/tra-chanh.jpg",
    "price": "15K VND",
    "rating": 4.7,
    "votes": 920,
    "popular": true,
    "available": true
  },
  {
    "id": 12,
    "nameKey": "artisoTea",
    "image": "/images/atiso.jpg",
    "price": "20K VND",
    "rating": 4.8,
    "votes": 650,
    "popular": true,
    "available": true
  },
  {
    "id": 13,
    "nameKey": "hanoiSauJuice",
    "image": "/images/nuoc-sau.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 14,
    "nameKey": "redArtichokePerfume",
    "image": "/images/red-artichoke-perfume.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 15,
    "nameKey": "freshLemonJuice",
    "image": "/images/lemon.jpg",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  }
]

export const MockDataCoffee: CoffeeItem[] = [
  {
    "id": 1,
    "nameKey": "matchaLatte",
    "image": "/images/mattcha.jpg",
    "price": "30K VND",
    "rating": 4.9,
    "votes": 1800,
    "popular": false,
    "available": true
  },
  {
    "id": 7,
    "nameKey": "blackCoffee",
    "image": "/images/black.webp",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 2,
    "nameKey": "milkCoffee",
    "image": "/images/milk-coffee.jpg",
    "price": "25K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 5,
    "nameKey": "coconutCoffee",
    "image": "/images/coconut.jpg",
    "price": "25K VND",
    "rating": 4.8,
    "votes": 1650,
    "popular": false,
    "available": true
  },
  {
    "id": 8,
    "nameKey": "saltCoffee",
    "image": "/images/salt-coffee.png",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 9,
    "nameKey": "cacao",
    "image": "/images/cacao.webp",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  },
]

export const MockDataTea: CoffeeItem[] = [
  {
    "id": 12,
    "nameKey": "artisoTea",
    "image": "/images/atiso.jpg",
    "price": "20K VND",
    "rating": 4.8,
    "votes": 650,
    "popular": true,
    "available": true
  },
  {
    "id": 10,
    "nameKey": "jasmineTeaBubble",
    "image": "/images/jasmine.jpeg",
    "price": "15K VND",
    "rating": 4.6,
    "votes": 780,
    "popular": true,
    "available": true
  },
  {
    "id": 11,
    "nameKey": "lemonTea",
    "image": "/images/tra-chanh.jpg",
    "price": "15K VND",
    "rating": 4.7,
    "votes": 920,
    "popular": true,
    "available": true
  },
]

export const MockDataJuices: CoffeeItem[] = [
  {
    "id": 3,
    "nameKey": "MangoAvocadoBanana",
    "image": "/images/sinh-to-xoai-bo-chuoi.jpg",
    "price": "40K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 4,
    "nameKey": "MangoAvocadoBananaSingle",
    "image": "/images/sinh-tolle.jpg",
    "price": "40K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 13,
    "nameKey": "hanoiSauJuice",
    "image": "/images/nuoc-sau.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 14,
    "nameKey": "redArtichokePerfume",
    "image": "/images/red-artichoke-perfume.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 15,
    "nameKey": "freshLemonJuice",
    "image": "/images/lemon.jpg",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  },
  {
    "id": 6,
    "nameKey": "orangeJuice",
    "image": "/images/orange.jpg",
    "price": "30K VND",
    "rating": 4.8,
    "votes": 720,
    "popular": true,
    "available": true
  },
]
