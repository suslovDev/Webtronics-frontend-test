import classes from "./GradientCard.module.css";
import { IGradientCard } from "./IGradientCard";

const GradientCard = ({
  borderWidth,
  radius,
  gradient,
  background,
  children,
}: IGradientCard): JSX.Element => {
  const cardStyle = {
    padding: borderWidth,
    borderRadius: radius,
    background: background || "rgba(255, 255, 255, 0.05)",
  };
  const beforeStyle = gradient ? { background: gradient } : {};
  return (
    <div className={classes.card} style={cardStyle}>
      <div className={classes.before} style={beforeStyle} />
      {children}
    </div>
  );
};

export default GradientCard;
