// 100. 新增商品 Model
const Product = require('../models/product');

// const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'add product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduvt: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // 100. 新增商品 Model
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // 100. 新增商品 Model
  // const product = Product.fetchAll();
  // 102. 解決異步問題，更改後 fetchAll 不回 return 東西
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
  // const products = adminData.products
  // res.render('shop', {
  //   prods: products,
  //   pageTitle: 'shop',
  //   path: '/',
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
};
