const productsList = [
  {
    id: 0,
    name: "Product 1",
    price: 1000,
  },
  {
    id: 1,
    name: "Product 2",
    price: 2000,
  },
  {
    id: 2,
    name: "Product 3",
    price: 3000,
  },
];

const getMockProducts = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
};

export { getMockProducts };
