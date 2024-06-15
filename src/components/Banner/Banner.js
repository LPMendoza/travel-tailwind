import RowRight from '../../assets/images/row-right.png';

export default function Banner() {
  return (
    <div className="flex flex-col gap-8 relative z-1 py-16 px-16 text-primary bg-gray-200 rounded-3xl shadow-lg overflow-hidden">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-7xl">Take a Break</h1>
        <p className="text-secondary text-lg">
          Indulge in the freedom of exploration with effortless booking platform
        </p>
      </div>
      <div>
        <button className="flex gap-4 items-center border border-primary text-primary font-semibold py-4 px-6 rounded-full">
          Explore new places <img src={RowRight} alt="row" />
        </button>
      </div>
      <div className="h-4 w-4 rounded-full bg-gray1 absolute bottom-32 right-28 z-1"></div>
      <div className="h-44 w-44 rounded-full bg-accent absolute -bottom-10 -right-16"></div>
    </div>
  );
}
