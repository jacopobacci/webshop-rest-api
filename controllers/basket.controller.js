const Basket = require("../models/basket.model");
const Product = require("../models/product.model");

exports.addToBasket = async (req, res, next) => {
  const { productId } = req.params;
  const basket = await Basket.findOne({ userId: req.user._id });
  const product = await Product.findById(productId);
  const productIndex = basket.products.findIndex((p) => p.productId == productId);
  if (productIndex !== -1) {
    basket.products[productIndex].qty++;
    basket.products[productIndex].price = basket.products[productIndex].qty * product.price;
    basket.totalQty++;
    basket.totalCost += product.price;
    await basket.save();
  } else {
    basket.products.push({ productId, qty: 1, price: product.price, title: product.title, category: product.category });
    basket.totalQty++;
    basket.totalCost += product.price;
    await basket.save();
  }
  res.status(200).json({ message: "Product added to basket!", product });
  req.flash("success", "Product added to basket!");
};

exports.removeFromBasket = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  const basket = await Basket.findOne({ userId: req.user._id });
  let productIndex = basket.products.findIndex((p) => p.productId == productId);
  if (productIndex !== -1) {
    basket.totalQty -= basket.products[productIndex].qty;
    basket.totalCost -= basket.products[productIndex].price;
    await basket.save();
    await Basket.findByIdAndUpdate(basket._id, { $pull: { products: { productId } } });
    res.status(200).json({ message: "Product removed from basket!", product });
    req.flash("success", "Product removed from basket!");
  } else {
    res.status(500).json({ message: "The product you are trying to delete does not exist!" });
    req.flash("error", "Product removed from basket!");
  }
};