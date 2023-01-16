import { HeadingProps } from "./HeadingProps";
import classes from "./Heading.module.css";

const Heading = ({ size, children }: HeadingProps): JSX.Element => {
  switch (size) {
    case "1":
      return <h1 className={classes.h1}>{children}</h1>;

    case "2":
      return <h2 className={classes.h2}>{children}</h2>;

    case "3":
      return <h3 className={classes.h3}>{children}</h3>;

    case "4":
      return <h4 className={classes.h4}>{children}</h4>;
    default:
      return <></>;
  }
};

export default Heading;
