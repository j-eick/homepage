import Canvas from "../styles/SubpageLayout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={Canvas.canvas}>
        <div className={Canvas.responsiveCanvas}>{children}</div>
      </div>
      ;
    </>
  );
}
