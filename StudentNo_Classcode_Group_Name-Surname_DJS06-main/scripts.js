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

// Log the result
console.log(nameProvinceMapping);

console.log(
  // Log Products
  "Log Products:",
  products.forEach(({ product }) => console.log(product)),

  // Filter by Name Length
  "Filter by Name Length:",
  products.filter(({ product }) => product.length <= 5),

  // Price Manipulation
  "Price Manipulation:",
  products
    .filter(
      ({ price }) =>
        typeof price === "string" &&
        price.trim() !== "" &&
        !isNaN(Number(price))
    ) // Filter out products without prices, non-numeric prices, and non-string prices
    .reduce((total, { price }) => total + Number(price), 0), // Calculate the total price

  // Concatenate Product Names
  "Concatenate Product Names:",
  products.reduce((acc, { product }) => acc + product, ""),

  // Find Extremes in Prices
  (() => {
    const validPrices = products
      .filter(
        ({ price }) =>
          typeof price === "string" &&
          price.trim() !== "" &&
          !isNaN(Number(price))
      )
      .map(({ product, price }) => ({ product, price: Number(price) }));
    const highestPriced = validPrices.reduce(
      (prev, current) => (prev.price > current.price ? prev : current),
      validPrices[0]
    );
    const lowestPriced = validPrices.reduce(
      (prev, current) => (prev.price < current.price ? prev : current),
      validPrices[0]
    );
    return `Find Extremes in Prices: Highest: ${highestPriced.product}. Lowest: ${lowestPriced.product}.`;
  })(),

  // Object Transformation
  "Object Transformation:",
  products.reduce((acc, { product, price }) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, [])
);
