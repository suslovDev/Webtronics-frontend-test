import classes from "./Mentors.module.css";
import mentors from "../../static-data/mentors";
import Mentor from "../Mentor/Mentor";

const Mentors = (): JSX.Element => {
  return (
    <ul className={classes["mentors"]}>
      {mentors.map((mentor, i) => (
        <li key={i}>
          {mentor.isMain && (
            <Mentor
              {...mentor}
              style={{ position: "relative", top: "-50px" }}
            />
          )}
          {!mentor.isMain && <Mentor {...mentor} />}
        </li>
      ))}
    </ul>
  );
};

export default Mentors;
