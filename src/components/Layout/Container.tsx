import { ReactNode } from "react";
import classes from "./Container.module.css";

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
  return <main className={classes.container}>{children}</main>;
};

export default Container;
