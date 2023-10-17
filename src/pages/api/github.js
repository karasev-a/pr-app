import { Octokit } from "octokit";

const OWNER = "facebook";
const REPO = "react";

const github = async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const { page } = req.query;

  const pullRequests = await octokit.request(
    `/repos/${OWNER}/${REPO}/pulls?per_page=5&page=${page}`
  );

  const hasMorePages = pullRequests.headers.link
    ? pullRequests.headers.link.includes('rel="next"')
    : false;

  const pullRequestsWithComments = await Promise.all(
    pullRequests.data.map(async (pull) => {
      const comments = await octokit.request(
        `/repos/${OWNER}/${REPO}/pulls/${pull.number}/comments`
      );

      return { ...pull, commentsNumber: comments.data.length };
    })
  );

  return res.status(200).json({
    pullRequests: pullRequestsWithComments,
    hasMorePages,
  });
};

export default github;
