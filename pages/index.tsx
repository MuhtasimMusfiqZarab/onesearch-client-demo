import Head from "next/head";
import Home from "components/pages/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </>
  );
}
