import Heart from '../../assets/images/heart.png';
import World from '../../assets/images/world.png';
import UserLists from '../UsersList/UserList';
import BadgesSlider from '../BadgesSlider';
import Score from '../Score';

export default function Footer({ destiny, places, onPlaceClick, currentPlace, visitors }) {
  return (
    <div className="flex max-sm:flex-col max-sm:items-center border-t border-gray1/40 text-gray1 relative z-1 font-secondary bg-gradient-to-t from-slate-800 to-slate-900/0">
      <div className="flex flex-col items-center max-sm:border-0 md:border-r border-gray1/40 w-2/4 max-md:py-8 md:py-12 px-4">
        <div className="flex flex-col min-w-72 gap-2">
          <Score score={currentPlace.score.toFixed(2)} />
          <UserLists currentPlace={currentPlace} />
        </div>
      </div>
      <div className="flex justify-center border-gray1/40 w-2/3 md:py-12 px-4">
        <div className="flex flex-col gap min-w-72">
          <div className="flex gap-2">
            <span className="text-2xl font-semibold">Places in {destiny}</span>
          </div>
          <div className="flex gap-4 items-center text-xs">
            <span className="flex gap-2 items-center">
              <img src={Heart} className="w-4" alt="recommended by" />
              Voted by Roam®
            </span>
            <span className="flex gap-2 items-center">
              <img src={World} className="w-4" alt="visitors quantity" />
              {visitors}k visitors
            </span>
          </div>
          <div className="mt-5">
            <BadgesSlider places={places} onPlaceClick={onPlaceClick} currentPlace={currentPlace} />
          </div>
        </div>
      </div>
    </div>
  );
}
