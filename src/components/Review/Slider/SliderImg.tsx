import { ISliderImg } from "./ISliderImg";
import LargeSlideBorder from "./LargeSlideBorder";
import StandartSlideBorder from "./StandartSlideBorder";

const SliderImg = ({ size, img }: ISliderImg): JSX.Element => {
  return (
    <>
      <img src={img[size]} />
      {size === "standart" && <StandartSlideBorder />}
      {size === "large" && <LargeSlideBorder />}
    </>
  );
};

export default SliderImg;
