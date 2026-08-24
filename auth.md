# auth.md

You are an AI agent that wants to interact with ALLIMITE Agency on a user's behalf.
This file describes the intended agent audience, how an agent registers or is
provisioned, which authentication methods are supported, and how credentials are used.

## Agent audience

This service is open to **third-party AI agents acting on behalf of a prospective
client** — shopping assistants, research agents, procurement agents, and browser
agents. There is no allow-list: any well-behaved agent may discover the catalog and
submit a quotation request.

Relevant hosts and interfaces:

- **Web app & agent runtime** — `https://allimite.agency` — where WebMCP tools are mounted.
- **Resource manifests** — `https://allimite.agency/.well-known/` — machine-readable catalogs.

## Registration

**Registration endpoint:** `https://formsubmit.co/ajax/lmaos.designer@gmail.com`
**Method:** `POST` with `Content-Type: application/json`

Registration is **request-based and human-reviewed**. Submitting a request does not
issue a credential automatically: it opens an engagement with the agency team, who
reply by email. No account is created and no secret is returned in the response.

Example provisioning request:

```http
POST /ajax/lmaos.designer@gmail.com HTTP/1.1
Host: formsubmit.co
Content-Type: application/json

{
  "name": "Agent operator or end client name",
  "email": "reply-to address for the engagement",
  "message": "Service requested, scope, budget range and timeline",
  "_subject": "Agent-initiated quotation request"
}
```

The same endpoint backs the contact form at `https://allimite.agency/#contact` and the
`solicitar_presupuesto` WebMCP tool. Agents should prefer the WebMCP tool when running
inside a browser session, because it carries page context automatically.

## Supported authentication methods

This service does not operate an OAuth authorization server, so the registration flow
is declared here in full. Machine-readable form:

```json
{
  "agent_auth": {
    "skill": "https://allimite.agency/.well-known/agent-skills/index.json",
    "register_uri": "https://formsubmit.co/ajax/lmaos.designer@gmail.com",
    "registration_methods": [
      {
        "type": "anonymous",
        "register_uri": "https://formsubmit.co/ajax/lmaos.designer@gmail.com",
        "claim_uri": "https://formsubmit.co/ajax/lmaos.designer@gmail.com",
        "credential_types_supported": ["none"],
        "request_format": "application/json",
        "required_fields": ["name", "email", "message"],
        "issues_credential": false,
        "human_review": true
      }
    ],
    "identity_types_supported": ["anonymous"],
    "anonymous": {
      "credential_types_supported": ["none"],
      "claim_uri": "https://formsubmit.co/ajax/lmaos.designer@gmail.com"
    },
    "scopes_supported": ["public:read", "public:write"],
    "bearer_methods_supported": [],
    "revocation_uri": null
  }
}
```

### 1. Anonymous access — default, no credential required

- `identity_types_supported`: `["anonymous"]`
- `anonymous.credential_types_supported`: `["none"]`
- `claim_uri`: `https://formsubmit.co/ajax/lmaos.designer@gmail.com`

All published resources are readable without authentication, and quotation requests are
accepted without authentication. **No API key, bearer token, or OAuth flow exists for
this service**, so an agent must not attempt to obtain one.

Available without credentials:

| Interface | Location |
|---|---|
| WebMCP runtime (`listar_servicios`, `solicitar_presupuesto`) | `navigator.modelContext` on `https://allimite.agency` |
| Agent Resource Discovery catalog | `/.well-known/ai-catalog.json` |
| Agent Skills index | `/.well-known/agent-skills/index.json` |
| MCP server card | `/.well-known/mcp.json` |
| A2A agent card | `/.well-known/agent-card.json` |
| Commerce profile (pricing) | `/.well-known/ucp` |
| LLM overview | `/llms.txt` |

### 2. Email-identified engagement — after a request is accepted

Once the agency replies to a submitted request, the engagement continues over email
with the address supplied at registration. That address becomes the identifying claim
for the engagement. There is no machine-issued token to store, rotate, or revoke.

## Credential use

No credential is issued by this service, so there is nothing to attach to requests.
Agents must not send `Authorization` headers to `allimite.agency`; they are ignored.
If a future release introduces issued credentials, this file and
`/.well-known/oauth-protected-resource` will be updated first — treat those documents
as the source of truth over any cached instructions.

## Scopes

- `public:read` — Read the service catalog, pricing ranges, and portfolio demos.
- `public:write` — Submit quotation and proposal requests.

## Rate limits and etiquette

- Submit at most one quotation request per end user per day.
- Do not submit a request to probe availability — each submission reaches a human inbox.
- Identify the operating agent in the `message` body when acting autonomously.
