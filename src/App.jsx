
import {
  useState,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import useFetchPhotos from "./hooks/useFetchPhotos";
import PhotoCard from "./components/PhotoCard";
import favoritesReducer from "./reducer/favoritesReducer";

const STORAGE_KEY = "photo-gallery-favorites";

function getInitialFavorites() {
  try {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch {
    return [];
  }
}

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    getInitialFavorites
  );

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleToggleFavorite = useCallback((photo) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: photo,
    });
  }, []);

  const favoriteIds = useMemo(() => {
    return new Set(favorites.map((photo) => photo.id));
  }, [favorites]);

  const filteredPhotos = useMemo(() => {
    const sourcePhotos = showFavoritesOnly ? favorites : photos;

    return sourcePhotos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, favorites, searchTerm, showFavoritesOnly]);

  if (loading) {
    return <h2 className="text-center mt-10">Loading photos...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Photo Gallery
      </h1>

      <div className="max-w-md mx-auto mb-5">
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border rounded-lg shadow-sm"
        />
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowFavoritesOnly((current) => !current)}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
        >
          {showFavoritesOnly
            ? "Show All Photos"
            : `❤️ Favourites (${favorites.length})`}
        </button>
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="text-center text-gray-500">
          {showFavoritesOnly
            ? "You haven't added any favourites yet."
            : "No photos found."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favoriteIds.has(photo.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
