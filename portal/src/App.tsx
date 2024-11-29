import "./App.css";
import NewsList from "news/newsList";
import Widget from "weather/widget";
import ImageCycler from "ads/imageCycler";
import SponsorsList from "sponsors/sponsorsList";
import { useState } from "react";

const App = () => {
  const [adType, setAdType] = useState("rain");
  return (
    <div className="content grid grid-cols-12 px-32">
      <header className="col-span-12">
        <h1 className="text-5xl text-red-600 py-2">BaltaNews</h1>
      </header>
      <section className="col-span-10">
        <h2 className="text-2xl">Últimas notícias:</h2>
        <hr className="py-2" />

        <NewsList />
      </section>
      <aside className="pl-4 col-span-2 ">
        <Widget />
        <div className="py-2" />
        <div className="flex justify-between">
          <label htmlFor="is-rain">Está chovendo?</label>
          <select
            id="is-rain"
            className="rounded-lg border-black border w-20"
            value={adType}
            onChange={(event) => setAdType(event.target.value)}
          >
            <option value="rain">sim</option>
            <option value="sun">não</option>
          </select>
        </div>

        <ImageCycler adType={adType} />
      </aside>
      <footer className="col-span-12">
        <h2 className="text-2xl">Patrocinadores:</h2>
        <SponsorsList />
      </footer>
    </div>
  );
};

export default App;
