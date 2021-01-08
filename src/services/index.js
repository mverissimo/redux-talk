import axios from "axios";

const ENDPOINT = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (page) => {
  const response = await axios
    .get(ENDPOINT, {
      params: {
        page,
      },
    })
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};

export const getCharacter = async (id) => {
  const response = await axios
    .get(`${ENDPOINT}/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};
