# Azure DevOps Support Context

This file tells the first-line support agent which Azure DevOps organization, projects, and wiki knowledge are in scope. Keep it free of credentials, secrets, personal data, and incident-specific details.

## Organization

- Organization short name: `calumharrison`

## Projects in scope

| Project | Repositories to inspect | Work-item types/areas |
|---|---|---|
| `FirstLineSupportDemo` | `FirstLineSupportDemo` | Synthetic support examples |

Replace the sample row with the projects and repositories the agent is allowed to use in your work project. The Azure DevOps identity used by VS Code must have read access to them.

## Wiki knowledge

| Project | Wiki name | Relevant page paths/topics | When to use |
|---|---|---|---|
| `FirstLineSupportDemo` | Add the Azure DevOps wiki name here | Add exact paths, such as `/Runbooks/Forms` | Add the incident types or components this knowledge covers |

Ask the agent to search the listed wiki when diagnosing a related issue. It should use the Azure DevOps MCP wiki search/read tools, retrieve the relevant page content, and cite the wiki and page title/path. If the table is empty or a wiki/page is inaccessible, the agent should say so and continue only with available evidence.

Review this scope whenever project membership or support responsibilities change. Do not list a project, repository, or wiki unless the signed-in read-only identity is intended to access it.
