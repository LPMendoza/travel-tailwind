import User from '../../assets/images/user.png';
import Heart from '../../assets/images/heart.png';
import World from '../../assets/images/world.png';
import Star from '../../assets/images/star.png';
import UserLists from '../UsersList/UserList';
import BadgesSlider from '../BadgesSlider';

export default function Footer({ places, onPlaceClick, currentPlace }) {
  return (
    <div className="flex border-t border-gray1/40 text-gray1 relative z-1 font-serif bg-gradient-to-t from-slate-800 to-slate-900/0">
      <div className="flex flex-col items-center border-r border-gray1/40 w-2/4 py-12">
        <div className="flex flex-col min-w-72 gap-2">
          <div>
            <div className="flex gap-2 items-center">
              <img src={Star} className="w-4 h-4" alt="star icon" />
              <span className="text-2xl font-semibold">4.86 </span>
              <span className="text-2xl text-gray-400 font-semibold">/ 5.00</span>
            </div>
            <span className="flex gap-2 items-center">
              <img src={User} className="w-3" alt="user icon" />
              Airbnb's reviewers
            </span>
          </div>
          <div className="w-full rounded-full bg-gray-400/40 mt-5 relative">
            <div className="h-2 rounded-full bg-gray1 w-2/3" />
          </div>
          <UserLists />
        </div>
      </div>
      <div className="flex justify-center border-gray1/40 w-2/3 py-12">
        <div className="flex flex-col gap min-w-72">
          <div className="flex gap-2">
            <span className="text-2xl font-semibold">Places in Switzerland</span>
          </div>
          <div className="flex gap-4 items-center text-xs">
            <span className="flex gap-2 items-center">
              <img src={Heart} className="w-4" />
              Voted by Roam®
            </span>
            <span className="flex gap-2 items-center">
              <img src={World} className="w-4" />
              112k visitors
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
