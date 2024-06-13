import Header from './Header';

function App() {
  return (
    <>
      <div className="absolute h-full w-full bg-primary/20 backdrop-blur-md z-0"></div>
      <div className="text-sm relative z-1">
        <Header />
      </div>
    </>
  );
}

export default App;
