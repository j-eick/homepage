import { GlobalStyle } from "../styles/global";
import { Nunito_Sans, Barlow, Roboto, Inter } from "@next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "100",
});
const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "200",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "100",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={nunito_Sans.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
