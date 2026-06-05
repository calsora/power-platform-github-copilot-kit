# Power Platform Reusable Repo - Agent Guidance

This repo is designed to support reusable Power Platform delivery with clear structure, automation, and agent-driven guidance.

## Goal

Create a repo that is easy for teams to reuse across Power Apps, Power Automate, Dataverse, connectors, and Azure-integrated solutions.

## Recommended repository structure

- `.github/` - CI/CD workflows, issue and PR templates, security and branch policies
- `docs/` - architecture patterns, governance, environment definitions, naming conventions
- `templates/` - reusable artifact scaffolds for apps, flows, connectors, Dataverse schema, and solution packaging
- `solutions/` - complete sample solutions and end-to-end reference implementations
- `scripts/` - deployment helpers, Power Platform CLI scripts, repository automation
- `tests/` - validation scripts, metadata checks, and reuse quality tests
- `README.md` - repo overview, quick start, and structure guidance
- `AGENTS.md` - this file, documenting how agents should be used and maintained

## Agent usage guidance

This file should document how contributors and AI agents collaborate in this repo.

### Recommended agent roles

- `Power Platform Architect`
  - design solution architecture and reuse patterns
  - define Dataverse strategy, app topology, environment structure
  - align governance and platform rules

- `Power Platform Expert`
  - answer implementation questions for Power Apps, Power Automate, connectors, and Dataverse
  - recommend reusable components and low-code best practices

- `DevOps Expert`
  - design CI/CD pipelines and automation for ALM
  - recommend Power Platform CLI, GitHub Actions, or Azure DevOps templates
  - support environment promotion and solution deployment

- `Azure Principal Architect`
  - advise on Azure integration, identity, security, and platform boundary patterns
  - map Power Platform connectivity to Azure services and enterprise architecture

- `D365 Expert`
  - provide Dynamics 365 development guidance for plugins, JavaScript web resources, PCF controls, and Dataverse business logic
  - use `.github/instructions/d365-webresources.instructions.md` as the canonical web resource best-practice reference
  
- `Explore`
  - search repo contents and identify where to place new artifacts
  - help contributors find relevant docs, templates, and sample solutions

### How to use this file

- Add new agent guidance whenever you add a new role or workflow.
- Link agent responsibilities to repo folders and topics.
- Use this file as the canonical place for contributor-facing agent instructions.

### What to document here

- the purpose of each agent role
- when to ask each agent for help
- where new files should be placed in the repo
- how to keep documentation, templates, and automation aligned

## Suggested improvements for this repo

1. Add `docs/` for platform strategy and reuse guidance.
2. Add `templates/` for reusable starter artifacts.
3. Add `solutions/` for sample end-to-end projects.
4. Add `scripts/` for automation and deployment tooling.
5. Add `.github/workflows/` for CI/CD and policy enforcement.
6. Add `CONTRIBUTING.md` for contribution process and repo standards.
7. Keep `README.md` and `AGENTS.md` current as the primary onboarding documents.

## Notes

Separating content into these layers helps maintain a reusable repo:

- `docs/` = concepts and guidance
- `templates/` = repeatable artifacts
- `solutions/` = real working examples
- `scripts/` = automation and deployment
- `tests/` = quality validation
