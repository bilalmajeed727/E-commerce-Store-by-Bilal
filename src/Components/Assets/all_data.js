import watch_1 from "./mens watches 6.jpg";
import watch_2 from "./mens watch 2.jpg";
import watch_3 from "./mens watch 3.jpg";
import mens_jacket_1 from "./leather jacket men.png";
import mens_jacket_2 from "./Buffer Jacket.jpg";
import mens_jacket_3 from "./mens leather jacket 3.jpg";
import mens_jacket_4 from "./mens jacket 1.jpg";
import mens_shoes_1 from "./mens shoes 3.jpg";
import mens_shoes_2 from "./mens shoes 4.jpg";
import mens_shoes_3 from "./mens shoes 1.jpg";
import ladies_jacket_1 from "./ladies jacket 1.jpg";
import ladies_jacket_2 from "./ladies jacket 2.jpg";
import ladies_jacket_3 from "./ladies jacket 3.jpg";
import ladies_shoes_1 from "./ladies shoes 1.jpg";
import ladies_shoes_2 from "./ladies shoes 2.jpg";
import ladies_shoes_3 from "./ladies shoes 3.jpg";
import ladies_shoes_4 from "./ladies shoes 4.jpg";
import ladies_handbag_1 from "./hand bag 1.jpg";
import ladies_handbag_2 from "./hand ba 2.jpg";
import ladies_handbag_3 from "./hand bag 3.jpg";
import kids_jacket_1 from "./kids jacket 1.jpg";
import kids_jacket_2 from "./kids jacket 2.jpg";
import kids_jacket_3 from "./kids jacket 3.jpg";
import kids_jacket_4 from "./kids jacket 4.jpg";
import kids_shoes_1 from "./kids shoes 1.jpg";
import kids_shoes_2 from "./kids shoes 2.jpg";
import kids_shoes_3 from "./kids shoes 3.jpg";
import kids_shoes_4 from "./kids shoes 4.png";
import kids_dress_1 from "./kids dress 1.jpg";
import kids_dress_2 from "./kids dress 2.jpg";
const all_data = [
  {
    id: 1,
    name: "Mens Watch",
    image: watch_1,
    old_price: 40,
    new_price: 35,
    category: "men",
  },
  {
    id: 2,
    name: "Mens Smart Watch",
    image: watch_2,
    old_price: 80,
    new_price: 70,
    category: "men",
  },
  {
    id: 3,
    name: "Mens Smart Watch",
    image: watch_3,
    old_price: 70,
    new_price: 65,
    category: "men",
  },
  {
    id: 4,
    name: "Mens Leather Jacket",
    image: mens_jacket_1,
    old_price: 40,
    new_price: 35,
    category: "men",
  },
  {
    id: 5,
    name: "Mens Sports Shoes",
    image: mens_shoes_1,
    old_price: 70,
    new_price: 65,
    category: "men",
  },
  {
    id: 6,
    name: "Mens Loafers",
    image: mens_shoes_2,
    old_price: 25,
    new_price: 15,
    category: "men",
  },
  {
    id: 7,
    name: "Mens Office Shoes",
    image: mens_shoes_3,
    old_price: 50,
    new_price: 45,
    category: "men",
  },
  {
    id: 8,
    name: "Mens Buffer Jacket",
    image: mens_jacket_2,
    old_price: 30,
    new_price: 25,
    category: "men",
  },
  {
    id: 9,
    name: "Mens Leather Jacket",
    image: mens_jacket_3,
    old_price: 60,
    new_price: 55,
    category: "men",
  },
  {
    id: 10,
    name: "Mens Jacket",
    image: mens_jacket_4,
    old_price: 40,
    new_price: 35,
    category: "men",
  },
  {
    id: 11,
    name: "Ladies Buffer Jacket",
    image: ladies_jacket_1,
    old_price: 30,
    new_price: 25,
    category: "women",
  },
  {
    id: 12,
    name: "Leather Jacket",
    image: ladies_jacket_2 ,
    old_price: 40,
    new_price: 35,
    category: "women",
  },
  {
    id: 13,
    name: "Ladies dress cout",
    image: ladies_jacket_3,
    old_price: 50,
    new_price: 45,
    category: "women",
  },
  {
    id: 14,
    name: "Ladies Blue Heels",
    image: ladies_shoes_1,
    old_price: 30,
    new_price: 25,
    category: "women",
  },
  {
    id: 15,
    name: "Mens Heels",
    image: ladies_shoes_2,
    old_price: 40,
    new_price: 35,
    category: "women",
  },
  {
    id: 16,
    name: "Ladies Heels Sky Blue",
    image: ladies_shoes_3,
    old_price: 70,
    new_price: 65,
    category: "women",
  },
  {
    id: 17,
    name: "Ladies Shoes",
    image: ladies_shoes_4,
    old_price: 60,
    new_price: 50,
    category: "women",
  },
  {
    id: 18,
    name: "Ladies Hand Bag",
    image: ladies_handbag_1,
    old_price: 60,
    new_price: 55,
    category: "women",
  },
  {
    id: 19,
    name: "Ladis Hand Bag",
    image: ladies_handbag_2,
    old_price: 40,
    new_price: 35,
    category: "women",
  },
  {
    id: 20,
    name: "Ladies Hand Bag",
    image: ladies_handbag_3,
    old_price: 75,
    new_price: 70,
    category: "women",
  },
  {
    id: 21,
    name: "Kids Jacket",
    image: kids_jacket_1,
    old_price: 40,
    new_price: 35,
    category: "Kids",
  },
  {
    id: 22,
    name: "Kids Jacket",
    image: kids_jacket_2,
    old_price: 20,
    new_price: 18,
    category: "Kids",
  },
  {
    id: 23,
    name: "Kids Jacket",
    image: kids_jacket_3,
    old_price: 30,
    new_price: 28,
    category: "Kids",
  },
  {
    id: 24,
    name: "Kids Jacket",
    image: kids_jacket_4,
    old_price: 25,
    new_price: 22,
    category: "Kids",
  },
  {
    id: 25,
    name: "Kids Shoes",
    image: kids_shoes_1,
    old_price: 20,
    new_price: 18,
    category: "Kids",
  },
  {
    id: 26,
    name: "Kids Shoes",
    image: kids_shoes_2,
    old_price: 40,
    new_price: 35,
    category: "Kids",
  },
  {
    id: 27,
    name: "Kids Shoes",
    image: kids_shoes_3,
    old_price: 35,
    new_price: 30,
    category: "Kids",
  },
  {
    id: 28,
    name: "Kids Dress",
    image: kids_dress_1,
    old_price: 25,
    new_price: 20,
    category: "Kids",
  },
  {
    id: 29,
    name: "Kids Dress",
    image: kids_dress_2,
    old_price: 15,
    new_price: 13,
    category: "Kids",
  },
  {
    id: 30,
    name: "Kids Shoes",
    image: kids_shoes_4,
    old_price: 20,
    new_price: 15,
    category: "Kids",
  },
];
export default all_data;
