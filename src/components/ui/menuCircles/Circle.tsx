import { useMemo } from "react";
import clsx from "clsx";
import styles from "./circle.module.css";

type CircleProps = {
  name: "profile" | "work" | "hello";
  onClick?: () => void;
};

export default function Circle({ name, onClick }: CircleProps) {
  const nameTag = useMemo(() => {
    switch (name) {
      case "profile":
        return styles["color--profile"];
      case "work":
        return styles["color--work"];

      default:
        return "";
    }
  }, []);

  return (
    <div className={clsx(styles.circle, nameTag, styles.blur)} onClick={onClick}>
      <span className={styles["circle--name"]}>{name}</span>
    </div>
  );
}
