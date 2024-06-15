import Menu from '../../assets/images/menu.png';
import Bell from '../../assets/images/bell.png';

export default function HeaderNavBar() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between container mx-auto rounded-xl bg-gray1 p-4 shadow-lg text-xs">
        <div className="flex items-start items-center gap-8 justify-center rounded-xl  p-2">
          <img src={Menu} alt="plane" />
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-red-400 absolute right-0" />
            <img src={Bell} className="w-4" alt="plane" />
          </div>
        </div>
        <div className="flex items-center gap-4 mb-0">
          <div className="w-8 h-8 rounded-full bg-violet-700"></div>
        </div>
      </div>
    </div>
  );
}
