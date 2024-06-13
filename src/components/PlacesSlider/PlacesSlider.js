import { useState } from 'react';
import Left from '../../assets/images/left.png';
import Right from '../../assets/images/right.png';
import Flag from '../../assets/images/switzerland.png';
import Footer from '../Footer/Footer';

export default function PlacesSlider({ images, onChange }) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleOnLeftClick = () => {
    if (imageIndex === 0) {
      return;
    }
    setImageIndex((prevState) => prevState - 1);
    onChange(images[imageIndex - 1]);
  };
  const handleOnRightClick = () => {
    if (imageIndex === images.length - 1) {
      return;
    }
    setImageIndex((prevState) => prevState + 1);
    onChange(images[imageIndex + 1]);
  };

  return (
    <>
      <img
        src={images[imageIndex]}
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
            {imageIndex < 10 ? `0${imageIndex + 1}` : imageIndex + 1}
          </span>
          <span className="text-gray-500">
            /{imageIndex < 10 ? `0${images.length + 1}` : images.length + 1}
          </span>
        </div>
      </div>
    </>
  );
}
