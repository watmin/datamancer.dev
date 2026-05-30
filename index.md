# datamancer

The practitioner of [datamancy](https://datamancy.dev) — the practice of composing focused, hash-verifiable spells for LLMs.

## Where the work lives

- **[algebraic-intelligence.dev](https://algebraic-intelligence.dev)** — the chronicle. Story of building the substrate. Voice-disciplined event-reporting register. Rendered.

- **[datamancy.dev](https://datamancy.dev)** — the grimoire. Latin-named spells served as raw markdown with an ECDSA P-256 (AWS KMS) signed MCP manifest. Consume via the [`datamancy`](https://www.npmjs.com/package/datamancy) npm package: `npx -y datamancy` in any MCP client config (Claude Code, Cursor, etc.).

- **[github.com/watmin](https://github.com/watmin)** — source repos. `algebraic-intelligence.dev`, `datamancy.dev`, `datamancer.dev`, `datamancy` (the npm adapter).

## What this is

Three domains, three purposes. This one — `datamancer.dev` — is the practitioner's identity card. Bare markdown. No rendering. The file is the artifact.

The trust chain: every spell at datamancy.dev is SHA-256 hashed and listed in a signed manifest. The npm adapter pins the **ECDSA P-256** public key in source; the matching private key is non-exportable, held in AWS KMS. Tampered content cannot reach an LLM. Vending our own trust.

**Pinned key fingerprint** — `SHA-256` of the DER-encoded public key. Cross-check it against the `datamancy` npm package (`dist/pinned-pubkey.js`) and the git source before trusting an install:

```
09db7668a3a0ea27c52de060081c0a70584181c02f9eb94eff6941f904b5f12e
```

## Identity

watmin / john shields. AWS Shield Cognition / wat-rs / holon / Aetherium Datavatum lineage. Sorcerer, not wizard.

## Contact

[john@shields.wtf](mailto:john@shields.wtf)
