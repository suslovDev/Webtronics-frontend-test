import classes from "./Footer.module.css";
import Image from "next/image";
import Section from "../UI/Section/Section";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={classes["blur"]} />
      <Section
        name='footer'
        align='center'
        style={{ margin: "180px auto", width: "1224px", height: "auto" }}>
        <div className={classes["footer"]}>
          <div className={classes["logo-col"]}>
            <Image src={"/logo.png"} width={169} height={33} alt='Logo' />
            <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
          </div>
          <nav className={classes["footer-block__col"]}>
            <ul className={classes["navigate-block"]}>
              <li className={classes["caption"]}>Company</li>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#steps'>Steps</a>
              </li>
              <li>
                <a href='#questions'>FAQs</a>
              </li>
            </ul>
            <ul className={classes["navigate-block"]}>
              <li>
                <a href='#review'>Review</a>
              </li>
              <li>
                <a href='#galery'>Galery</a>
              </li>
            </ul>
          </nav>
          <nav className={classes["footer-block__col"]}>
            <ul className={classes["navigate-block"]}>
              <li className={classes["caption"]}>Social media</li>
              <div className={classes["social-list"]}>
                <li>
                  <Image
                    src={"/vector_1.png"}
                    width={14}
                    height={24}
                    alt='social_1'
                  />
                </li>
                <li>
                  <Image
                    src={"/vector_2.png"}
                    width={24}
                    height={24}
                    alt='social_2'
                  />
                </li>
                <li>
                  <Image
                    src={"/vector_3.png"}
                    width={14}
                    height={24}
                    alt='social_3'
                  />
                </li>
                <li>
                  <Image
                    src={"/vector_4.png"}
                    width={23}
                    height={22}
                    alt='social_4'
                  />
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </Section>
    </>
  );
};

export default Footer;
