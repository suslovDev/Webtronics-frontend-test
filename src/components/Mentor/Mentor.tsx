import classes from "./Mentor.module.css";
import { IMentor } from "./IMentor";
import GradientCard from "../UI/GradientCard/GradientCard";
import Heading from "../UI/Heading/Heading";
import Image from "next/image";
import Paragraph from "../UI/Paragraph/Paragraph";

const Mentor = ({ href, name, post, style }: IMentor): JSX.Element => {
  return (
    <div className={classes["program"]} style={style || {}}>
      <GradientCard radius='50%'>
        <Image src={href as string} width={188} height={188} alt={name} />
      </GradientCard>
      <div style={{ textAlign: "left" }}>
        <Heading size='4'>{name}</Heading>
        <Paragraph size='2'>{post}</Paragraph>
      </div>
    </div>
  );
};

export default Mentor;
