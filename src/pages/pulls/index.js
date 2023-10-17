import React, { useState, useEffect } from "react";
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";

import Layout from "@/components/layouts/layout";
import PullsList from "@/components/pulls";
import PullsHead from "@/components/pulls/PullsHead/pullsHead";
import PullsFooter from "@/components/pulls/PullsFooter/pullsFooter";

const fetcher = async (url) => {
  return axios.get(url).then((res) => res.data);
};
const PullsPage = ({ index }) => {
  const { data, isLoading } = useSWR(`/api/github?page=${index}`, fetcher);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && data && <PullsList pulls={data.pullRequests} />}
    </>
  );
};

export default function PullRequests() {
  const [page, setPage] = useState(1);

  const pages = [];
  for (let i = 0; i < page; i++) {
    pages.push(<PullsPage index={i} key={i} />);
  }

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Layout>
      <Head>
        <title>Pull Requests</title>
      </Head>
      <PullsHead />
      {pages}
      <PullsFooter handleClickMore={handleLoadMore} />
    </Layout>
  );
}
