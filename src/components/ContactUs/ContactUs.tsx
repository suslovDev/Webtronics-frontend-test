import classes from "./ContactUs.module.css";
import Form from "../Form/Form";
import GradientCard from "../UI/GradientCard/GradientCard";
import Heading from "../UI/Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import Section from "../UI/Section/Section";
import Anchor from "../Layout/Anchor";

const ContactUs = () => {
  return (
    <Section name='section' align='center' style={{ height: "auto" }}>
      <Anchor id='contact' gap={50} />
      <GradientCard radius='20px' borderWidth='1px'>
        <div className={classes["container"]}>
          <div className={classes.form}>
            <Heading size='2'>Contact Us</Heading>
            <Paragraph size='1' style={{ padding: "16px" }}>
              Do you have any kind of help please contact with us.
            </Paragraph>
            <Form />
          </div>
        </div>
      </GradientCard>
    </Section>
  );
};

export default ContactUs;
