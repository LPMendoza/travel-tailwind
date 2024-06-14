import { useState } from 'react';
import Left from '../../assets/images/left.png';
import Right from '../../assets/images/right.png';

export default function PlacesSlider({
  places,
  onChange,
  currentPlace,
  currentIndex,
  country,
  flag,
}) {
  const [placesIndex, setPlaceIndex] = useState(0);

  const handleOnLeftClick = () => {
    if (placesIndex === 0) {
      setPlaceIndex(places.length - 1);
      onChange(places[places.length - 1]);
      return;
    }
    setPlaceIndex((prevState) => prevState - 1);
    onChange(places[placesIndex - 1]);
  };
  const handleOnRightClick = () => {
    if (placesIndex === places.length - 1) {
      setPlaceIndex(0);
      onChange(places[0]);
      return;
    }
    setPlaceIndex((prevState) => prevState + 1);
    onChange(places[placesIndex + 1]);
  };

  return (
    <>
      <img
        src={currentPlace.image}
        alt="places"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="flex items-center gap-8 relative z-1 py-8 px-16 text-secondary">
        <span className="font-semibold flex gap-2">
          <img src={flag} className="w-4" alt="flag" />
          {country}
        </span>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full hover:border focus:border border-slate-900"
            onClick={handleOnLeftClick}
          >
            <img src={Left} className="w-3" alt="back button" />
          </button>
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full hover:border focus:border border-slate-900"
            onClick={handleOnRightClick}
          >
            <img src={Right} className="w-3" alt="next button" />
          </button>
        </div>
        <div className="border-t border-primary p-0 bg-primary w-full"></div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold">
            {placesIndex < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
          </span>
          <span className="text-gray-500">
            /{placesIndex < 10 ? `0${places.length}` : places.length}
          </span>
        </div>
      </div>
    </>
  );
}
