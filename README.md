# Power Platform Reusable Repo

This repository is a reusable foundation for Power Platform delivery, with architecture guidance, reusable templates, automation scripts, and sample solutions.

## Recommended structure

- `.github/` - workflows, issue/pr templates, policies
- `docs/` - design guidance, governance, naming conventions, environment strategy
- `templates/` - reusable app, flow, connector, and Dataverse templates
- `solutions/` - sample solutions, exported packages, reference implementations
- `scripts/` - deployment helpers, Power Platform CLI automation, validation scripts
- `tests/` - metadata validation and quality checks
- `AGENTS.md` - agent guidance and repo usage notes

## How to use this repo

1. Review `README.md` to understand the repo purpose.
2. Use `docs/` for platform design decisions and reuse guidance.
3. Use `templates/` for starter artifacts and repeatable patterns.
4. Use `scripts/` for CI/CD and deployment automation.
5. Use `solutions/` for full end-to-end reference implementations.

## Contribution guidance

- Keep architecture and governance content in `docs/`.
- Keep reusable artifacts in `templates/` and `solutions/`.
- Keep automation in `scripts/` and `.github/workflows/`.
- Add new patterns and templates with clear naming and documentation.
