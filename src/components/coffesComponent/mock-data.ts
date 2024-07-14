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
    "image": "https://heddincoffee.com.vn/upload/product/matcha-iced-latteig-1753.jpg",
    "price": "30K VND",
    "rating": 4.9,
    "votes": 1800,
    "popular": false,
    "available": true
  },
  {
    "id": 2,
    "nameKey": "milkCoffee",
    "image": "https://cdn.tgdd.vn/2020/07/CookProduct/ava-1200x676-7.jpg",
    "price": "25K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 3,
    "nameKey": "coconutCoffee",
    "image": "https://nvhphunu.vn/wp-content/uploads/2023/10/cach-pha-ca-phe-cot-dua.jpg",
    "price": "25K VND",
    "rating": 4.8,
    "votes": 1650,
    "popular": false,
    "available": true
  },
  {
    "id": 4,
    "nameKey": "orangeJuice",
    "image": "https://hoaquauudam.com/wp-content/uploads/2021/09/chon-cam-vat-1024x576-1.jpg",
    "price": "30K VND",
    "rating": 4.8,
    "votes": 720,
    "popular": true,
    "available": true
  },
  {
    "id": 5,
    "nameKey": "coldBrew",
    "image": "https://file.hstatic.net/200000391645/article/cafe-cold-brew-aeroco-coffee_1_b38f8b940c3644d983a3c6314a5c1211.jpg",
    "price": "20K VND",
    "rating": 4.9,
    "votes": 950,
    "popular": true,
    "available": true
  },
  {
    "id": 6,
    "nameKey": "blackCoffee",
    "image": "https://cdnphoto.dantri.com.vn/aIOZcmri9CbJvm1HFSpuytscpWQ=/thumb_w/960/2021/03/04/vi-ca-phe-den-het-nhu-vi-cuoc-songdocx-1614866315610.png",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 7,
    "nameKey": "jasmineTeaBubble",
    "image": "https://cdn.tgdd.vn/Files/2018/07/14/1101389/loi-ich-va-cach-pha-tra-hoa-nhai-tra-hoa-lai-chuan-vi-tot-cho-suc-khoe-202302211359255720.jpeg",
    "price": "15K VND",
    "rating": 4.6,
    "votes": 780,
    "popular": true,
    "available": true
  },
  {
    "id": 8,
    "nameKey": "lemonTea",
    "image": "https://daotaophachelamour.com/wp-content/uploads/2023/03/dung-cu-can-thiet-de-mo-quan-tra-chanh-1.jpg",
    "price": "15K VND",
    "rating": 4.7,
    "votes": 920,
    "popular": true,
    "available": true
  },
  {
    "id": 9,
    "nameKey": "artisoTea",
    "image": "https://toiyeutra.vn/upload/files/atiso%20do.jpg",
    "price": "20K VND",
    "rating": 4.8,
    "votes": 650,
    "popular": true,
    "available": true
  },
  {
    "id": 10,
    "nameKey": "hanoiSauJuice",
    "image": "https://i-giadinh.vnecdn.net/2022/06/18/Thanh-pham-1-1-1891-1655539037.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 11,
    "nameKey": "cacao",
    "image": "https://www.huongnghiepaau.com/wp-content/uploads/2017/09/cacao-da-ngot.jpg",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  },
  {
    "id": 12,
    "nameKey": "freshLemonJuice",
    "image": "https://media.vov.vn/sites/default/files/styles/large/public/2023-04/5_27.jpg",
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
    "image": "https://heddincoffee.com.vn/upload/product/matcha-iced-latteig-1753.jpg",
    "price": "30K VND",
    "rating": 4.9,
    "votes": 1800,
    "popular": false,
    "available": true
  },
  {
    "id": 2,
    "nameKey": "milkCoffee",
    "image": "https://cdn.tgdd.vn/2020/07/CookProduct/ava-1200x676-7.jpg",
    "price": "25K VND",
    "rating": 5,
    "votes": 2100,
    "popular": false,
    "available": true
  },
  {
    "id": 3,
    "nameKey": "coconutCoffee",
    "image": "https://nvhphunu.vn/wp-content/uploads/2023/10/cach-pha-ca-phe-cot-dua.jpg",
    "price": "25K VND",
    "rating": 4.8,
    "votes": 1650,
    "popular": false,
    "available": true
  },
  {
    "id": 5,
    "nameKey": "coldBrew",
    "image": "https://file.hstatic.net/200000391645/article/cafe-cold-brew-aeroco-coffee_1_b38f8b940c3644d983a3c6314a5c1211.jpg",
    "price": "20K VND",
    "rating": 4.9,
    "votes": 950,
    "popular": true,
    "available": true
  },
  {
    "id": 6,
    "nameKey": "blackCoffee",
    "image": "https://cdnphoto.dantri.com.vn/aIOZcmri9CbJvm1HFSpuytscpWQ=/thumb_w/960/2021/03/04/vi-ca-phe-den-het-nhu-vi-cuoc-songdocx-1614866315610.png",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 1200,
    "popular": true,
    "available": true
  },
  {
    "id": 11,
    "nameKey": "cacao",
    "image": "https://www.huongnghiepaau.com/wp-content/uploads/2017/09/cacao-da-ngot.jpg",
    "price": "25K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  }
]

export const MockDataTea: CoffeeItem[] = [
  {
    "id": 7,
    "nameKey": "jasmineTeaBubble",
    "image": "https://cdn.tgdd.vn/Files/2018/07/14/1101389/loi-ich-va-cach-pha-tra-hoa-nhai-tra-hoa-lai-chuan-vi-tot-cho-suc-khoe-202302211359255720.jpeg",
    "price": "15K VND",
    "rating": 4.6,
    "votes": 780,
    "popular": true,
    "available": true
  },
  {
    "id": 8,
    "nameKey": "lemonTea",
    "image": "https://daotaophachelamour.com/wp-content/uploads/2023/03/dung-cu-can-thiet-de-mo-quan-tra-chanh-1.jpg",
    "price": "15K VND",
    "rating": 4.7,
    "votes": 920,
    "popular": true,
    "available": true
  },
  {
    "id": 9,
    "nameKey": "artisoTea",
    "image": "https://toiyeutra.vn/upload/files/atiso%20do.jpg",
    "price": "20K VND",
    "rating": 4.8,
    "votes": 650,
    "popular": true,
    "available": true
  },
]

export const MockDataJuices: CoffeeItem[] = [
  {
    "id": 4,
    "nameKey": "orangeJuice",
    "image": "https://hoaquauudam.com/wp-content/uploads/2021/09/chon-cam-vat-1024x576-1.jpg",
    "price": "30K VND",
    "rating": 4.8,
    "votes": 720,
    "popular": true,
    "available": true
  },
  {
    "id": 10,
    "nameKey": "hanoiSauJuice",
    "image": "https://i-giadinh.vnecdn.net/2022/06/18/Thanh-pham-1-1-1891-1655539037.jpg",
    "price": "20K VND",
    "rating": 4.6,
    "votes": 480,
    "popular": true,
    "available": true
  },
  {
    "id": 12,
    "nameKey": "freshLemonJuice",
    "image": "https://media.vov.vn/sites/default/files/styles/large/public/2023-04/5_27.jpg",
    "price": "20K VND",
    "rating": 4.7,
    "votes": 580,
    "popular": true,
    "available": true
  }
]
