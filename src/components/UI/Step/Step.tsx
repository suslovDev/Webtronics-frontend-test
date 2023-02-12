import classes from "./Step.module.css";
import { IStep } from "./IStep";
import GradientCard from "../GradientCard/GradientCard";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

const Step = ({ variant, label, title, description }: IStep): JSX.Element => {
  if (!variant || !label || !title || !description) return <></>;

  return (
    <div className={classes["step-wraper"]}>
      <GradientCard radius='8px'>
        <div className={classes["step-content"]}>
          <Heading size='4'>{label}</Heading>
          <Heading size='3'>{title}</Heading>
          <Paragraph size='1' style={{ color: "#A2CBFB", textAlign: "left" }}>
            {description}
          </Paragraph>
        </div>
      </GradientCard>
      <div
        className={`${classes["brace"]} ${
          variant === "left-side" ? classes["left-side"] : classes["right-side"]
        }`}>
        <GradientCard
          background='none'
          radius='20px'
          borderWidth='6px'
          gradient='linear-gradient(90deg, rgba(21, 191, 253, 0) 8.03%, rgba(21, 191, 253, 0.7) 69.15%, rgba(156, 55, 253, 0.7) 97.95%);'
        />
      </div>
    </div>
  );
};

export default Step;
