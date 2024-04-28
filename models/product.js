const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, t, imageUrl, description, price) {
    this.id = id;
    this.title = t;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }
  

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {}
};

// 143. 改成串接 database
// const fs = require('fs');
// const path = require('path');

// const Cart = require('./cart');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = (callback) => {
//   //   const p = path.join(
//   //     path.dirname(process.mainModule.filename),
//   //     'data',
//   //     'products.json'
//   //   );
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       callback([]);
//     }
//     callback(JSON.parse(fileContent));
//   });
// };

// module.exports = class Product {
//   constructor(id, t, imageUrl, description, price) {
//     this.id = id;
//     this.title = t;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   // function save() {
//   save() {
//     // 118. 新增商品 ID 到路徑
//     // this.id = Math.random().toString();

//     // 103.
//     getProductsFromFile((products) => {
//       // 127. 編輯商品資料
//       if (this.id) {
//         const existingProductIndex = products.findIndex((prod) => {
//           return prod.id == this.id;
//         });
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex] = this;
//         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//           console.log(err);
//         });
//       } else {
//         this.id = Math.random().toString();
//         products.push(this);
//         fs.writeFile(p, JSON.stringify(products), (err) => {
//           console.log(err);
//         });
//       }

//       // products.push(this);
//       // fs.writeFile(p, JSON.stringify(products), (err) => {
//       //   console.log(err);
//       // });
//     });
//     // // products.push(this);
//     // // 101. storing data in files via the model
//     // const p = path.join(
//     //   path.dirname(process.mainModule.filename),
//     //   'data',
//     //   'products.json'
//     // );
//     // fs.readFile(p, (err, fileContent) => {
//     //   let products = [];
//     //   if (!err) {
//     //     products = JSON.parse(fileContent);
//     //   }
//     //   // 故意用箭頭函示，讓他失去 this 指向
//     //   products.push(this);
//     //   fs.writeFile(p, JSON.stringify(products), (err) => {
//     //     console.log(err);
//     //   });
//     // });
//   }

//   static deleteById(id) {
//     getProductsFromFile((products) => {
//       const product = products.find((prod) => {
//         return prod.id === id;
//       });

//       const updatedProducts = products.filter((prod) => {
//         return prod.id !== id;
//       });
//       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//         if (!err) {
//           Cart.deleteProduct(id, product.price);
//         }
//       });
//     });
//   }

//   static fetchAll(callback) {
//     // 103.
//     getProductsFromFile(callback);
//     // const p = path.join(
//     //   path.dirname(process.mainModule.filename),
//     //   'data',
//     //   'products.json'
//     // );
//     // // 這是異步代碼
//     // fs.readFile(p, (err, fileContent) => {
//     //   if (err) {
//     //     // return [];
//     //     // 102. 解決異步問題
//     //     callback([]);
//     //   }
//     //   //   return JSON.parse(fileContent);
//     //   // 102. 解決異步問題
//     //   callback(JSON.parse(fileContent));
//     // });
//     // // return products;
//   }

//   // 120. 讀取商品細節資料
//   static findById(id, callback) {
//     getProductsFromFile((products) => {
//       const product = products.find((item) => {
//         return item.id === id;
//       });
//       callback(product);
//     });
//   }
// };
