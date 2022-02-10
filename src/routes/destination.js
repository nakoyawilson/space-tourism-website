import { useState } from "react";
import RadioButton from "../components/RadioButton";
import destinations from "../data/data-destinations";
import "../App.css";

const Destination = () => {
  const [arrayIndex, setArrayIndex] = useState(0);

  const handleChange = (e) => {
    setArrayIndex(e.target.id);
  };
  return (
    <main className="main-destination">
      <h1 className="page-heading">
        <span className="page-index">01</span>
        <span>Pick your destination</span>
      </h1>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img
            src={destinations[arrayIndex].image}
            alt={destinations[arrayIndex].destination}
            className="image-destination"
          />
        </div>
        <div className="content-destination">
          <form className="form-destination" onChange={handleChange}>
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="0"
              buttonValue="Moon"
              labelClasses="label-destination"
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="1"
              buttonValue="Mars"
              labelClasses="label-destination"
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="2"
              buttonValue="Titan"
              labelClasses="label-destination"
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="3"
              buttonValue="Europa"
              labelClasses="label-destination"
            />
          </form>
          <h2 className="page-subheading">
            {destinations[arrayIndex].destination}
          </h2>
          <p className="paragraph destination-paragraph">
            {destinations[arrayIndex].description}
          </p>
          <section className="stats-container">
            <div>
              <h3 className="stats-heading">Avg. distance</h3>
              <span className="stats-number">
                {destinations[arrayIndex].distance}
              </span>
            </div>
            <div>
              <h3 className="stats-heading">Est. travel time</h3>
              <span className="stats-number">
                {destinations[arrayIndex].time}
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Destination;
