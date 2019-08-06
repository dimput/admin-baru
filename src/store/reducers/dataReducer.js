const FETCH_TODOS = "FETCH_TODOS";
// const FETCH_USER = "FETCH_USER";
const dimas = {
  datamu: null
}

export default (state = dimas, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {datamu : action.payload}
    default:
      return state;
  }
};