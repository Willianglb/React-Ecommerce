export const checkIfItemInCart = (newItem, array, sum) => {
  const index = array.findIndex((object) => object.id === newItem.id);
  if (index !== -1) {
    const newArray = array.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: item.quantity + (sum === 'add' ? newItem.quantity : -1),
          }
        : item
    );
    if (!newArray[index].quantity) {
      return deleteItem(newItem, newArray);
    }
    return newArray;
  }
  return array.concat(newItem);
};

export const deleteItem = (item, array) => {
  const deleted = array.filter((object) => object.id !== item.id);
  return deleted;
};

export const removeQuantityFromCart = (item, array) => {
  const toUpdate = array.find((object) => object.id === item.id);
  return toUpdate.quantity;
};

export const customQuantityUp = (item, array, newQuantity) => {
  const index = array.findIndex((object) => object.id === item.id);
  const oldQuantity = array[index].quantity;
  return {
    array: array.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: newQuantity,
          }
        : item
    ),
    type: newQuantity >= oldQuantity ? 'add' : 'subtract',
    newQuantity,
    oldQuantity,
  };
};

// Trade automatica da moeda
export const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
