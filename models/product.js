const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callback) => {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     'data',
  //     'products.json'
  //   );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    }
    callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t, imageUrl, description, price) {
    this.title = t;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // function save() {
  save() {
    // 118. 新增商品 ID 到路徑
    this.id = Math.random().toString;

    // 103.
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // // products.push(this);
    // // 101. storing data in files via the model
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   'data',
    //   'products.json'
    // );
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   }
    //   // 故意用箭頭函示，讓他失去 this 指向
    //   products.push(this);
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   });
    // });
  }

  static fetchAll(callback) {
    // 103.
    getProductsFromFile(callback);
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   'data',
    //   'products.json'
    // );
    // // 這是異步代碼
    // fs.readFile(p, (err, fileContent) => {
    //   if (err) {
    //     // return [];
    //     // 102. 解決異步問題
    //     callback([]);
    //   }
    //   //   return JSON.parse(fileContent);
    //   // 102. 解決異步問題
    //   callback(JSON.parse(fileContent));
    // });
    // // return products;
  }
};
