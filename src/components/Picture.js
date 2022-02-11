const Picture = (props) => {
  return (
    <picture>
      <source media="(max-width: 1439px)" srcset={props.landscapePicture} />
      <source media="(min-width: 1440px)" srcset={props.portraitPicture} />
      <img
        src={props.landscapePicture}
        alt={props.altText}
        className={props.imageClass}
      />
    </picture>
  );
};

export default Picture;
