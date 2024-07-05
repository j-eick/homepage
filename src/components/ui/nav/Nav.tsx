import styles from "./nav.module.css";
import Circle from "../menuCircles/Circle";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

export default function Nav() {
  const path = useLocation().pathname;

  return (
    <motion.ul initial={{ x: "10rem" }} animate={{ x: 0 }} transition={{ delay: 0.25 }} className={styles.nav}>
      {path === "/" && (
        <>
          <li>
            <Link to={"/work"}>
              <Circle>work</Circle>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <Circle>about</Circle>
            </Link>
          </li>
        </>
      )}
      {path === "/about" && (
        <>
          <li>
            <Link to={"/work"}>
              <Circle>work</Circle>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Circle>
                <HiOutlineHome />
              </Circle>
            </Link>
          </li>
        </>
      )}
      {path === "/work" && (
        <>
          <li>
            <Link to={"/about"}>
              <Circle>about</Circle>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Circle>
                <HiOutlineHome />
              </Circle>
            </Link>
          </li>
        </>
      )}
    </motion.ul>
  );
}
