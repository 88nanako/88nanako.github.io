import Head from "next/head";
import Header from "../components/Header";
// import Main from "../components/Main";
import Footer from "../components/Footer";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import { NextSeo } from "next-seo";
import Section_3 from "../components/Section_3";

export default function Home() {
  return (
    <div className="text-white  bg-bg_all_sec bg-cover bg-repeat-round">
      <NextSeo
        title="Home: HFM-monthly-promo"
        description="Welcome to nine4 homepage."
        canonical="https://nine4-1.vercel.app/"
        openGraph={{
          url: "https://nine4-1.vercel.app/",
        }}
      />
      <Head>
        <title>HFM 10.10</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Section_1 />
      <Section_2 />
      <Section_3 />
      {/* <Footer /> */}
    </div>
  );
}
