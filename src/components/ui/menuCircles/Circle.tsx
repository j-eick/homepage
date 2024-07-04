import { useMemo } from "react";
import clsx from "clsx";
import styles from "./circle.module.css";
import { motion } from "framer-motion";

type CircleProps = {
  name: "profile" | "work" | "hello";
};

export default function Circle({ name }: CircleProps) {
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
    <div className={clsx(styles.circle, nameTag, styles.blur)}>
      <span className={styles["circle--name"]}>{name}</span>
    </div>
  );
}
