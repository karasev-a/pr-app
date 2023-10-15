import Head from "next/head";
import Layout from "@/components/layouts/layout";
import PullsList from "@/components/pulls";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Pull Requests</title>
      </Head>
      <PullsList />
    </Layout>
  );
}
