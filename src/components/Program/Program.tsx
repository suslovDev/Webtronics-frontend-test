import { ProgramProps } from "./IProgram";
import classes from "./Program.module.css";
import Heading from "../UI/Heading/Heading";
import Image from "next/image";

const Program = ({ href, title }: ProgramProps): JSX.Element => {
  return (
    <div className={classes.program}>
      <Image src='/sim-card.svg' width={201} height={250} alt='' />
      <div className={classes["content"]}>
        <Image
          className={classes["pic"]}
          src={href}
          width={162}
          height={136}
          alt={title}
        />
        <Heading size='4' style={{ textAlign: "center" }}>
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default Program;
