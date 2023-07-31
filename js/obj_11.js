// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  // Если это собственное свойство - выполняем тело if
  if (apartment.hasOwnProperty(key)) {
    console.log(keys.push(key));
    console.log(values.push(apartment[key]));
  }

  // Если это не собственное свойство - ничего не делаем
}