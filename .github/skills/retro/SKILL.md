---
description: Use this skill when reviewing a previous coding session in a Power Platform repository to identify what worked, what failed, and how to improve future agent or developer runs.
license: MIT
metadata:
    author: calsora
name: retro
---
# Retrospective Skill

## Context
This skill reviews previous coding sessions in a repository and helps identify practical improvements for future work. It is designed for Power Platform projects, but it stays focused on the coding session, repo structure, tooling, and working patterns rather than project delivery or business outcomes.

The goal is to keep the retrospective simple, evidence-based, and directly useful for improving how the repo and coding agent are used next time.

## Example Trigger Phrases
- "Review the last coding session and tell me what went wrong."
- "Run a retrospective on this repo and suggest improvements for future coding work."
- "What should we improve in our Power Platform repo after this session?"
- "Summarise the issues from this coding session and identify better repo patterns."

## What to Review
Look for problems and opportunities in these areas:
- repo navigation and discoverability
- unclear file ownership or responsibilities
- missing or weak guidance in AGENTS.md, CLAUDE.md, or docs
- poor code organization or scattered logic
- repeated mistakes that could be caught by linting, tests, or checks
- inefficient tool use or wasted exploration steps
- token consumption and context efficiency
- missing automation, validation, or guardrails
- unclear patterns for Power Platform implementation, naming, or structure
- documentation gaps that made future work harder

## Simple Retrospective Format
Present the review in this order:
1. What worked well
2. What was difficult
3. Root causes
4. Recommended improvements
5. Actions for the next coding session

## Improvement Categories
- **Navigation:** the agent or developer struggled to find the right file, pattern, or dependency.
- **Repo structure:** files were hard to locate, duplicated, or disconnected from the rest of the solution.
- **Guardrails:** missing checks, tests, linting, validation, or repo guidance that could have caught problems earlier.
- **Coding standards:** repeated issues caused by lack of clarity in conventions, patterns, or review expectations.
- **Tool economy:** unnecessary exploration, duplicated searches, or inefficient workflows.
- **Token usage:** unnecessary context loading, repeated file reads, oversized outputs, avoidable tool calls, or delegation that did not save effort.
- **Documentation:** unclear instructions, missing context, or unsupported assumptions in the repo.
- **Power Platform patterns:** repeated issues with app structure, flow logic, Dataverse design, or solution organization.

## Token Usage Review
Review token use as part of each retrospective when session evidence is available:
- Use reported token or usage metrics if the session provides them; do not estimate exact counts from transcript length.
- If exact metrics are unavailable, give a qualitative assessment and clearly label it as such.
- Identify where context was spent: exploration, reading files, tool output, implementation, debugging, or repeated explanations.
- Look for avoidable costs such as rereading unchanged files, broad searches where a narrow search would do, oversized tool output, repeated attempts, or loading unrelated instructions.
- Also identify token use that supported quality, such as reading necessary guidance, checking dependencies, validating changes, or debugging a real failure.
- Recommend specific ways to reduce future usage without sacrificing correctness, safety, required review, or verification.
- Do not claim that lower token usage is automatically better; assess efficiency in relation to the quality and completeness of the result.

## Decision Rules
- Prefer evidence from the repo and the session over generic advice.
- Focus on practical changes that reduce rework in future sessions.
- Tie findings to concrete issues such as confusion, delay, missed validation, or repeated mistakes.
- Recommend the smallest improvement that increases clarity or reliability.
- Keep the review centered on the codebase, tooling, and process used during the session.
- Separate measured token usage from qualitative observations, and state when session data is unavailable.

## Example Output
"This session was slowed down by unclear repo navigation and repeated trial-and-error changes. The main improvement is to add a clear repo entry point and a small set of validation checks so the team catches common Power Platform implementation mistakes earlier."

## Output Template
- Summary
- What worked well
- What was difficult
- Root causes
- Token usage: measured data if available, otherwise qualitative observations
- Recommended improvements
- Next steps

## Reference
Use repository evidence such as:
- file structure and conventions
- AGENTS.md or repo guidance files
- scripts, tests, and validation workflows
- recent session activity or observed mistakes
- power platform implementation patterns in the repo

The retrospective should be practical, repo-focused, and useful for improving the next coding session without drifting into project delivery or non-technical planning.
