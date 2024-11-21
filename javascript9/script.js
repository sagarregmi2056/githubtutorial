const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(car.model);

// console.log(typeof data1);
// console.log(typeof data);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   console.log(firstName, this.lastName, this.age, this.eyeColor);
// }

// Person("sagar", "regmi", 20, "blue");

// const num1 = 5;
// const num2 = 5;

// if (num1 === num2) {
//   console.log("num1 and num2 are equal");
// } else {
//   console.log("num1 and num2 are not equal");
// }

// function studentsmarks(marks) {
//   if (marks >= 80) {
//     console.log("A");
//     return;
//   } else if (marks >= 60) {
//     console.log("B");
//     return;
//   } else if (marks >= 40) {
//     console.log("C");
//     return;
//   } else {
//     console.log("D");
//     return;
//   }
// }

// studentsmarks(20);

1234567;

const date = new Date();

day = date.getDay();
switch (day) {
  case 1:
    console.log("sunday");

    break;
  case 2:
    console.log("monday");

    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;

  //

  default:
    console.log("invalid day");
    break;
}

console.log(day);

// const fruits = ["apple", "banana", "mango", "orange"];
// // 4
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// console.log("i am greater than  " + fruits.length + " fruits");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Boysenberry",
  "Cantaloupe",
  "Cherry",
  "Clementine",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Currant",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Grapefruit",
  "Guava",
  "Honeydew",
  "Huckleberry",
  "Jackfruit",
  "Jambul",
  "Jujube",
  "Kiwano",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Longan",
  "Loquat",
  "Lychee",
  "Mandarin",
  "Mango",
  "Mangosteen",
  "Mulberry",
  "Nectarine",
  "Olive",
  "Orange",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Rambutan",
  "Raspberry",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Starfruit",
  "Strawberry",
  "Sugar Apple",
  "Tamarillo",
  "Tamarind",
  "Tangerine",
  "Ugli Fruit",
  "Watermelon",
  "White Currant",
  "Yuzu",
  "Ackee",
  "Atemoya",
  "Bilberry",
  "Breadfruit",
  "Cactus Pear",
  "Canistel",
  "Cherimoya",
  "Chico Fruit",
  "Cloudberry",
  "Custard Apple",
  "Damson",
  "Gac Fruit",
  "Indian Fig",
  "Jabuticaba",
  "Langsat",
  "Mamoncillo",
  "Marionberry",
  "Medlar",
  "Miracle Fruit",
  "Monstera Deliciosa",
  "Mountain Apple",
  "Naranjilla",
  "Pepino",
  "Plantain",
  "Red Banana",
  "Rose Apple",
  "Soursop",
  "Surinam Cherry",
  "Sapodilla",
  "Sapote",
  "White Sapote",
  "Yellow Passionfruit",
  "Zucchini ",
];

for (let i in fruits) {
  console.log(i + " " + fruits[i]);
}

// 20 fruits samma matra print gara
//  jaba fruits watermelon loop bata bahira niskiya
// i found watermelon at index number rakha
