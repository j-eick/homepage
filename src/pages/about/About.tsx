import { useEffect } from "react";
import Nav from "../../components/ui/nav/Nav";
import styles from "./about.module.css";
import { useLocation } from "react-router-dom";

export default function About() {
  const currentUrl = useLocation().pathname;

  useEffect(() => {
    console.log(currentUrl);
  }, []);

  return (
    <main>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum accusantium odit eum itaque non
        necessitatibus officia reiciendis dolorem quod nemo excepturi neque tenetur, minus voluptas qui reprehenderit in
        amet!
      </p>
      <Nav />
    </main>
  );
}
