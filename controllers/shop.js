// 100. 新增商品 Model
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // console.log('prodId', prodId)

  // 120. 讀取商品細節資料
  Product.findById(prodId, (product) => {
    // console.log(product);
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'shop',
        path: '/',
      });
    })
    .catch((err) => console.log('err', err));

  // 143. 改成串接 database
  // Product.fetchAll((products) => {
  //   res.render('shop/index', {
  //     prods: products,
  //     pageTitle: 'shop',
  //     path: '/',
  //   });
  // });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];

      for (product of products) {
        const cartProductData = cart.products.find((prod) => {
          return prod.id === product.id;
        });
        if (cartProductData)
          cartProducts.push({ productData: product, qty: cartProductData.qty });
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'your Cart',
        products: cartProducts,
      });
    });
  });
  // res.render('shop/cart', {
  //   path: '/cart',
  //   pageTitle: 'your Cart',
  // });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  // console.log('prodId', prodId);

  // 123. 新增購物車 model
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'your Orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/check', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};
