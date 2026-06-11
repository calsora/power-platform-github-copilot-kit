# Power Platform GitHub Copilot Starter Kit

This is a lightweight repo to help people getting started using Github Copilot with the Power Platform.

A collection of agents and instructions that can help you with day-to-day tasks working with the Power Platform.

The starter kit is for developers, architects, and teams building on Power Apps, Power Automate, Dataverse, Dynamics 365, and Power Pages.

---

## Common Questions by Agent

- Form script errors, plugins, web resources → @D365 Expert
- Query optimization, canvas app design, Dataverse → @Power Platform Expert
- Scalability, architecture, design patterns → @Power Platform Expert
- Portal design, SPA patterns, authentication → @Power Pages Expert
- Azure integration, security architecture → @Azure Principal Architect
- Deployment, CI/CD, environment promotion → @DevOps Expert

---

## Agents

### Core Power Platform Agents

**[@Power Platform Expert](https://github.com/microsoft/PowerAppsCodeApps)**
- Code Apps, canvas apps, Power Automate, Dataverse, connectors
- Implementation patterns, performance optimization, ALM strategy
- Use for: architecture decisions, component design, connector integration

**[@Power Pages Expert](docs/power-pages-architecture.md)**
- Power Pages portals, single-page applications, portal security
- Dataverse integration, authentication, portal extensibility
- Use for: portal design, SPA patterns, table permissions

**[@D365 Expert](.github/agents/d365-expert.agent.md)**
- Dynamics 365 plugins, JavaScript web resources, PCF controls
- Dataverse business logic, solution management, ALM
- Use for: plugin development, form scripting, business logic

### Supporting Agents

**[@Azure Principal Architect](.github/agents/azure-principal-architect.agent.md)**
- Azure Well-Architected Framework guidance, identity, security
- Integration with Azure services, multi-region strategies
- Use for: Azure architecture, security design, enterprise integration

**[@DevOps Expert](.github/agents/devops-expert.agent.md)**
- CI/CD pipelines, Infrastructure as Code, ALM automation
- Power Platform CLI, environment promotion, solution deployment
- Use for: deployment strategy, automation, observability

---

## Structure

```
copilot-lab/
├── .github/
│   ├── agents/                          # AI agent definitions
│   │   ├── power-platform-expert.agent.md
│   │   ├── d365-expert.agent.md
│   │   ├── power-pages-expert.agent.md
│   │   ├── azure-principal-architect.agent.md
│   │   └── devops-expert.agent.md
│   ├── instructions/                    # Best practice guides
│   │   ├── clean-code.instructions.md
│   │   ├── d365-webresources.instructions.md
│   │   └── a11y-instructions.md
│   ├── skills/                          # Reusable agent skills
│   │   └── power-platform-architect/    # Solution architecture skill
├── AGENTS.md                            # Agent roles and responsibilities
├── README.md                            # This file
└── LICENSE
```

---

## Getting Started

### 1. Understand the Guidance
- Read [AGENTS.md](AGENTS.md) to learn how agents collaborate
- Review [.github/agents/](\.github/agents/) for agent expertise
- Check [.github/instructions/](\.github/instructions/) for best practices

### 2. Ask for Help
Invoke agents for guidance on specific topics:

```
@Power Platform Expert
Help me design a scalable Dataverse data model for [use case]

@D365 Expert  
How do I structure JavaScript web resources following best practices?

@Azure Principal Architect
What's the best way to integrate Power Apps with Azure services?

@DevOps Expert
Design a CI/CD pipeline for Power Platform solution deployment

@Power Pages Expert
Help me build a modern SPA in Power Pages with [requirements]
```

### 3. Follow Best Practices
- **Clean Code**: Review [clean-code.instructions.md](.github/instructions/clean-code.instructions.md)
- **D365 Web Resources**: Follow [d365-webresources.instructions.md](.github/instructions/d365-webresources.instructions.md)
- **Accessibility**: Check [a11y-instructions.md](.github/instructions/a11y-instructions.md)

### Agent Quick Reference

| Domain | Agent |
|---|---|
| Dynamics 365 development | @D365 Expert |
| Power Apps and Dataverse | @Power Platform Expert |
| Power Pages portals | @Power Pages Expert |
| Solution architecture | @Power Platform Expert |
| Azure and security | @Azure Principal Architect |
| Deployment and ALM | @DevOps Expert |

---

## Resources

### In This Repository

- [AGENTS.md](AGENTS.md) - Agent expertise and responsibilities
- [.github/agents/](.github/agents/) - Full agent specifications
- [.github/instructions/](.github/instructions/) - Best practice guides (clean code, D365, accessibility)

### Official Microsoft Documentation

- [Power Platform](https://docs.microsoft.com/power-platform/)
- [Power Apps Code Apps](https://github.com/microsoft/PowerAppsCodeApps)
- [Power Pages](https://learn.microsoft.com/power-pages/)
- [Dynamics 365 Developer](https://docs.microsoft.com/dynamics365/customer-engagement/developer/)
- [Azure Architecture](https://learn.microsoft.com/azure/architecture/)

### Included Guidance

- Clean code standards
- D365 web resource best practices
- Accessibility requirements
- Power Platform ALM and deployment
- Security and compliance patterns

### Awesome Copilot 

Some of the components within the solution were taken from the [Awesome Copilot Repo](https://github.com/github/awesome-copilot). It's a great resource that's worth saving!

---

## License

This repository is licensed under the [LICENSE](LICENSE) file.

---

## Disclaimer

Outputs from AI agents can be incorrect, incomplete, or require customization for your specific context. Before using any guidance:

- Review agent recommendations carefully
- Test solutions in development environments
- Follow your organisation's governance and compliance policies
- Consult official Microsoft documentation for confirmation
- Adapt guidance to your specific business requirements and constraints

AI agents are tools to accelerate delivery and share knowledge, not replacements for professional judgment and expertise.

---

## Getting Answers

1. Be specific. "Form validation error with Dataverse" is more useful than "form issue".
2. Provide context. "50k+ records in Dataverse" helps agents optimize solutions.
3. Ask for patterns. Request reusable code and approaches, not one-off fixes.
4. Ask for reasoning. Understand trade-offs and architectural decisions.
5. Follow up. Ask about testing, performance, or related concerns.

## Support

For questions about specific domains, ask the relevant agent:

- D365 plugins, web resources, form scripts: @D365 Expert
- Power Apps, canvas apps, Dataverse queries: @Power Platform Expert
- Power Pages, portals, SPA architecture: @Power Pages Expert
- Solution architecture and design: @Power Platform Expert
- Azure integration and security: @Azure Principal Architect
- Deployment, CI/CD, and ALM: @DevOps Expert
- Repository structure: [AGENTS.md](AGENTS.md)

---
