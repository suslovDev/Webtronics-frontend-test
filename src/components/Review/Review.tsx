import Anchor from "../Layout/Anchor";
import Heading from "../UI/Heading/Heading";
import Section from "../UI/Section/Section";
import Slider from "./Slider/Slider";

const Review = (): JSX.Element => {
  return (
    <Section name='section' align='center'>
      <Anchor id='review' gap={50} />
      <Heading size='2' style={{ width: "auto" }}>
        Review
      </Heading>
      <Slider />
    </Section>
  );
};

export default Review;
