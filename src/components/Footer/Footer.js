import User from '../../assets/images/user.png';
import Heart from '../../assets/images/heart.png';
import World from '../../assets/images/world.png';

export default function Footer() {
  return (
    <div className="flex border-t border-gray1/40 text-gray1 relative z-1 font-serif">
      <div className="flex flex-col items-center border-r border-gray1/40 w-2/4 py-12">
        <div className="flex flex-col min-w-72">
          <div className="flex gap-2">
            <span className="text-2xl font-semibold">4.86 </span>
            <span className="text-2xl text-gray-400 font-semibold">/ 5.00</span>
          </div>
          <span className="flex gap-2 items-center">
            <img src={User} width="12" />
            Airbnb's reviewers
          </span>
          <div className="w-full rounded-full bg-gray-400/40 mt-6 relative">
            <div className="h-2 rounded-full bg-gray1 w-2/3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-gray1/40 w-2/3 py-12">
        <div className="flex flex-col min-w-72">
          <div className="flex gap-2">
            <span className="text-2xl font-semibold">Places in Switzerland</span>
          </div>
          <div className="flex gap-4 items-center text-xs">
            <span className="flex gap-2 items-center">
              <img src={Heart} className="w-4" />
              Voted by Roam
            </span>
            <span className="flex gap-2 items-center">
              <img src={World} className="w-4" />
              112k visitors
            </span>
          </div>
          <div className="w-full rounded-full bg-gray-400/40 mt-4 relative"></div>
        </div>
      </div>
    </div>
  );
}
