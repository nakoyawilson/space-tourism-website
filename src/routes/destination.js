import { useState } from "react";
import RadioButton from "../components/RadioButton";
import destinations from "../data/data-destinations";
import "../App.css";

const Destination = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);

  const handleDestinationChange = (e) => {
    setDestinationIndex(e.target.id);
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
            src={destinations[destinationIndex].image}
            alt={destinations[destinationIndex].destination}
            className="image-destination"
          />
        </div>
        <div className="content-destination">
          <form className="form-destination" onChange={handleDestinationChange}>
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="0"
              buttonValue="Moon"
              buttonLabel="Moon"
              labelClasses="label-destination"
              isChecked={true}
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="1"
              buttonValue="Mars"
              buttonLabel="Mars"
              labelClasses="label-destination"
              isChecked={false}
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="2"
              buttonValue="Titan"
              buttonLabel="Titan"
              labelClasses="label-destination"
              isChecked={false}
            />
            <RadioButton
              radioButtonClasses="inline-radio-button"
              groupName="destinations"
              buttonID="3"
              buttonValue="Europa"
              buttonLabel="Europa"
              labelClasses="label-destination"
              isChecked={false}
            />
          </form>
          <h2 className="page-subheading">
            {destinations[destinationIndex].destination}
          </h2>
          <p className="paragraph destination-paragraph">
            {destinations[destinationIndex].description}
          </p>
          <section className="stats-container">
            <div>
              <h3 className="stats-heading">Avg. distance</h3>
              <span className="stats-number">
                {destinations[destinationIndex].distance}
              </span>
            </div>
            <div>
              <h3 className="stats-heading">Est. travel time</h3>
              <span className="stats-number">
                {destinations[destinationIndex].time}
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Destination;
