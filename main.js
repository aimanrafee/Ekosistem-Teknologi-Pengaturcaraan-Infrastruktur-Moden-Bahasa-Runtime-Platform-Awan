import { layers, tools, toolsIntro, shells, summaryPoints } from "../data/content.js";
import { initTheme } from "./theme.js";
import {
  renderStackViz,
  renderLayers,
  renderToolsTable,
  renderToolsIntro,
  renderShells,
  renderSummaryPoints
} from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  renderStackViz(document.getElementById("stackviz"), layers);
  renderLayers(document.getElementById("layerGrid"), layers);
  renderToolsIntro(document.getElementById("toolsIntro"), toolsIntro);
  renderToolsTable(document.querySelector("#toolsTable tbody"), tools);
  renderShells(document.getElementById("shellGrid"), shells);
  renderSummaryPoints(document.getElementById("summaryPoints"), summaryPoints);
});
