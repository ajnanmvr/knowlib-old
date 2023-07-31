import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Card from "../Content/Card";
import Slider from "../Content/Slider";
import Axios from "../../Axios";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get("/data")
      .then((response) => {
        setCards(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="">
      <Header />
      <div className="h-96 p-24 bg-blue-900 w-full ">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-white font-bold text-6xl">Know Library</h1>
          <p className="text-white">
            Explore an extensive directory of essential websites, catering to
            academics, educators, and tech aficionados alike. <br />
            Unlock boundless knowledge and empower your quest for learning and
            advancement
          </p>
        <Slider />
        </div>
      </div>

      <div className="content">
        <div className="content-main">
          <div className="card-grid">
            {cards.length > 0 ? (
              cards.map((card) => <Card key={card._id} card={card} />)
            ) : (
              <p>Loading data..</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
