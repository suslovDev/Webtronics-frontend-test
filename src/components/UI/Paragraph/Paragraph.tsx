import { IParagraph } from "./IParagraph";
import classes from "./Paragraph.module.css";

const Paragraph = ({ size, style, children }: IParagraph): JSX.Element => {
  switch (size) {
    case "1":
      return (
        <p className={classes.p1} style={style}>
          {children}
        </p>
      );
    case "2":
      return <p className={classes.p2}>{children}</p>;

    default:
      return <></>;
  }
};

export default Paragraph;
