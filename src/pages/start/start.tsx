import "../../index.css";
import "../../App.css";
import start from "./start.module.css";
import Circle from "../../components/ui/menuCircles/Circle";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <main>
      <section className={start.backdrop}>
        <img className={start.profile} src="/profile.jpg" alt="profile image" />
        <div className={clsx(start.content)}>
          <div className={clsx(start.hero)}>
            <h1>
              <span className={start["hero--title"]}>Hey! &nbsp;</span>Josh here ~
            </h1>
            <p>
              <span className={start["hero--text"]}>
                I'm a frontend engineer. <br /> Read up <Link to={"/profile"}>more</Link> about me.
              </span>
            </p>
            <ul>
              <li>
                <span># </span>react
              </li>
              <li>
                <span># </span>next.js
              </li>
              <li>
                <span># </span>vite.js
              </li>
              <li>
                <span># </span>typescript
              </li>
              <li>
                <span># </span>tailwind
              </li>
              <li>
                <span># </span>svelte
              </li>
            </ul>
          </div>
        </div>
        <motion.ul
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={start.nav}
        >
          <li>
            <Circle name="profile" onClick={() => <Link to={"/profile"}></Link>} />
          </li>
          <li>
            <Circle name="work" />
          </li>
        </motion.ul>
      </section>
    </main>
  );
}
