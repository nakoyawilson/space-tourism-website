import { useState } from "react";
import RadioButton from "../components/RadioButton";
import Picture from "../components/Picture";
import technologies from "../data/data-technology";

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const handleTechnologyChange = (e) => {
    setTechnologyIndex(e.target.id);
  };
  return (
    <main className="main-technology">
      <h1 className="page-heading">
        <span className="page-index">03</span>
        <span>Space launch 101</span>
      </h1>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <Picture
            imageClass="image-technology"
            altText={technologies[technologyIndex].technology}
            landscapePicture={technologies[technologyIndex].landscapeImage}
          />
        </div>
        <div className="content-technology">
          <form className="form-technology" onChange={handleTechnologyChange}>
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="technologies"
              buttonID="0"
              buttonValue="1"
              labelClasses="label-techology"
            />
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="technologies"
              buttonID="1"
              buttonValue="2"
              labelClasses="label-techology"
            />
            <RadioButton
              radioButtonClasses="circle-radio-button"
              groupName="technologies"
              buttonID="2"
              buttonValue="3"
              labelClasses="label-techology"
            />
          </form>
          <div>
            <h2 className="technology-heading">
              The terminology...
              <span className="page-subheading">
                {technologies[technologyIndex].technology}
              </span>
            </h2>
            <p className="paragraph technology-paragraph">
              {technologies[technologyIndex].description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
