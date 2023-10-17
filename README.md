# GitHub Pull Requests Viewer

This web application allows you to view pull requests from a GitHub repository. You can see a list of pull requests, along with the number of comments on each pull request. The application is built using **Next.js**, the **Octokit** library for GitHub API integration, and manual pagination.

## Features

**Pull Request List:** View a list of pull requests from a GitHub repository.
**Comments Count:** See the number of comments on each pull request.
**Loading:** Load more pull requests by clicking button LoadMore.

## Installation

1. **Clone the repository:**

```bash
git https://github.com/karasev-a/pr-app.git
```

2. **Navigate to the project directory:**

```bash
cd pr-app
```

3. **Install Dependencies:**

```bash
npm install
```

4. **Set Up Environment Variables:**

- Rename the .env.example file to .env .
- Add your GitHub API access token to the .env file.

## Usage

1. **Run the development server:**

```bash
npm run dev
```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- **Next.js:** React framework for building web applications.
- **Octokit:** GitHub REST API client for JavaScript.
- **Axios:** HTTP client for making API requests.
- **React:** JavaScript library for building user interfaces.``
