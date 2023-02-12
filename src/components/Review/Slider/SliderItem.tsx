import classes from "./SliderItem.module.css";
import SliderImg from "./SliderImg";

interface ISliderItem {
  id: number;
  current: number;
  img: { standart: string; large: string };
}

const SliderItem = ({ id, current, img }: ISliderItem): JSX.Element => {
  const isMatch = id === current;

  return (
    <li className={classes["item"]}>
      {!isMatch && <SliderImg img={img} size='standart' />}
      {isMatch && <SliderImg img={img} size='large' />}
    </li>
  );
};

export default SliderItem;
