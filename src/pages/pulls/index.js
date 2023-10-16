import React from "react";
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import Layout from "@/components/layouts/layout";
import PullsList from "@/components/pulls";

const fetcher = async (url) => {
  return axios.get(url).then((res) => res.data);
};

export default function FirstPost() {
  const { data, isLoading } = useSWR("/api/github", fetcher);

  return (
    <Layout>
      <Head>
        <title>Pull Requests</title>
      </Head>
      {isLoading && <p>Loading...</p>}
      {!isLoading && data && <PullsList pulls={data.pullRequests} />}
    </Layout>
  );
}
