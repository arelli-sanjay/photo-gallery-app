
function favoritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const alreadyFavorite = state.some(
        (photo) => photo.id === action.payload.id
      );

      if (alreadyFavorite) {
        return state.filter(
          (photo) => photo.id !== action.payload.id
        );
      }

      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export default favoritesReducer;
