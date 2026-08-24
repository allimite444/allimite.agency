# Auth.md: ALLIMITE Agency

> Autonomous Agent Authentication & Registration Protocol

## Agent Registration
Autonomous AI agents do not require pre-registration or API keys to interact with ALLIMITE Agency's public services. Agents can query and execute client requests immediately via WebMCP runtime or public HTTP endpoints.

## Authentication
- Scheme: None (Public Access)
- Headers: None required
- Rate Limits: Standard web protection applies

## APIs & Capabilities
- Services Discovery: `GET /.well-known/ai-catalog.json`
- Skills Index: `GET /.well-known/agent-skills/index.json`
- LLM Overview: `GET /llms.txt`
- Interactive WebMCP: `navigator.modelContext` (`listar_servicios`, `solicitar_presupuesto`)

## Scopes
- `read:services`: Public access to service catalog and base pricing.
- `write:quotes`: Dispatch lead and project requirements directly to the agency.
