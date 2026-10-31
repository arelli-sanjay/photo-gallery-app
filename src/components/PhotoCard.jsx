
function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition">
      <div className="relative">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-52 object-cover"
        />

        <button
          onClick={() => onToggleFavorite(photo)}
          className="absolute top-3 right-3 bg-white rounded-full w-10 h-10 text-2xl shadow"
          aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
        >
          {isFavorite ? "❤️" : "♡"}
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {photo.author}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Photo ID: {photo.id}
        </p>
      </div>
    </div>
  );
}

export default PhotoCard;
