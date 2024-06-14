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

const places = [
  { label: 'Zermartt', image: Zermartt },
  { label: 'Bern', image: Bern },
  { label: 'Geneva', image: Geneva },
  { label: 'Interlaken', image: interlaken },
  { label: 'Lucerne', image: Lucerne },
  { label: 'Zurich', image: Zurich },
];

function App() {
  const [place, setPlace] = useState(places[0]);
  const onChangeImage = (place) => {
    setPlace(place);
  };
  return (
    <>
      {place && (
        <img
          src={place.image}
          alt="background"
          className="fixed h-full w-full object-cover z-0 background-image"
        />
      )}
      <div className="fixed h-full w-full backdrop-blur-md z-0"></div>
      <div className="flex flex-col gap-3 h-screen bg-primary/30 text-sm relative z-1">
        <Header />
        <div className="container relative flex flex-col justify-between mx-auto mb-4 rounded-xl shadow-lg overflow-hidden h-full">
          <PlacesSlider places={places} onChange={onChangeImage} currentPlace={place} />
          <Footer places={places} onPlaceClick={setPlace} currentPlace={place} />
        </div>
      </div>
    </>
  );
}

export default App;
