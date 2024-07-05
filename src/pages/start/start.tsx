import "../../index.css";
import "../../App.css";
import start from "./start.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Nav from "../../components/ui/nav/Nav";

export default function Start() {
  return (
    <main>
      <img className={start["profile--avatar"]} src="/profile.jpg" alt="profile image" />
      <div className={clsx(start.hero)}>
        <h1 className={start["hero--title"]}>
          <span className={start["hero--hey"]}>Hey! &nbsp;</span>Happy to have you
        </h1>
        <p>
          <span className={start["hero--text"]}>
            I'm a frontend engineer. <br /> Read up{" "}
            <Link to={"/about"} className={start.link}>
              more
            </Link>{" "}
            about me.
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
      <Nav />
    </main>
  );
}
