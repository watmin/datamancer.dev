# auth.md — datamancer.dev

> This site has no agent registration system: no accounts, no credentials, no
> tokens. It serves a single practitioner identity card as raw markdown. The
> document exists to signal "no auth" explicitly — same doctrine as the companion
> [oauth-authorization-server](/.well-known/oauth-authorization-server) and
> [oauth-protected-resource](/.well-known/oauth-protected-resource).

## Audience

Agents and humans reading the practitioner's identity card at
`https://datamancer.dev`. Nothing on this site is gated.

## Registration

**None required.** No register endpoint, no provisioning flow, no account. Agents
access content with anonymous GET requests.

## Supported methods

| identity type | credential | flow |
|---|---|---|
| `anonymous` | *(none)* | unauthenticated GET against any URL |

## Credentials issued

**None.** Nothing to claim. Nothing to revoke.

## Why this file exists

The Cloudflare *isitagentready* checker expects an `auth.md` companion to OAuth
metadata, even when the answer is "no auth." Explicit, not absent.

## Pointers

- **Agent map:** [/llms.txt](https://datamancer.dev/llms.txt)
- **Identity card:** [/index.md](https://datamancer.dev/index.md)
- **The grimoire (MCP):** [datamancy.dev](https://datamancy.dev)
- **MCP server card:** [/.well-known/mcp/server-card.json](https://datamancer.dev/.well-known/mcp/server-card.json)
