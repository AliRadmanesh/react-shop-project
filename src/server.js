const productsList = [
  {
    id: 0,
    name: "Product 1",
    price: 1000,
    hasOff: true,
  },
  {
    id: 1,
    name: "Product 2",
    price: 2000,
    hasOff: false,
  },
  {
    id: 2,
    name: "Product 3",
    price: 3000,
    hasOff: false,
  },
];

const getMockProducts = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(productsList);
    }, 1000);
  });
};

export { getMockProducts };
