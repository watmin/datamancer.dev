# datamancer.dev

Source for [datamancer.dev](https://datamancer.dev) — the practitioner's identity card.

Raw markdown idiom: zero rendering, zero build, zero JS. Cloudflare Pages serves the files directly with `Content-Type: text/markdown` headers configured in `_headers`. What humans browsing the site see is what bots fetching `index.md` get — same bytes, same content.

## The three-domain split

| Domain | Purpose | Repo |
|---|---|---|
| [algebraic-intelligence.dev](https://algebraic-intelligence.dev) | Chronicle (story, rendered) | `algebraic-intelligence.dev` |
| [datamancer.dev](https://datamancer.dev) | Practitioner identity (raw markdown) | `datamancer.dev` ← this repo |
| [datamancy.dev](https://datamancy.dev) | Grimoire + MCP server (raw markdown, hash-verified) | `datamancy.dev` |

The [`datamancy`](https://www.npmjs.com/package/datamancy) npm package is the MCP adapter that consumes the signed manifest at datamancy.dev. Lives in the [`datamancy`](https://github.com/watmin/datamancy) repo.

Full design at [algebraic-intelligence.dev/docs/static-mcp/DESIGN.md](https://github.com/watmin/algebraic-intelligence.dev/blob/main/docs/static-mcp/DESIGN.md).
