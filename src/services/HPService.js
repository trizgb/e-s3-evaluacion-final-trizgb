const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';

const getCharacters = () => fetch(ENDPOINT).then(response => response.json());

export {getCharacters};