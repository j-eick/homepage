import PageCanvas from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={PageCanvas.canvas}>{children}</div>;
    </>
  );
}
