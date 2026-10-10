---
description: Use this skill when a repository change, new skill, or updated guidance needs to be reflected in the README or top-level docs without adding unrelated content.
license: MIT
metadata:
    author: calsora
name: docs-sync
---
# Documentation Sync Skill

## Context
This skill keeps the repository's top-level documentation aligned with recent changes. It is designed for small, focused updates where a skill, agent, workflow, or repo guidance file changes and the README or another key doc should accurately reflect the current state.

The goal is to avoid drift between the repo and its documentation while keeping updates brief, factual, and easy to maintain.

## Example Trigger Phrases
- "Update the README to reflect the new retro skill."
- "Sync the docs after changing the repo skill set."
- "Refresh the project overview after adding a new agent or skill."
- "Keep the README consistent with the latest repo guidance."

## What This Skill Should Do
Review the changed files and update the relevant documentation sections only when needed. Focus on:
- new skills or agent guidance
- changed repo responsibilities or workflows
- updated setup, usage, or structure information
- additions or removals of top-level guidance files

## Scope Rules
- Update the README or docs index only when the change affects repo usage or discoverability.
- Keep edits factual and based on the current repository state.
- Do not invent capabilities, agents, or tooling that are not present.
- Prefer small, targeted updates over broad rewrites.
- Do not add marketing language or speculative content.

## What to Update
- README summary or overview sections
- repository structure notes
- agent or skill references
- getting started or quick reference sections
- any small top-level docs that are clearly intended to summarize repo capabilities

## What Not to Update
- detailed implementation guidance that belongs in a dedicated doc
- long technical design content unrelated to the repo summary
- unrelated content in existing docs just because a change happened elsewhere
- generated documentation that should be maintained separately

## Simple Decision Rules
- If the change adds or modifies a reusable skill, update the relevant README or repo summary.
- If the change is internal-only and not discoverable to repo users, do not change README.
- Prefer concise summary bullets over long explanatory blocks.
- Keep naming and paths consistent with the repository.

## Example Output
"Updated the repo overview to include the new retrospective skill and clarified that skills are repo-level reusable guidance for coding sessions and repo maintenance."

## Output Template
- Changed area
- Summary of update
- Files affected
- Validation note

## Reference
Use the repo itself as the source of truth. Review the relevant skill, agent, or documentation files before editing the README or docs summary. The documentation should remain brief, useful, and aligned with real repo content.
