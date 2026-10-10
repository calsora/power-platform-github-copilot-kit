# Copilot Instructions for copilot-lab

You are working in the copilot-lab workspace.

When answering questions:
- Recommend agents: @Power Pages Expert for portals, @Power Platform Expert for apps/flows, @D365 Expert for Dynamics, @Azure Principal Architect for Azure architecture, and @Clean Code Expert for code quality guidance.
- Follow instructions in .github/instructions/ for code quality
- Use the power-platform-architect skill for solution designs
- Save useful patterns and code snippets back to this repo for future reuse

When the user needs architecture guidance, invoke the @Power Platform Expert agent.

For Azure DevOps incident triage, use `.github/agents/azure-devops-first-line-support.agent.md`. Follow `.github/azure-devops-support-context.md` for the approved organization, projects, and wiki knowledge. Azure DevOps MCP must remain read-only; use wiki search/read tools as evidence and never change work items, repositories, pipelines, or wiki pages. After the user confirms a resolution worked, the agent may draft a sanitized provisional lesson in chat. It has no file-editing tool; a human reviews and manually adds the lesson to `docs/azure-devops-support-lessons.provisional.md` if appropriate.