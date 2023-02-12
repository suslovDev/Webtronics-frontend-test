import classes from "./Input.module.css";
import { IInput } from "./IInput";
import GradientCard from "../GradientCard/GradientCard";

const Input = ({ register, placeholder, hasError }: IInput): JSX.Element => {
  return (
    <>
      {hasError && (
        <div className={classes["no-gradient"] + " " + classes["block"]}>
          <input {...register} placeholder={placeholder} />
        </div>
      )}
      {!hasError && (
        <GradientCard radius='8px' borderWidth='1px'>
          <div className={classes.block}>
            <input {...register} placeholder={placeholder} autoComplete='off' />
          </div>
        </GradientCard>
      )}
    </>
  );
};

export default Input;
