import classes from "./Anchor.module.css";
import { IAnchor } from "./IAnchor";

const Anchor = ({ id, gap }: IAnchor): JSX.Element => {
  const anchorStyle = {
    height: gap ? gap + "px" : "auto",
  };
  return <div id={id} className={classes.anchor} style={anchorStyle} />;
};

export default Anchor;
