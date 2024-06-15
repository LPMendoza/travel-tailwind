import { useState } from 'react';
import Header from './Header';
import PlacesSlider from './PlacesSlider';

import Flag from '../assets/images/switzerland.png';
import Zermartt from '../assets/images/zermartt.jpg';
import Bern from '../assets/images/bern.jpg';
import Geneva from '../assets/images/geneva.jpg';
import interlaken from '../assets/images/interlaken.jpg';
import Lucerne from '../assets/images/lucerne.jpg';
import Zurich from '../assets/images/zurich.jpg';
import Footer from './Footer/Footer';
import HeaderNavBar from './HeaderNavBar';
import Banner from './Banner';
import SearchPlaces from './SearchPlaces';

const places = [
  { label: 'Zermartt', score: 4.5, image: Zermartt },
  { label: 'Bern', score: 2.5, image: Bern },
  { label: 'Geneva', score: 3.8, image: Geneva },
  { label: 'Interlaken', score: 1.6, image: interlaken },
  { label: 'Lucerne', score: 5, image: Lucerne },
  { label: 'Zurich', score: 3, image: Zurich },
];

function App() {
  const [place, setPlace] = useState(places[0]);
  const onChangeImage = (place) => {
    setPlace(place);
  };

  return (
    <>
      {place && (
        <img src={place.image} alt="background" className="fixed h-full w-full object-cover z-0" />
      )}
      <div className="fixed h-full w-full backdrop-blur-md z-0"></div>
      <div className="flex max-xl:flex-col gap-3 container mx-auto">
        <div className="flex flex-col max-xl:w-full gap-3 h-screen text-sm relative z-1 w-2/3">
          <Header />
          <div className="w-full relative flex flex-col justify-between mx-auto mb-4 rounded-3xl shadow-lg overflow-hidden h-full max-md:min-h-full">
            <PlacesSlider
              places={places}
              onChange={onChangeImage}
              currentPlace={place}
              country="Switzerland"
              flag={Flag}
            />
            <Footer
              places={places}
              onPlaceClick={setPlace}
              currentPlace={place}
              destiny={'Switzerland'}
              visitors={112}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm relative z-1 w-1/3 max-xl:w-full">
          <div className="w-full relative flex flex-col mx-auto mb-4 rounded-3xl  overflow-hidden h-full">
            <HeaderNavBar />
            <div className="w-full h-full flex flex-col mx-auto gap-3 mt-3">
              <Banner />
              <SearchPlaces />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
