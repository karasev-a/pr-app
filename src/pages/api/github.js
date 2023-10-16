import { Octokit } from "octokit";

const OWNER = "facebook";
const REPO = "react";

const github = async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const pullRequests = await octokit.request(`/repos/${OWNER}/${REPO}/pulls`);

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
  });
};

export default github;
