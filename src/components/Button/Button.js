export default function Button({ children }) {
  return (
    <button className="flex items-center gap-2 bg-primary text-gray1 py-2 px-4 rounded-full">
      {children}
    </button>
  );
}
