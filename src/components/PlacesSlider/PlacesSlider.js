import { useState } from 'react';
import Left from '../../assets/images/left.png';
import Right from '../../assets/images/right.png';
import Flag from '../../assets/images/switzerland.png';

export default function PlacesSlider({ places, onChange, currentPlace }) {
  const [placesIndex, setPlaceIndex] = useState(0);

  const handleOnLeftClick = () => {
    if (placesIndex === 0) {
      return;
    }
    setPlaceIndex((prevState) => prevState - 1);
    onChange(places[placesIndex - 1]);
  };
  const handleOnRightClick = () => {
    if (placesIndex === places.length - 1) {
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
      <div className="flex items-center gap-8 relative z-1 py-8 px-16">
        <span className="font-bold flex gap-2">
          <img src={Flag} className="w-4" />
          Switzerland
        </span>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full hover:border focus:border border-slate-900"
            onClick={handleOnLeftClick}
          >
            <img src={Left} className="w-3" />
          </button>
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full hover:border focus:border border-slate-900"
            onClick={handleOnRightClick}
          >
            <img src={Right} className="w-3" />
          </button>
        </div>
        <div className="border border-primary p-0 bg-primary w-full"></div>
        <div className="flex items-center gap-1">
          <span className="text-xl ">
            {placesIndex < 10 ? `0${placesIndex + 1}` : placesIndex + 1}
          </span>
          <span className="text-gray-500">
            /{placesIndex < 10 ? `0${places.length}` : places.length}
          </span>
        </div>
      </div>
    </>
  );
}
