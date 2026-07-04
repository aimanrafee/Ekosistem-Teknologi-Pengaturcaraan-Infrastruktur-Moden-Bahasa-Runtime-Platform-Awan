// render.js — pure DOM-building functions. Each function takes data + a container
// and returns nothing; side effect is appending built nodes. Keeping this separate
// from theme.js and main.js keeps each module doing exactly one job.

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function chip(text) {
  return el("span", "chip", text);
}

export function renderStackViz(container, layers) {
  // Literal stacked bars, widest at the bottom (system) narrowing toward the top
  // (frontend) — the shape itself encodes "what runs on top of what".
  const order = [...layers].reverse();
  order.forEach((layer, i) => {
    const bar = el("div", "stackviz__bar");
    bar.style.setProperty("--i", i);
    const label = el("span", "stackviz__label", layer.title);
    const langs = el("span", "stackviz__langs", layer.languages.join(" · "));
    bar.appendChild(label);
    bar.appendChild(langs);
    container.appendChild(bar);
  });
}

export function renderLayers(container, layers) {
  layers.forEach((layer) => {
    const card = el("article", "layer-card");
    card.setAttribute("tabindex", "0");

    const head = el("div", "layer-card__head");
    head.appendChild(el("span", "layer-card__tag", layer.tag));
    head.appendChild(el("h3", "layer-card__title", layer.title));
    head.appendChild(el("p", "layer-card__subtitle", layer.subtitle));

    const chips = el("div", "layer-card__chips");
    layer.languages.forEach((lang) => chips.appendChild(chip(lang)));

    const summary = el("p", "layer-card__summary", layer.summary);
    const detail = el("p", "layer-card__detail", layer.detail);

    const toggle = el("button", "layer-card__toggle", "Butiran lanjut");
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Sorok butiran" : "Butiran lanjut";
    });

    card.appendChild(head);
    card.appendChild(chips);
    card.appendChild(summary);
    card.appendChild(detail);
    card.appendChild(toggle);
    container.appendChild(card);
  });
}

export function renderToolsTable(tbody, tools) {
  tools.forEach((row) => {
    const tr = el("tr");
    tr.className = "tools-table__row";

    const toolCell = el("td", "tools-table__tool");
    toolCell.appendChild(el("span", null, row.tool));
    tr.appendChild(toolCell);

    tr.appendChild(el("td", null, row.written));
    tr.appendChild(el("td", "tools-table__core", row.core));

    const noteTd = el("td", "tools-table__note-cell");
    const toggle = el("button", "tools-table__toggle", "Kenapa?");
    toggle.setAttribute("aria-expanded", "false");
    noteTd.appendChild(toggle);
    tr.appendChild(noteTd);

    const noteRow = el("tr", "tools-table__note-row");
    const noteFullTd = el("td");
    noteFullTd.setAttribute("colspan", "4");
    noteFullTd.appendChild(el("p", "tools-table__note", row.note));
    noteRow.appendChild(noteFullTd);
    noteRow.hidden = true;

    toggle.addEventListener("click", () => {
      const isOpen = noteRow.hidden;
      noteRow.hidden = !isOpen;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Sorok" : "Kenapa?";
    });

    tbody.appendChild(tr);
    tbody.appendChild(noteRow);
  });
}

export function renderToolsIntro(container, text) {
  container.textContent = text;
}

export function renderShells(container, shells) {
  shells.forEach((s) => {
    const card = el("div", "shell-card");
    card.appendChild(el("h3", "shell-card__platform", s.platform));

    const rows = [
      ["Shell asli", s.native],
      ["Akses admin", s.admin],
      ["Sumber kemas kini", s.updates]
    ];

    rows.forEach(([k, v]) => {
      const row = el("div", "shell-card__row");
      row.appendChild(el("span", "shell-card__key", k));
      row.appendChild(el("span", "shell-card__value", v));
      card.appendChild(row);
    });

    card.appendChild(el("p", "shell-card__note", s.note));
    container.appendChild(card);
  });
}

export function renderSummaryPoints(container, points) {
  points.forEach((p) => {
    const item = el("div", "summary-point");
    item.appendChild(el("span", "summary-point__label", p.label));
    item.appendChild(el("p", "summary-point__text", p.text));
    container.appendChild(item);
  });
}
