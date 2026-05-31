// WebMCP registration for datamancer.dev
// https://webmachinelearning.github.io/webmcp/
//
// Exposes two tools to in-browser AI agents:
//   - getIdentityCard: the practitioner identity card markdown (/index.md)
//   - getAgentMap:     the agent map (/llms.txt)
//
// Feature-detects the WebMCP API; silently no-ops where absent.

(function () {
  if (typeof navigator === "undefined") return;
  if (!navigator.modelContext) return;
  if (typeof navigator.modelContext.provideContext !== "function") return;

  const fetchText = async (url) => {
    try {
      const r = await fetch(url, { headers: { Accept: "text/markdown" } });
      if (!r.ok) return { error: `HTTP ${r.status}`, url };
      return { contentType: r.headers.get("content-type"), content: await r.text(), url };
    } catch (err) {
      return { error: err.message, url };
    }
  };

  navigator.modelContext.provideContext({
    tools: [
      {
        name: "getIdentityCard",
        description:
          "Fetch the datamancer practitioner identity card (/index.md) — who the practitioner is, the three domains (chronicle / identity / grimoire), and the pinned public-key fingerprint for verifying the datamancy grimoire.",
        inputSchema: { type: "object", properties: {}, required: [], additionalProperties: false },
        execute: async () => fetchText("/index.md"),
      },
      {
        name: "getAgentMap",
        description: "Fetch /llms.txt — the agent-facing map of this site and the three datamancy domains.",
        inputSchema: { type: "object", properties: {}, required: [], additionalProperties: false },
        execute: async () => fetchText("/llms.txt"),
      },
    ],
  });
})();
