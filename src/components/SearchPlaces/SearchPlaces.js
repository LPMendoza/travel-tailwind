import Search from '../../assets/images/search.png';
export default function SearchPlaces() {
  return (
    <div className="flex flex-col gap-8 relative z-1 py-16 px-16 text-primary bg-gray1 rounded-3xl shadow-lg overflow-hidden text-secondary">
      <div className="flex flex-col gap-2">
        <label className="font-bold text-lg">Where</label>
        <input placeholder="Search destination" className="border-b pb-2" />
      </div>
      <button className="flex justify-center items-center gap-2 bg-primary px-8 py-4 rounded-full text-gray1">
        Start your search
        <img src={Search} alt="search" className="w-4" />
      </button>
    </div>
  );
}
