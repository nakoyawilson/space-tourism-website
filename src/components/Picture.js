const Picture = (props) => {
  return (
    <picture className={props.imageClass}>
      <source media="(max-width: 1439px)" srcset={props.landscapePicture} />
      <source media="(min-width: 1440px)" srcset={props.portraitPicture} />
      <img src={props.landscapePicture} alt={props.altText} />
    </picture>
  );
};

export default Picture;
