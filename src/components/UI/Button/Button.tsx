import classes from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";

const Button = ({
  type,
  onClick,
  text,
  size,
  isDisabled,
}: ButtonProps): JSX.Element => {
  const buttonClasses = `${classes.button} ${
    isDisabled ? classes.disabled : ""
  }`;
  switch (size) {
    case "1":
      return (
        <button
          type={type}
          disabled={isDisabled}
          className={`${buttonClasses} ${classes.standart}`}
          onClick={onClick}>
          {text}
        </button>
      );
    case "2":
      return (
        <button
          disabled={isDisabled}
          className={`${buttonClasses} ${classes.large}`}
          onClick={onClick}>
          {text}
        </button>
      );
    default:
      return <></>;
  }
};

export default Button;
