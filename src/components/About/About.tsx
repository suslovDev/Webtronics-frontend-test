import classes from "./About.module.css";

import Image from "next/image";
import Heading from "../UI/Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import Section from "../UI/Section/Section";
import Mentors from "../Mentors/Mentors";
import Anchor from "../Layout/Anchor";

const About = (): JSX.Element => {
  return (
    <Section name='section' align='center'>
      <Anchor id='about' gap={50}/>
      <Heading size='2' style={{ width: "auto" }}>
        About Us
      </Heading>
      <div className={classes["container"]}>
        <div className={classes["mentors"]}>
          <Heading size='3' style={{ width: "auto" }}>
            Mentors
          </Heading>
          <Image src='/mentors-line.svg' width={394} height={157} alt='' />
          <Mentors />
        </div>
        <Paragraph
          size='1'
          style={{ width: "486px", textAlign: "left", marginTop: "85px" }}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </Paragraph>
      </div>
    </Section>
  );
};

export default About;
