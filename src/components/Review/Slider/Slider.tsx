import classes from "./Slider.module.css";
import { useState } from "react";
import Heading from "../../UI/Heading/Heading";
import Paragraph from "../../UI/Paragraph/Paragraph";
import Arrow from "../../UI/Arrow/Arrow";
import SliderItem from "./SliderItem";

const Slider = (): JSX.Element => {
  const [currentId, setCurrentId] = useState(1);
  const [items, setItems] = useState([
    {
      id: 1,
      review: {
        title: "Best courses ever",
        content:
          'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
      },
      img: {
        standart: "/first-slide_standart.png",
        large: "/first-slide_large.png",
      },
    },
    {
      id: 2,
      review: {
        title: "Amazing teaching",
        content:
          "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
      },
      img: {
        standart: "/second-slide_standart.png",
        large: "/second-slide_large.png",
      },
    },
    {
      id: 3,
      review: {
        title: "Simple and easy",
        content:
          "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
      },
      img: {
        standart: "/third-slide_standart.png",
        large: "/third-slide_large.png",
      },
    },
  ]);

  const handleNext = () => {
    if (currentId === items.length) {
      setCurrentId(1);
    } else {
      setCurrentId((prev) => prev + 1);
    }
    const newItems = [...items];
    const firstItem = newItems.splice(0, 1)[0];
    newItems.push(firstItem);
    setItems(newItems);
  };

  const handlePrev = () => {
    if (currentId === 1) {
      setCurrentId(items.length);
    } else {
      setCurrentId((prev) => prev - 1);
    }
    const newItems = [...items];
    const firstItem = newItems.splice(items.length - 1, 1)[0];
    newItems.unshift(firstItem);
    setItems(newItems);
  };

  const currentReview = items.filter((item) => item.id === currentId)[0].review;
  return (
    <div className={classes["review"]}>
      <div className={classes["info"]}>
        <Heading size='4'>{currentReview.title}</Heading>

        <Paragraph
          size='1'
          style={{
            textAlign: "left",
            marginRight: "20px",
            marginTop: "17px",
          }}>
          {currentReview.content}
        </Paragraph>
      </div>
      <div className={classes["slider"]}>
        <div className={classes["navigate"]}>
          <div className={classes["ordinal"]}>
            {currentId}/<span>{items.length}</span>
          </div>
          <div className={classes["actions"]}>
            <Arrow onClick={handlePrev} to='prev' />
            <Arrow onClick={handleNext} to='next' />
          </div>
        </div>
        <ul className={classes["slides"]}>
          {items.map((item) => {
            return (
              <SliderItem id={item.id} img={item.img} current={currentId} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
