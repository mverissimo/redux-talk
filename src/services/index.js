import axios from "axios";

const ENDPOINT = "https://rickandmortyapi.com/api/character";

export let getCharacters = async (page) => {
  let response = await axios
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

export let getCharacter = async (id) => {
  let response = await axios
    .get(`${ENDPOINT}/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response;
    });

  return response;
};
