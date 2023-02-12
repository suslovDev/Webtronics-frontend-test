import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const backgrounds = [
    "url('background_2.png') center 0/1813px auto no-repeat",
    "url('bg-image.svg') center/auto 100% no-repeat",
    "#0c102d",
  ];
  return (
    <Html lang='en'>
      <Head />
      <body
        style={{
          background: `${backgrounds.join(",")}`,
        }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
