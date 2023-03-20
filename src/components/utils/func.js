export const filteredList = (list, key, value) =>
  list.filter((item) => item[key] === value);

export const arrayIngredient = (data) => {
  let ingredienti = [];

  for (let i = 1; i <= 15; i++) {
    ingredienti.push(data[`strIngredient${i}`]);
  }
  return ingredienti;
};
