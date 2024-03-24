const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  // function save() {
  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
