const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGitHubContributions(username) {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
}
