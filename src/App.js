import Header from "./Components/Header";

function App() {
  return (
    <div className="w-full h-full bg-[#111111] text-white text-center py-14 box-border">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold pb-14 ">Pokemon</h1>
        <Header />
      </div>
    </div>
  );
}

export default App;
