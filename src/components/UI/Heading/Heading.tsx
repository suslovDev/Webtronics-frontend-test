import { IHeading } from "./IHeading";
import classes from "./Heading.module.css";

const Heading = ({ size, children, style }: IHeading): JSX.Element => {
  switch (size) {
    case "1":
      return (
        <h1 className={classes.h1} style={style}>
          {children}
        </h1>
      );

    case "2":
      return (
        <h2 className={classes.h2} style={style}>
          {children}
        </h2>
      );

    case "3":
      return (
        <h3 className={classes.h3} style={style}>
          {children}
        </h3>
      );

    case "4":
      return (
        <h4 className={classes.h4} style={style}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};

export default Heading;
