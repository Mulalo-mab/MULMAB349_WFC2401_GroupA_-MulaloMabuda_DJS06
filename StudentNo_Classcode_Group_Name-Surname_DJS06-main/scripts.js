// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1 Log name with a matching province in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//2 use map to create a new array of province names in all uppercase
const uppercaseProvinces = provinces.map((provinces) =>
  provinces.toUpperCase()
);
// Log the new array to me console
console.log(uppercaseProvinces);

//3 Use map to create a new array that contains the length of each name
const nameLengths = names.map((name) => name.length);

// Log the new array to the console
console.log(nameLengths);

//4 Use sort to alphabetically sort the provinces
const sortedProvinces = provinces.sort();

// Log the sorted array to the console
console.log(sortedProvinces);

//5 Use filter to remove provinces containing "Cape"
const provincesWithoutCape = provinces.filter(
  (provinces) => !provinces.includes("Cape")
);

// Log the count of the remaining provinces
console.log(provincesWithoutCape);

//6 Create a boolean array using map to determine if a name contains the letter 'S'
const containsS = names.map((name) => name.includes("S") || name.includes("s"));

//log the result
console.log(containsS);

//7 Use reduce to transform the names array into an object mapping names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

// advanced exercises

// Print the name of each product
products.forEach((product) => console.log(product.product));

// Filter products with names shorter than 6 characters and print the result
let filteredName = products.filter((product) => product.product.length < 6);
console.log(filteredName);

// Filter out products without valid prices and convert string prices to numbers
let validProducts = products.filter((product) => {
  // Convert the price to a number and check if it's a valid number
  const price = parseFloat(product.price);
  return !isNaN(price);
});

let productsWithNumericPrices = validProducts.map((item) => ({
  ...item,
  price: parseFloat(item.price),
}));

console.log(productsWithNumericPrices);

// Calculate the total price of all valid products
const totalPrice = productsWithNumericPrices.reduce(
  (total, item) => total + item.price,
  0
);
console.log(totalPrice);

// Concatenate all product names into a single string
let concatenatedNames = products
  .reduce((acc, item) => {
    return acc + item.product + " ";
  }, "")
  .trim();
console.log(concatenatedNames);

// Use reduce to find the highest and lowest prices
const extremes = productsWithNumericPrices.reduce(
  (acc, item) => {
    if (item.price > acc.highest.price) {
      acc.highest = item;
    }
    if (item.price < acc.lowest.price) {
      acc.lowest = item;
    }
    return acc;
  },
  {
    highest: productsWithNumericPrices[0],
    lowest: productsWithNumericPrices[0],
  }
);

// Format the result string to show the highest and lowest priced items
const result = `Highest: ${extremes.highest.product} - ${extremes.highest.price}. Lowest: ${extremes.lowest.product} - ${extremes.lowest.price}.`;
console.log(result);

// Use reduce to transform the product objects to have keys 'name' and 'cost'
const transformedProducts = products.reduce((acc, item) => {
  const transformedItem = {
    name: item.product,
    cost: item.price,
  };
  acc.push(transformedItem);
  return acc;
}, []);

console.log(transformedProducts);
