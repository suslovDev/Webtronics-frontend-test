import classes from "./Accordeon.module.css";
import { IAccordeon } from "./IAccordeon";
import { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Image from "next/image";

const Accordeon = ({
  title,
  text,
  isDriven,
  id,
  opened,
  onClick,
}: IAccordeon): JSX.Element => {
  let initialState = isDriven ? opened : false;
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    if (isDriven) {
      setIsOpen(opened);
    }
    return;
  }, [opened]);

  const handleClick = () => {
    if (isDriven && id && onClick) {
      onClick(id);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const contentClasses = `${classes["accordeon__content"]} ${
    !isOpen ? "" : classes["show-content"]
  }`;

  return (
    <>
      <div className={classes["wrap"]}>
        <img src='/top.png' className={classes["top"]} />
        <div className={classes["accordeon"]}>
          <div className={classes["accordeon__heading"]}>
            <Heading size='4'>{title}</Heading>
            <div onClick={handleClick} className={classes["action"]}>
              {!isOpen && (
                <Image src='/plus.png' width='24' height='24' alt='open' />
              )}
              {isOpen && (
                <Image src='/minus.png' width='24' height='24' alt='close' />
              )}
            </div>
          </div>
          <div className={contentClasses}>
            <Paragraph size='1'>{text}</Paragraph>
          </div>
        </div>
        <img src='/bottom.png' className={classes["bottom"]} />
      </div>
    </>
  );
};

export default Accordeon;
