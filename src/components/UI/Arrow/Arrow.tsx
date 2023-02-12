import GradientCard from "../GradientCard/GradientCard";
import classes from "./Arrow.module.css";
import Image from "next/image";
import { IArrow } from "./IArrow";

const Arrow = ({ onClick, to }: IArrow): JSX.Element => {
  return (
    <>
      <GradientCard radius='8px' borderWidth='1px'>
        <button className={classes.arrow} onClick={onClick}>
          {to === "prev" && (
            <Image src='/arrow-prev.png' width={9.5} height={19} alt='prev' />
          )}
          {to === "next" && (
            <Image src='/arrow-next.png' width={9.5} height={19} alt='next' />
          )}
        </button>
      </GradientCard>
    </>
  );
};

export default Arrow;
