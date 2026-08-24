# auth.md

You are an AI agent that wants to interact with ALLIMITE Agency on a user's behalf. This file describes how to discover capabilities, register or execute requests, and handle interactions safely.

Two hosts and interfaces are relevant:
- **Web App & Runtime** — `https://allimite.agency` — where clients browse and where WebMCP tools are mounted.
- **Resource Manifests** — `https://allimite.agency/.well-known/` — machine-readable catalogs.

## Current state
ALLIMITE Agency supports public discovery, quoting, and client inquiries without requiring upfront API registration or credentials.

## Use the existing tooling first
Before requesting credentials, use the native agent interfaces:

1. **WebMCP Runtime** — in-browser agent tool calling via `navigator.modelContext`. Exposes:
   - `listar_servicios`: List all agency services, categories, and delivery scopes.
   - `solicitar_presupuesto`: Submit client inquiries and quotation requests.
2. **Agent Resource Discovery (ARD)** — structured service catalog at `https://allimite.agency/.well-known/ai-catalog.json`.
3. **Agent Skills RFC v0.2.0** — skill definitions and execution guides at `https://allimite.agency/.well-known/agent-skills/index.json`.
4. **LLMs Guide** — compact LLM overview at `https://allimite.agency/llms.txt`.

## Supported login option: Public access (no key required)
For public services and estimates, no API key is required. Agents can execute discovery and proposal submission immediately.

### How to use
Submit inquiries via the contact endpoint or WebMCP tool dispatch:

```http
POST /#contact HTTP/1.1
Host: allimite.agency
Content-Type: application/json
```

## Scopes
- `public:read` — Access service catalog, pricing ranges, and portfolio demos.
- `public:write` — Submit proposal and quotation requests.
