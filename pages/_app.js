import { GlobalStyle } from "../styles/global";
import { Barlow } from "@next/font/google";

const barlow = Barlow({
  weight: "100",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
