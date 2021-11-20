import data from './data';

localStorage.setItem('items', JSON.stringify(data));

const readItems = () => JSON.parse(localStorage.getItem('items'));
const saveItems = (items) => localStorage.setItem('items', JSON.stringify(items));

const TIMEOUT = 2000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------
// mock api adaptada do projeto Movies Card Library CRUD, 
// link da referencia: https://github.com/tryber/sd-010-b-project-movie-card-library-crud/tree/master/src/services

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getItems = () => (
  new Promise((resolve) => {
    const movies = readItems();
    simulateRequest(movies)(resolve);
  })
);

export const getItemById = (itemId) => {
  const item = readItems().find((item) => item.id === parseInt(itemId, 10));
  return new Promise((resolve) => {
    simulateRequest(item)(resolve);
  });
};

export const updateItem = (updatedItem) => (
  new Promise((resolve) => {
    const itens = readItems().map((item) => {
      if (item.id === parseInt(updatedItem.id, 10)) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
    saveItems(itens);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

export const createItem = (itemData) => (
  new Promise((resolve) => {
    let items = readItems();
    const nextId = items[items.length - 1].id + 1;
    const newItem = { ...itemData, id: nextId };
    items = [...items, newItem];
    saveItems(items);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

export const deleteItem = (itemId) => {
  let items = readItems();
  items = items.filter((item) => item.id !== parseInt(itemId, 10));
  saveItems(items);

  return new Promise((resolve) => {
    simulateRequest({ status: SUCCESS_STATUS })(resolve);
  });
};
