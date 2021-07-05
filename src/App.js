import "./App.scss";
import { useState } from "react";
import Emojis from "./assets/emojis.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div className="container">
        <Search search={search} setSearch={setSearch} />
        {Emojis.filter((item) => {
          if (search === "") {
            return item;
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
          .slice(0, 21)
          .map((item, index) => {
            return <Line key={index} item={item} />;
          })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
