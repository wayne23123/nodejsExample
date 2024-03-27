// 109.
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'add product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduvt: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // 110. Storing Product Data
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price)

  // 100. 新增商品 Model
  // const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
