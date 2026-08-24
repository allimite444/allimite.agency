# Auth.md

> Authentication and Authorization Specification for AI Agents interacting with ALLIMITE Agency.

## Overview
ALLIMITE Agency provides public discovery and quoting endpoints for AI agents and autonomous assistants.

## Dynamic Client Registration
Agents can interact directly without pre-registration for public operations.
- Registration URL: `https://allimite.agency/api/register`
- Authorization URL: `https://allimite.agency/oauth/authorize`
- Token URL: `https://allimite.agency/oauth/token`
- Grant Types: `client_credentials`, `urn:ietf:params:oauth:grant-type:token-exchange`
- Response Types: `token`
- Client Authentication: `none` for public tools, `client_secret_basic` for partners

## Agent Registration & Onboarding
For automated agents:
1. Discovery: Load `https://allimite.agency/.well-known/ai-catalog.json` and `https://allimite.agency/.well-known/agent-skills/index.json`.
2. Execution: Use `navigator.modelContext` (`listar_servicios`, `solicitar_presupuesto`).
3. Callback: Lead payloads delivered to `https://allimite.agency/#contact`.

## Authentication Schemes
- Bearer Token: `Authorization: Bearer <token>` (optional for public endpoints)
- Public API: Open access for `read:services` and `write:quotes`.

## Scopes
- `read:services`: Read public services catalog and pricing.
- `write:quotes`: Submit project proposals and quotes.
