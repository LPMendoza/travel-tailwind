import { useState } from 'react';
import Header from './Header';
import PlacesSlider from './PlacesSlider';

import Zermartt from '../assets/images/zermartt.jpg';
import Bern from '../assets/images/bern.jpg';
import Geneva from '../assets/images/geneva.jpg';
import interlaken from '../assets/images/interlaken.jpg';
import Lucerne from '../assets/images/lucerne.jpg';
import Zurich from '../assets/images/zurich.jpg';
import Footer from './Footer/Footer';

const images = [Zermartt, Bern, Geneva, interlaken, Lucerne, Zurich];

function App() {
  const [backgroundImage, setBackgroundImage] = useState(Zermartt);
  const onChangeImage = (image) => {
    setBackgroundImage(image);
  };
  return (
    <>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="background"
          className="fixed h-full w-full object-cover z-0 background-image"
        />
      )}
      <div className="fixed h-full w-full backdrop-blur-md z-0"></div>
      <div className="flex flex-col gap-3 h-screen bg-primary/30 text-sm relative z-1">
        <Header />
        <div className="container relative flex flex-col justify-between mx-auto mb-4 rounded-xl shadow-lg overflow-hidden h-full">
          <PlacesSlider images={images} onChange={onChangeImage} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
