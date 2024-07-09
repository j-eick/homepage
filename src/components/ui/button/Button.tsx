import { ReactNode, useMemo } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

type ButtonProps = {
  children?: ReactNode;
  direction?: "left" | "right";
};

export default function Button({ direction }: ButtonProps) {
  const leftRight = useMemo(() => {
    switch (direction) {
      case "right":
        return <FaLongArrowAltRight />;
      case "left":
        return <FaLongArrowAltLeft />;

      default:
        break;
    }
  }, []);

  return <button data-direction={direction}>{leftRight}</button>;
}
