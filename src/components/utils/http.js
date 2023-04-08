const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const GET = async (path) => {
  const res = await fetch(BASE_URL + path);
  if (res.status > 399) {
    return { error: "Errore al server: riprova più tardi" };
  } else {
    const data = await res.json();
    return data;
  }
};
