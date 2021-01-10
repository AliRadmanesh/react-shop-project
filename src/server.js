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

const getMockProducts = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(productsList);
    }, 1000);
  });

const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const FilteredProduct = productsList.filter(
        (product) => product.id === parseInt(id)
      );
      if (FilteredProduct[0]) {
        resolve(FilteredProduct[0]);
      } else {
        reject(`There isn't any product with id ${id}`);
      }
    }, 1000);
  });

export { getMockProducts, getProductById };
