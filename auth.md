# Authentication & Authorization for ALLIMITE Agency
> Public Agency Portfolio & Autonomous Service API

## Public Endpoints
- Homepage: https://allimite.agency/
- Services Catalog: https://allimite.agency/.well-known/ai-catalog.json
- Agent Skills: https://allimite.agency/.well-known/agent-skills/index.json
- LLMs Document: https://allimite.agency/llms.txt

## Agent Interactions (WebMCP)
- Method: `navigator.modelContext`
- Authentication: None required for public discovery and quoting tools (`listar_servicios`, `solicitar_presupuesto`).
- Contact Form: Public form endpoint via POST.
