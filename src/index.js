import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import "./css/style.scss";
import "./mainheader";

const productList = getProductList(20);

renderGoodsList(productList);