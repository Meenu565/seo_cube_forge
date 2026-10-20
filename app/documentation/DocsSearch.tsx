"use client";

import { useState } from "react";
import { Search, ArrowUpRight, X } from "lucide-react";
import { guides } from "./guides";
import styles from "./documentation.module.css";

export default function DocsSearch() {
  const [query, setQuery] = useState("");
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = words.length ? guides.filter(guide => {
    const text = [guide.title, guide.description, guide.note, ...guide.steps.flatMap(step => [step.title, step.text])].join(" ").toLowerCase();
    return words.every(word => text.includes(word));
  }) : [];

  return (
    <div className={styles.search} role="search" aria-label="Documentation">
      <label htmlFor="docs-search" className={styles.srOnly}>Search documentation</label>
      <div className={styles.searchField}>
        <Search size={18} aria-hidden="true" />
        <input id="docs-search" type="search" autoComplete="off" placeholder="Search the guides…" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === "Escape") setQuery(""); }} aria-controls="docs-search-results" />
        {query && <button type="button" onClick={() => { setQuery(""); document.getElementById("docs-search")?.focus(); }} aria-label="Clear search"><X size={16} aria-hidden="true" /></button>}
      </div>
      <p className={styles.srOnly} role="status">{words.length ? `${results.length} ${results.length === 1 ? "guide" : "guides"} found` : ""}</p>
      <div id="docs-search-results">
        {words.length > 0 && (
          <div className={styles.results}>
            {results.length ? <ul>{results.map(guide => <li key={guide.id}><a href={`#${guide.id}`} onClick={() => { setQuery(""); document.getElementById(guide.id)?.focus({ preventScroll: true }); }}><span>{guide.title}<small>{guide.category}</small></span><ArrowUpRight size={16} aria-hidden="true" /></a></li>)}</ul> : <p>No guides found. Try “blog”, “video”, or “publishing”.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
