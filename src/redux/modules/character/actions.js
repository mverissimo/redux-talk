import { Constants } from '.';

export let getCharacter = (id) => ({
  type: Constants.CHARACTER_GET,
  id
});

export let getCharacterSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_SUCCESS,
  payload
});

export let getCharacterFailure = (error) => ({
  type: Constants.CHARACTER_GET_FAILURE,
  error
});

export let getAll = (page) => ({
  type: Constants.CHARACTER_GET_ALL,
  page
});

export let getAllSuccess = (payload) => ({
  type: Constants.CHARACTER_GET_ALL_SUCCESS,
  payload
});

export let getAllFailure = (error) => ({
  type: Constants.CHARACTER_GET_ALL_FAILURE,
  error
});

export let filterCharacters = (status) => ({
  type: Constants.FILTER_CHARACTERS,
  status
});
