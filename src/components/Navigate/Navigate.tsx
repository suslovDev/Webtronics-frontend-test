import Image from "next/image";
import classes from "./Navigate.module.css";

const Navigate = () => {
  return (
    <div className={classes["navigate"]}>
      <div className={classes["logo"]}>
        <Image src='/logo.png' width={169} height={33} alt='Logo' />
      </div>
      <nav className={classes["nav"]}>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#programs'>Programs</a>
          </li>
          <li>
            <a href='#steps'>Steps</a>
          </li>
          <li>
            <a href='#questions'>Questions</a>
          </li>
          <li>
            <a href='#contact'>Get in touch</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigate;
