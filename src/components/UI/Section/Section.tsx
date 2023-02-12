import classes from "./Section.module.css";
import { ISection } from "./ISection";

const Section = ({ name, align, children, style }: ISection): JSX.Element => {
  const namesOfClasses = {
    left: "left",
    center: "center",
    right: "right",
  };
  const sectionClasses = `${classes.section} ${classes[namesOfClasses[align]]}`;
  const SectionTag = name;
  return (
    <SectionTag className={sectionClasses} style={style}>
      {children}
    </SectionTag>
  );
};

export default Section;
