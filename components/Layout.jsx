import Canvas from "../styles/MainLayout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={Canvas.background}>
        <div className={Canvas.canvas}>
          <div className={Canvas.responsiveCanvas}>{children}</div>
        </div>
      </div>
    </>
  );
}
