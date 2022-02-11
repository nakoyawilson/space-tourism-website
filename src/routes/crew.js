import { useState } from "react";
import RadioButton from "../components/RadioButton";
import crewData from "../data/data-crew";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  const handleCrewChange = (e) => {
    setCrewIndex(e.target.id);
  };

  return (
    <main className="main-crew">
      <h1 className="page-heading">
        <span className="page-index">02</span>
        <span>Meet your crew</span>
      </h1>
      <div>
        <div className="image-wrapper">
          <img
            src={crewData[crewIndex].photo}
            alt={crewData[crewIndex].fullName}
            className="image-crew"
          />
        </div>
        <div>
          <form className="form-crew" onChange={handleCrewChange}>
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="crew-members"
              buttonID="0"
              buttonValue={crewData[0].fullName}
              buttonLabel=""
              labelClasses="label-crew"
            />
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="crew-members"
              buttonID="1"
              buttonValue={crewData[1].fullName}
              buttonLabel=""
              labelClasses="label-crew"
            />
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="crew-members"
              buttonID="2"
              buttonValue={crewData[2].fullName}
              buttonLabel=""
              labelClasses="label-crew"
            />
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="crew-members"
              buttonID="3"
              buttonValue={crewData[3].fullName}
              buttonLabel=""
              labelClasses="label-crew"
            />
          </form>
          <div>
            <h2 className="crew-title">
              {crewData[crewIndex].rank}
              <span className="crew-name">{crewData[crewIndex].fullName}</span>
            </h2>
            <p className="paragraph crew-paragraph">
              {crewData[crewIndex].bio}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
