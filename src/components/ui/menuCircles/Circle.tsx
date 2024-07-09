import { ReactNode, useMemo } from "react";
import clsx from "clsx";
import styles from "./circle.module.css";
// import { HiOutlineHome } from "react-icons/hi2";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

type CircleProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "default" | "arrowLeft" | "arrowRight";
};

export default function Circle({ children, onClick }: CircleProps) {
  const nameTag = useMemo(() => {
    switch (children) {
      case "about":
        return styles["color--about"];
      case "work":
        return styles["color--work"];
      case "workLeft":
        return <FaLongArrowAltLeft />;
      case "workRight":
        return <FaLongArrowAltRight />;
      case "home":
        return styles["color--home"];

      default:
        return "";
    }
  }, []);

  return (
    <div className={clsx(styles.circle, nameTag, styles.blur)} onClick={onClick}>
      <span className={styles["circle--name"]}>{children}</span>
    </div>
  );
}
