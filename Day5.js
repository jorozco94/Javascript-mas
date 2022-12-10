/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

const products = [
  {
      item: "🍭",
      price: 2.99,
      type: "sweet",
  },
  {
      item: "🍫",
      price: 1.99, 
      type: "sweet",
  },
  {
      item: "🥫",
      price: 1.99, 
      type: "savory",
  },
  {
      item: "🍬",
      price: .89, 
      type: "sweet",
  },
  {
      item: "🥦",
      price: 3.99,
      type: "savory",
  }, 
  {
      item: "🍖",
      price: 3.99, 
      type: "savory",
  }, 
];

function getSaleItems(data) {
  const shoppingCart = data.filter(el => el.type === 'sweet').map((el) => ({item: el.item, price: el.price}));
  // note - when returning an object with an arrow fxn - have to use parenthesis around the object or specify the return keyword
  return shoppingCart;
};

console.log(getSaleItems(products));