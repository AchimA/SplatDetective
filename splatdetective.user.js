// ==UserScript==
// @name         SplatDetective
// @namespace    https://github.com/
// @version      1.0.0
// @description  Blurs scene titles/descriptions on superspl.at until you choose to reveal them.
// @author       SplatDetective
// @match        https://superspl.at/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  // Elements that give away the answer: scene heading, its description, and each grid card's title link.
  const BLUR_SELECTOR = [
    "main h1",
    "main p.whitespace-pre-wrap",
    "a.font-medium.text-sm.truncate"
  ].join(", ");

  const STYLE_ID = "splatdetective-style";
  const TOGGLE_ID = "splatdetective-toggle";
  const BLUR_CLASS = "splatdetective-blur";

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .${BLUR_CLASS} {
        filter: blur(8px);
        transition: filter 0.15s ease;
      }

      body.splatdetective-revealed .${BLUR_CLASS} {
        filter: none;
      }

      #${TOGGLE_ID} {
        position: fixed;
        top: 12px;
        right: 12px;
        z-index: 2147483647;
        border: 0;
        border-radius: 8px;
        background: #00b566;
        color: #fff;
        font: 600 13px/1.2 Inter, system-ui, -apple-system, sans-serif;
        padding: 8px 12px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
      }

      #${TOGGLE_ID}:hover {
        background: #00a45d;
      }
    `;
    document.head.appendChild(style);
  }

  function injectToggle() {
    if (document.getElementById(TOGGLE_ID)) return;

    const button = document.createElement("button");
    button.id = TOGGLE_ID;
    button.type = "button";
    button.textContent = "Reveal details";
    button.addEventListener("click", () => {
      const revealed = document.body.classList.toggle("splatdetective-revealed");
      button.textContent = revealed ? "Hide details" : "Reveal details";
    });
    document.body.appendChild(button);
  }

  function applyBlur() {
    document.querySelectorAll(BLUR_SELECTOR).forEach((el) => el.classList.add(BLUR_CLASS));
  }

  function init() {
    injectStyle();
    injectToggle();
    applyBlur();
  }

  init();

  // superspl.at is a client-routed SPA, so re-apply blur as new elements mount on navigation.
  new MutationObserver(applyBlur).observe(document.documentElement, { childList: true, subtree: true });
})();
