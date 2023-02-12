import Heading from "../UI/Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import Section from "../UI/Section/Section";
import classes from "./Galery.module.css";

const Galery = (): JSX.Element => {
  return (
    <Section align='center' name='section'>
      <div id='galery' />
      <div className={classes["heading"]}>
        <Heading size='2'>Galery</Heading>
      </div>
      <div className={classes["galery-block"]}>
        <div className={classes["left-side"]}>
          <Paragraph size='1' style={{ textAlign: "left" }}>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </Paragraph>

          <img src='/galery_1.png' />
        </div>
        <div className={classes["right-side"]}>
          <div className={classes["right-top"]}>
            <div className={classes["large"]}>
              <img src='/galery_2.png' />
            </div>
            <div className={classes["two-small"]}>
              <img src='/galery_3.png' />
              <img src='/galery_4.png' />
            </div>
          </div>
          <div className={classes["right-bottom"]}>
            <Paragraph size='1' style={{ textAlign: "left" }}>
              If you would like to learn web development and get a job in the
              tech industry, you are going to LOVE this course! Learn HTML, CSS,
              JavaScript, Bootstrap and more with over 15 hours of HD video
              tutorials! This course was designed to be extremely beginner
              friendly. We will begin with the very basics of HTML and build a
              simple web page.
            </Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Galery;
