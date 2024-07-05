import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.backdrop)}>{children}</div>
    </div>
  );
}
