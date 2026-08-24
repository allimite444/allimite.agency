# Auth.md: ALLIMITE Agency

> Authentication & Authorization Guide for Autonomous AI Agents

## Public Endpoints (No Auth Required)
- Homepage: https://allimite.agency/
- Services Catalog: https://allimite.agency/.well-known/ai-catalog.json
- Agent Skills Index: https://allimite.agency/.well-known/agent-skills/index.json
- LLMs Document: https://allimite.agency/llms.txt

## Agent Interactions (WebMCP)
- Runtime Discovery: `navigator.modelContext`
- Tools Exposed: `listar_servicios`, `solicitar_presupuesto`
- Authentication Scheme: None required for public discovery, estimation and lead dispatch.
- Contact Endpoint: https://allimite.agency/#contact
