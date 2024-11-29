import "./App.css";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <div className="container mx-auto px-40">
      <h1 className="text-5xl text-red-600 py-2">BaltaNews</h1>
      <h2 className="text-2xl">Últimas notícias:</h2>
      <NewsList />
    </div>
  );
};

export default App;
