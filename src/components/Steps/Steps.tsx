import classes from "./Steps.module.css";
import Heading from "../UI/Heading/Heading";
import Section from "../UI/Section/Section";
import Step from "../UI/Step/Step";
import Anchor from "../Layout/Anchor";

const Steps = (): JSX.Element => {
  const evenClasses = `${classes.step} ${classes.even}`;
  const oddClasses = `${classes.step} ${classes.odd}`;
  return (
    <Section
      name='section'
      align='center'
      style={{ height: "auto", marginBottom: "100px" }}>
      <Anchor id='steps' gap={50} />
      <Heading size='2' style={{ width: "auto" }}>
        Steps
      </Heading>
      <div className={classes.wraper}>
        <div className={classes.first}>
          <div className={evenClasses}>
            <Step
              variant='left-side'
              label='Step 1'
              title='Introduction to Front-End'
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
            <img src='/step-arrow.png' className={classes.left} />
          </div>
          <div className={evenClasses}>
            <Step
              variant='left-side'
              label='Step 3'
              title='Introduction to Front-End '
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
            <img src='/step-arrow.png' className={classes.left} />
          </div>
          <div className={evenClasses}>
            <Step
              variant='left-side'
              label='Step 5'
              title='Introduction to Front-End '
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
            <img src='/step-arrow.png' className={classes.left} />
          </div>
        </div>
        <div className={classes.line} />
        <div className={classes.last}>
          <div className={oddClasses}>
            <img src='/step-arrow.png' className={classes.right} />
            <Step
              variant='right-side'
              label='Step 2'
              title='Introduction to Front-End '
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
          </div>
          <div className={oddClasses}>
            <img src='/step-arrow.png' className={classes.right} />
            <Step
              variant='right-side'
              label='Step 4'
              title='Introduction to Front-End '
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
          </div>
          <div className={oddClasses}>
            <img src='/step-arrow.png' className={classes.right} />
            <Step
              variant='right-side'
              label='Step 6'
              title='Introduction to Front-End '
              description='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Steps;
