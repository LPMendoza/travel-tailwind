import Plane from '../../assets/images/plane.svg';
import Button from '../Button';
export default function Header() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between container mx-auto rounded-xl bg-gray1 p-4 shadow-lg text-xs">
        <div className="flex items-start justify-center rounded-xl w-8 h-8 bg-primary p-2">
          <img src={Plane} alt="plane" />
        </div>
        <div className="flex items-center gap-4 mb-0">
          <Button>
            <div className="bg-accent w-2 h-2 rounded-full"></div>New destination
          </Button>
          <a className="text-gray-400 font-bold px-4 py-1" href="/">
            Search
          </a>
          <a className="text-gray-400 font-bold px-4 py-1" href="/">
            Tours
          </a>
        </div>
      </div>
    </div>
  );
}
