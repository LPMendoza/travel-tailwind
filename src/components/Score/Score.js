import Star from '../../assets/images/star.png';
import User from '../../assets/images/user.png';

export default function Score({ score }) {
  return (
    <>
      <div>
        <div className="flex gap-2 items-center">
          <img src={Star} className="w-4 h-4" alt="star icon" />
          <span className="text-2xl font-semibold">{score}</span>
          <span className="text-2xl text-gray-400 font-semibold">/ 5.00</span>
        </div>
        <span className="flex gap-2 items-center">
          <img src={User} className="w-3" alt="user icon" />
          Airbnb's reviewers
        </span>
      </div>
      <div className="w-full rounded-full bg-gray-400/40 mt-5 relative">
        <div
          className="h-2 rounded-full bg-gray1"
          style={{
            width: `${(score * 100) / 5}%`,
          }}
        />
      </div>
    </>
  );
}
