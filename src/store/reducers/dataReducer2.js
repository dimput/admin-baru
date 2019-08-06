const FETCH_TODOS = "FETCH_TODOS";
// const FETCH_USER = "FETCH_USER";
const dimas = {
    dataku: null
  }

export default (state = dimas, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return{ dataku : action.datanya}
    default:
      return state;
  }
};