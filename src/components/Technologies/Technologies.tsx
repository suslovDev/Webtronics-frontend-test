import classes from "./Technologies.module.css";
import programs from "../../static-data/programs";
import Heading from "../UI/Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import Program from "../Program/Program";
import Section from "../UI/Section/Section";
import Anchor from "../Layout/Anchor";

const Technologies = (): JSX.Element => {
  return (
    <Section name='section' align='center'>
      <Anchor id='programs' gap={50} />
      <div className={classes["block-head"]}>
        <Heading size='2'>Programming technologies</Heading>
        <Paragraph size='1'>
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </Paragraph>
      </div>
      <ul className={classes["block-content"]}>
        {programs.map((program) => {
          return (
            <li>
              <Program {...program} key={program.id} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Technologies;
