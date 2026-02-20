import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/4.jpg";
import p5 from "../images/5.jpg";
import p6 from "../images/6.jpg";
import p7 from "../images/7.jpg";
import p8 from "../images/8.jpg";
import p9 from "../images/9.jpg";
import p10 from "../images/10.jpg";

export const categories = [
  {
    id: "aroma",
    title: "شموع عطرية",
    img: p1,
  },
  {
    id: "seasonal",
    title: "شموع موسمية",
    img: p4,
  },
  {
    id: "decor",
    title: "شموع ديكور",
    img: p7,
  },
];

export const products = [
  {
    id: 1,
    title: "Lavender Dream",
    price: 18,
    category: "aroma",
    img: p1,
    scent: "Lavender & Vanilla",
  },
  {
    id: 2,
    title: "Fresh Citrus",
    price: 22,
    category: "aroma",
    img: p2,
    scent: "Citrus & Bergamot",
  },
  {
    id: 3,
    title: "Rose Garden",
    price: 20,
    category: "aroma",
    img: p3,
    scent: "Rose & Peony",
  },

  {
    id: 4,
    title: "Winter Spice",
    price: 25,
    category: "seasonal",
    img: p4,
    scent: "Cinnamon & Clove",
  },
  {
    id: 5,
    title: "Autumn Leaves",
    price: 23,
    category: "seasonal",
    img: p5,
    scent: "Pumpkin & Maple",
  },
  {
    id: 6,
    title: "Holiday Cheer",
    price: 28,
    category: "seasonal",
    img: p6,
    scent: "Pine & Sugar Cookies",
  },

  {
    id: 7,
    title: "Marble Decor Candle",
    price: 30,
    category: "decor",
    img: p7,
  },
  {
    id: 8,
    title: "Stone Ceramic Candle",
    price: 27,
    category: "decor",
    img: p8,
  },
  {
    id: 9,
    title: "Glass Décor Candle",
    price: 32,
    category: "decor",
    img: p9,
  },

  {
    id: 10,
    title: "Classic White Candle",
    price: 15,
    category: "decor",
    img: p10,
  },
];