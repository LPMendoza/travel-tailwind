export default function BadgesSlider({ places, onPlaceClick, currentPlace }) {
  if (!places?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 items-center text-xs">
      {places.map((place) => (
        <button
          key={place.label}
          onClick={() => onPlaceClick(place)}
          className={`rounded-full px-4 py-1 border-2 border-gray1 hover:bg-gray1 hover:text-primary transition-all ${
            currentPlace.label === place.label ? 'bg-gray1 text-primary' : 'text-gray1'
          }`}
        >
          {place.label}
        </button>
      ))}
    </div>
  );
}
