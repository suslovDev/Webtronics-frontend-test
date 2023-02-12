import classes from "./Header.module.css";
import Button from "../UI/Button/Button";
import Heading from "../UI/Heading/Heading";
import Navigate from "../Navigate/Navigate";
import Paragraph from "../UI/Paragraph/Paragraph";
import Section from "../UI/Section/Section";

const Header = (): JSX.Element => {
  return (
    <Section
      name='header'
      align='center'
      style={{
        width: "1224px",
        margin: "0 auto",
        height: "100vh",
        justifyContent: "flex-start",
      }}>
      <Navigate />
      <div className={classes["header"]}>
        <div className={classes["row"]}>
          <Heading size='1' style={{ whiteSpace: "nowrap" }}>
            Front-End
          </Heading>
          <Paragraph
            size='1'
            style={{
              textAlign: "left",
              marginLeft: "57px",
              position: "relative",
              top: "20px",
            }}>
            Make UIs and websites beautiful, functional, and fast. Cover all the
            topics that expensive bootcamps teach (and more).
          </Paragraph>
        </div>
        <div className={classes.row}>
          <Button
            type='button'
            size='2'
            text='Start my career change'
            onClick={() => {}}
          />
          <Heading size='1' style={{ marginLeft: "24px" }}>
            Developer
          </Heading>
        </div>
        <div className={classes["row"]}>
          <Heading
            size='3'
            style={{ width: "100%", justifyContent: "flex-end" }}>
            Courses
          </Heading>
        </div>
      </div>
    </Section>
  );
};

export default Header;
