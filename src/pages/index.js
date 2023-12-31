import Head from "next/head";
import Layout, { siteTitle } from "@/components/layouts/layout";
import utilStyles from "@/styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My github!!</p>
      </section>
    </Layout>
  );
}
