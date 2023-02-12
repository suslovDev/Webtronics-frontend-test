import classes from "./Questions.module.css";
import questionSign from "../../../public/question.png";
import { Question } from "../../../types/input-params";
import { useState } from "react";
import Accordeon from "../UI/Accordeon/Accordeon";
import Heading from "../UI/Heading/Heading";
import Image from "next/image";
import Paragraph from "../UI/Paragraph/Paragraph";
import Section from "../UI/Section/Section";

const Questions = (): JSX.Element => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      title: "What is the price?",
      text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      isOpen: true,
    },
    {
      id: 2,
      title: "What is the price?",
      text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      isOpen: false,
    },
    {
      id: 3,
      title: "What is the price?",
      text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      isOpen: false,
    },
    {
      id: 4,
      title: "What is the price?",
      text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      isOpen: false,
    },
    {
      id: 5,
      title: "What is the price?",
      text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
      isOpen: false,
    },
  ]);

  const handleFold = (id: number) => {
    setQuestions(
      questions.map((question) => {
        question.isOpen = question.id === id ? !question.isOpen : false;
        return question;
      })
    );
  };

  return (
    <Section align='center' name='section'>
      <div id='questions' />
      <div className={classes["heading"]}>
        <Heading size='2'>Frequently Asked Questions</Heading>
      </div>
      <div className={classes["questions"]} style={{ marginTop: "56px" }}>
        <div className={classes["description"]}>
          <Paragraph size='1' style={{ width: "280px", textAlign: "left" }}>
            Do you have any kind of questions? We are here to help.
          </Paragraph>
          <Image
            src={questionSign}
            width={404}
            height={465}
            alt='bg'
            style={{ position: "relative", bottom: "-18px" }}
          />
        </div>
        <ul className={classes["accordeon-list"]}>
          {questions.map((question) => {
            return (
              <li>
                <Accordeon
                  id={question.id}
                  title={question.title}
                  text={question.text}
                  isDriven={true}
                  opened={question.isOpen}
                  onClick={handleFold}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Questions;
