(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(':root{--boardwalk-primary-color: #4a90e2;--boardwalk-primary-color-hover: #3a80d2;--boardwalk-primary-color-active: #2a70c2;--boardwalk-secondary-color: #f1f1f1;--boardwalk-secondary-color-hover: #e1e1e1;--boardwalk-secondary-color-active: #d1d1d1;--boardwalk-text-color: #333333;--boardwalk-text-color-secondary: #666666;--boardwalk-text-color-muted: #777777;--boardwalk-bg-color: #ffffff;--boardwalk-border-color: #dddddd;--boardwalk-overlay-color: rgba(0, 0, 0, .5);--boardwalk-highlight-color: rgba(74, 144, 226, .3);--boardwalk-error-color: #e74c3c;--boardwalk-success-color: #2ecc71;--boardwalk-warning-color: #f39c12;--boardwalk-info-color: #3498db;--boardwalk-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--boardwalk-font-size-base: 14px;--boardwalk-font-size-small: 12px;--boardwalk-font-size-large: 16px;--boardwalk-font-size-title: 18px;--boardwalk-font-weight-normal: 400;--boardwalk-font-weight-medium: 500;--boardwalk-font-weight-bold: 600;--boardwalk-line-height: 1.5;--boardwalk-spacing-xs: 5px;--boardwalk-spacing-sm: 10px;--boardwalk-spacing-md: 15px;--boardwalk-spacing-lg: 20px;--boardwalk-spacing-xl: 30px;--boardwalk-border-radius-sm: 4px;--boardwalk-border-radius-md: 6px;--boardwalk-border-radius-lg: 8px;--boardwalk-border-width: 1px;--boardwalk-border-style: solid;--boardwalk-shadow-sm: 0 2px 5px rgba(0, 0, 0, .1);--boardwalk-shadow-md: 0 2px 10px rgba(0, 0, 0, .15);--boardwalk-shadow-lg: 0 5px 15px rgba(0, 0, 0, .2);--boardwalk-shadow-tooltip: 0 2px 20px rgba(0, 0, 0, .2);--boardwalk-shadow-highlight: 0 0 0 9999px var(--boardwalk-overlay-color);--boardwalk-z-index-overlay: 9998;--boardwalk-z-index-highlight: 9997;--boardwalk-z-index-tooltip: 10000;--boardwalk-z-index-highlighted-element: 9999;--boardwalk-transition-duration: .3s;--boardwalk-transition-timing: ease;--boardwalk-tooltip-max-width: 350px;--boardwalk-tooltip-arrow-size: 12px;--boardwalk-tooltip-spacing: 10px;--boardwalk-btn-padding-y: 8px;--boardwalk-btn-padding-x: 16px;--boardwalk-btn-font-size: var(--boardwalk-font-size-base);--boardwalk-btn-font-weight: var(--boardwalk-font-weight-medium);--boardwalk-progress-height: 4px;--boardwalk-progress-bg: var(--boardwalk-secondary-color);--boardwalk-animation-duration: 1.5s}.boardwalk-theme-default{--boardwalk-primary-color: #4a90e2;--boardwalk-primary-color-hover: #3a80d2;--boardwalk-primary-color-active: #2a70c2;--boardwalk-secondary-color: #f1f1f1;--boardwalk-secondary-color-hover: #e1e1e1;--boardwalk-secondary-color-active: #d1d1d1;--boardwalk-text-color: #333333;--boardwalk-text-color-secondary: #666666;--boardwalk-text-color-muted: #777777;--boardwalk-bg-color: #ffffff;--boardwalk-border-color: #dddddd;--boardwalk-overlay-color: rgba(0, 0, 0, .5);--boardwalk-highlight-color: rgba(74, 144, 226, .3)}.boardwalk-theme-dark{--boardwalk-primary-color: #5a9cf0;--boardwalk-primary-color-hover: #4a8ce0;--boardwalk-primary-color-active: #3a7cd0;--boardwalk-secondary-color: #3a3a3a;--boardwalk-secondary-color-hover: #4a4a4a;--boardwalk-secondary-color-active: #5a5a5a;--boardwalk-text-color: #f0f0f0;--boardwalk-text-color-secondary: #c0c0c0;--boardwalk-text-color-muted: #a0a0a0;--boardwalk-bg-color: #222222;--boardwalk-border-color: #444444;--boardwalk-overlay-color: rgba(0, 0, 0, .7);--boardwalk-highlight-color: rgba(90, 156, 240, .3);--boardwalk-shadow-sm: 0 2px 5px rgba(0, 0, 0, .3);--boardwalk-shadow-md: 0 2px 10px rgba(0, 0, 0, .4);--boardwalk-shadow-lg: 0 5px 15px rgba(0, 0, 0, .5);--boardwalk-shadow-tooltip: 0 2px 20px rgba(0, 0, 0, .6)}.boardwalk-theme-modern{--boardwalk-primary-color: #6c5ce7;--boardwalk-primary-color-hover: #5d4ed6;--boardwalk-primary-color-active: #4e3fc5;--boardwalk-secondary-color: #f5f6fa;--boardwalk-secondary-color-hover: #e5e6ea;--boardwalk-secondary-color-active: #d5d6da;--boardwalk-text-color: #2d3436;--boardwalk-text-color-secondary: #636e72;--boardwalk-text-color-muted: #b2bec3;--boardwalk-bg-color: #ffffff;--boardwalk-border-color: #dfe6e9;--boardwalk-overlay-color: rgba(45, 52, 54, .5);--boardwalk-highlight-color: rgba(108, 92, 231, .2);--boardwalk-font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--boardwalk-border-radius-sm: 6px;--boardwalk-border-radius-md: 8px;--boardwalk-border-radius-lg: 12px;--boardwalk-shadow-sm: 0 2px 8px rgba(0, 0, 0, .06);--boardwalk-shadow-md: 0 4px 12px rgba(0, 0, 0, .08);--boardwalk-shadow-lg: 0 8px 24px rgba(0, 0, 0, .12);--boardwalk-shadow-tooltip: 0 8px 30px rgba(0, 0, 0, .12)}.boardwalk-btn{display:inline-block;padding:var(--boardwalk-btn-padding-y) var(--boardwalk-btn-padding-x);border-radius:var(--boardwalk-border-radius-sm);font-size:var(--boardwalk-btn-font-size);font-weight:var(--boardwalk-btn-font-weight);text-align:center;cursor:pointer;border:var(--boardwalk-border-width) var(--boardwalk-border-style) transparent;transition:all var(--boardwalk-transition-duration) var(--boardwalk-transition-timing);-webkit-user-select:none;user-select:none;text-decoration:none}.boardwalk-btn-primary{background-color:var(--boardwalk-primary-color);color:#fff}.boardwalk-btn-primary:hover{background-color:var(--boardwalk-primary-color-hover)}.boardwalk-btn-primary:active{background-color:var(--boardwalk-primary-color-active)}.boardwalk-btn-secondary{background-color:var(--boardwalk-secondary-color);color:var(--boardwalk-text-color)}.boardwalk-btn-secondary:hover{background-color:var(--boardwalk-secondary-color-hover)}.boardwalk-btn-secondary:active{background-color:var(--boardwalk-secondary-color-active)}.boardwalk-btn-outline{background-color:transparent;border-color:var(--boardwalk-primary-color);color:var(--boardwalk-primary-color)}.boardwalk-btn-outline:hover{background-color:#4a90e21a}.boardwalk-btn-outline:active{background-color:#4a90e233}.boardwalk-btn-sm{padding:calc(var(--boardwalk-btn-padding-y) * .75) calc(var(--boardwalk-btn-padding-x) * .75);font-size:var(--boardwalk-font-size-small)}.boardwalk-btn-lg{padding:calc(var(--boardwalk-btn-padding-y) * 1.25) calc(var(--boardwalk-btn-padding-x) * 1.25);font-size:var(--boardwalk-font-size-large)}.boardwalk-btn:disabled,.boardwalk-btn.disabled{opacity:.6;cursor:not-allowed}.boardwalk-btn-icon{display:inline-flex;align-items:center;justify-content:center}.boardwalk-btn-icon svg,.boardwalk-btn-icon img{margin-right:var(--boardwalk-spacing-xs);width:1em;height:1em}.boardwalk-btn-block{display:block;width:100%}.boardwalk-tooltip{position:absolute;max-width:var(--boardwalk-tooltip-max-width);background-color:var(--boardwalk-bg-color);border-radius:var(--boardwalk-border-radius-md);box-shadow:var(--boardwalk-shadow-tooltip);padding:var(--boardwalk-spacing-md);z-index:var(--boardwalk-z-index-tooltip);pointer-events:auto;transition:opacity var(--boardwalk-transition-duration) var(--boardwalk-transition-timing);font-family:var(--boardwalk-font-family);color:var(--boardwalk-text-color);border:var(--boardwalk-border-width) var(--boardwalk-border-style) var(--boardwalk-border-color)}.boardwalk-tooltip-arrow{position:absolute;width:var(--boardwalk-tooltip-arrow-size);height:var(--boardwalk-tooltip-arrow-size);background-color:var(--boardwalk-bg-color);transform:rotate(45deg);z-index:-1;border:var(--boardwalk-border-width) var(--boardwalk-border-style) var(--boardwalk-border-color)}.boardwalk-tooltip[data-position=top] .boardwalk-tooltip-arrow{border-bottom-style:var(--boardwalk-border-style);border-right-style:var(--boardwalk-border-style);border-top-style:none;border-left-style:none}.boardwalk-tooltip[data-position=bottom] .boardwalk-tooltip-arrow{border-top-style:var(--boardwalk-border-style);border-left-style:var(--boardwalk-border-style);border-bottom-style:none;border-right-style:none}.boardwalk-tooltip[data-position=left] .boardwalk-tooltip-arrow{border-top-style:var(--boardwalk-border-style);border-right-style:var(--boardwalk-border-style);border-bottom-style:none;border-left-style:none}.boardwalk-tooltip[data-position=right] .boardwalk-tooltip-arrow{border-bottom-style:var(--boardwalk-border-style);border-left-style:var(--boardwalk-border-style);border-top-style:none;border-right-style:none}.boardwalk-tooltip-title{font-size:var(--boardwalk-font-size-title);font-weight:var(--boardwalk-font-weight-bold);margin-bottom:var(--boardwalk-spacing-sm);color:var(--boardwalk-text-color)}.boardwalk-tooltip-content{font-size:var(--boardwalk-font-size-base);line-height:var(--boardwalk-line-height);margin-bottom:var(--boardwalk-spacing-md);color:var(--boardwalk-text-color-secondary)}.boardwalk-tooltip-buttons{display:flex;justify-content:space-between;align-items:center}.boardwalk-tooltip-sm{max-width:calc(var(--boardwalk-tooltip-max-width) * .75);padding:var(--boardwalk-spacing-sm)}.boardwalk-tooltip-lg{max-width:calc(var(--boardwalk-tooltip-max-width) * 1.25);padding:var(--boardwalk-spacing-lg)}@keyframes boardwalk-tooltip-fade-in{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes boardwalk-tooltip-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}.boardwalk-tooltip-animate-in{animation:boardwalk-tooltip-fade-in var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-tooltip-animate-out{animation:boardwalk-tooltip-fade-out var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-highlight{position:absolute;box-shadow:var(--boardwalk-shadow-highlight);border-radius:var(--boardwalk-border-radius-sm);z-index:var(--boardwalk-z-index-highlight);pointer-events:none}.boardwalk-highlighted{z-index:var(--boardwalk-z-index-highlighted-element)}.boardwalk-highlight-subtle{box-shadow:0 0 0 9999px #0000004d}.boardwalk-highlight-strong{box-shadow:0 0 0 9999px #000000b3}.boardwalk-highlight-border{border:2px solid var(--boardwalk-primary-color)}.boardwalk-highlight-glow{box-shadow:0 0 0 9999px var(--boardwalk-overlay-color),0 0 0 3px var(--boardwalk-primary-color),0 0 15px var(--boardwalk-primary-color)}.boardwalk-highlight-rounded{border-radius:var(--boardwalk-border-radius-lg)}.boardwalk-highlight-circle{border-radius:50%}@keyframes boardwalk-blink{0%,to{opacity:1}50%{opacity:.5}}.boardwalk-highlight.blink{animation:boardwalk-blink 1s infinite}@keyframes boardwalk-bounce{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}.boardwalk-highlight.bounce{animation:boardwalk-bounce 1s infinite}.boardwalk-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--boardwalk-overlay-color);z-index:var(--boardwalk-z-index-overlay);pointer-events:none;transition:opacity var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-overlay-light{background-color:#ffffffb3}.boardwalk-overlay-dark{background-color:#000000b3}.boardwalk-overlay-blur{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.boardwalk-overlay-gradient{background:linear-gradient(#000c,#0000004d)}@keyframes boardwalk-overlay-fade-in{0%{opacity:0}to{opacity:1}}@keyframes boardwalk-overlay-fade-out{0%{opacity:1}to{opacity:0}}.boardwalk-overlay-animate-in{animation:boardwalk-overlay-fade-in var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-overlay-animate-out{animation:boardwalk-overlay-fade-out var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-overlay-interactive{pointer-events:auto;cursor:pointer}.boardwalk-progress-dots{display:flex;justify-content:center;margin:var(--boardwalk-spacing-sm) 0}.boardwalk-progress-dot{width:8px;height:8px;border-radius:50%;background-color:var(--boardwalk-text-color-muted);margin:0 var(--boardwalk-spacing-xs);transition:all var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-progress-dot.active{background-color:var(--boardwalk-primary-color);transform:scale(1.2)}.boardwalk-progress-bar-container{width:100%;height:4px;background-color:var(--boardwalk-secondary-color);border-radius:var(--boardwalk-border-radius-sm);margin:var(--boardwalk-spacing-sm) 0;overflow:hidden}.boardwalk-progress-bar{height:100%;background-color:var(--boardwalk-primary-color);border-radius:var(--boardwalk-border-radius-sm);transition:width var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-progress-numbers{display:flex;justify-content:space-between;margin:var(--boardwalk-spacing-sm) 0;position:relative}.boardwalk-progress-numbers:before{content:"";position:absolute;top:50%;left:0;right:0;height:2px;background-color:var(--boardwalk-secondary-color);z-index:0}.boardwalk-progress-number{width:24px;height:24px;border-radius:50%;background-color:var(--boardwalk-secondary-color);color:var(--boardwalk-text-color);display:flex;align-items:center;justify-content:center;font-size:var(--boardwalk-font-size-small);font-weight:var(--boardwalk-font-weight-bold);position:relative;z-index:1;transition:all var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-progress-number.active,.boardwalk-progress-number.completed{background-color:var(--boardwalk-primary-color);color:#fff}.boardwalk-progress-number.completed:after{content:"✓";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.boardwalk-progress-labels{display:flex;justify-content:space-between;margin-top:var(--boardwalk-spacing-xs)}.boardwalk-progress-label{font-size:var(--boardwalk-font-size-small);color:var(--boardwalk-text-color-secondary);text-align:center;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.boardwalk-progress-label.active{color:var(--boardwalk-primary-color);font-weight:var(--boardwalk-font-weight-bold)}.boardwalk-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.boardwalk-focus-visible:focus{outline:2px solid var(--boardwalk-focus-color, #4a90e2);outline-offset:2px}.boardwalk-focus-visible:focus:not(:focus-visible){outline:2px solid var(--boardwalk-focus-color, #4a90e2);outline-offset:2px}.boardwalk-skip-link{position:absolute;top:-40px;left:0;background:var(--boardwalk-background-color, #ffffff);color:var(--boardwalk-text-color, #333333);padding:8px;z-index:10000;transition:top .3s}.boardwalk-skip-link:focus{top:0}@media (forced-colors: active){.boardwalk-tooltip,.boardwalk-button,.boardwalk-highlight{forced-color-adjust:none;border:1px solid ButtonText}.boardwalk-button:focus{outline:2px solid Highlight}}.boardwalk-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--boardwalk-overlay-color);z-index:var(--boardwalk-z-index-overlay);pointer-events:none}.boardwalk-container{position:absolute;top:0;left:0;width:100%;height:100%;z-index:var(--boardwalk-z-index-highlighted-element);pointer-events:none}.boardwalk-instruction-text{font-size:var(--boardwalk-font-size-small);color:var(--boardwalk-text-color-secondary);font-style:italic;padding:var(--boardwalk-spacing-sm) 0;text-align:center;width:100%}body.boardwalk-click-to-continue{cursor:pointer}.boardwalk-btn{padding:var(--boardwalk-btn-padding-y) var(--boardwalk-btn-padding-x);border-radius:var(--boardwalk-border-radius-sm);font-size:var(--boardwalk-btn-font-size);font-weight:var(--boardwalk-btn-font-weight);cursor:pointer;border:none;transition:background-color var(--boardwalk-transition-duration) var(--boardwalk-transition-timing)}.boardwalk-btn-prev{background-color:var(--boardwalk-secondary-color);color:var(--boardwalk-text-color)}.boardwalk-btn-prev:hover{background-color:var(--boardwalk-secondary-color-hover)}.boardwalk-btn-prev:active{background-color:var(--boardwalk-secondary-color-active)}.boardwalk-btn-next{background-color:var(--boardwalk-primary-color);color:#fff;margin-left:var(--boardwalk-spacing-sm)}.boardwalk-btn-next:hover{background-color:var(--boardwalk-primary-color-hover)}.boardwalk-btn-next:active{background-color:var(--boardwalk-primary-color-active)}.boardwalk-tooltip-progress{font-size:var(--boardwalk-font-size-small);color:var(--boardwalk-text-color-muted);margin-left:auto;padding-left:var(--boardwalk-spacing-md)}@keyframes boardwalk-pulse{0%{box-shadow:0 0 0 0 var(--boardwalk-highlight-color),var(--boardwalk-shadow-highlight)}70%{box-shadow:0 0 0 10px #0000,var(--boardwalk-shadow-highlight)}to{box-shadow:0 0 #0000,var(--boardwalk-shadow-highlight)}}.boardwalk-highlight.animate{animation:boardwalk-pulse var(--boardwalk-animation-duration) infinite}.boardwalk-no-animation{animation:none!important;transition:none!important}')),document.head.appendChild(a)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var x = Object.defineProperty;
var P = (a, t, e) => t in a ? x(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var r = (a, t, e) => P(a, typeof t != "symbol" ? t + "" : t, e);
const f = {
  TOOLTIP: "tooltip",
  DIALOG: "dialog",
  BUTTON: "button",
  NAVIGATION: "navigation",
  PROGRESSBAR: "progressbar"
};
class A {
  /**
   * Create a focus manager for a container
   * @param container The container element to manage focus within
   */
  constructor(t) {
    r(this, "previouslyFocusedElement", null);
    r(this, "container");
    r(this, "focusableElements", []);
    r(this, "firstFocusableElement", null);
    r(this, "lastFocusableElement", null);
    r(this, "active", !1);
    r(this, "FOCUSABLE_ATTRIBUTE", "data-boardwalk-focusable");
    /**
     * Handle tab key to trap focus within container
     */
    r(this, "handleTabKey", (t) => {
      t.key === "Tab" && (!this.firstFocusableElement || !this.lastFocusableElement || (t.shiftKey ? document.activeElement === this.firstFocusableElement && (t.preventDefault(), this.lastFocusableElement.focus()) : document.activeElement === this.lastFocusableElement && (t.preventDefault(), this.firstFocusableElement.focus())));
    });
    this.container = t, this.updateFocusableElements();
  }
  /**
   * Update the list of focusable elements within the container
   */
  updateFocusableElements() {
    var i;
    const t = `[${this.FOCUSABLE_ATTRIBUTE}]`, e = Array.from(this.container.querySelectorAll(t));
    this.focusableElements = e.filter((s) => {
      const o = window.getComputedStyle(s);
      return o.display !== "none" && o.visibility !== "hidden" && s.offsetParent !== null;
    }), this.firstFocusableElement = this.focusableElements[0] || null, this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1] || null, (i = this.lastFocusableElement) == null || i.focus();
  }
  /**
   * Activate focus trapping
   */
  activate() {
    this.active || (this.previouslyFocusedElement = document.activeElement, this.updateFocusableElements(), this.firstFocusableElement && this.firstFocusableElement.focus(), document.addEventListener("keydown", this.handleTabKey), this.active = !0);
  }
  /**
   * Deactivate focus trapping and restore previous focus
   */
  deactivate() {
    this.active && (document.removeEventListener("keydown", this.handleTabKey), this.previouslyFocusedElement && this.previouslyFocusedElement.focus && this.previouslyFocusedElement.focus(), this.active = !1);
  }
}
function w(a, t) {
  Object.entries(t).forEach(([e, i]) => {
    a.setAttribute(`aria-${e}`, i);
  });
}
function k(a = "polite") {
  let t = document.getElementById("boardwalk-live-region");
  return t || (t = document.createElement("div"), t.id = "boardwalk-live-region", t.className = "boardwalk-sr-only", t.setAttribute("aria-live", a), t.setAttribute("aria-atomic", "true"), t.setAttribute("role", "status"), document.body.appendChild(t)), t;
}
function y(a, t = "polite") {
  const e = k(t);
  e.textContent = "", setTimeout(() => {
    e.textContent = a;
  }, 50);
}
function M(a, t) {
  const e = document.createElement("span");
  e.className = "boardwalk-sr-only", e.textContent = t, a.appendChild(e);
}
class I {
  /**
   * Create a new tour step
   * @param options Step configuration options
   * @param tour Parent tour instance
   */
  constructor(t, e) {
    r(this, "options");
    r(this, "tour");
    r(this, "element", null);
    r(this, "targetElement", null);
    r(this, "tooltipElement", null);
    r(this, "clickHandler", null);
    r(this, "autoProgressTimeout", null);
    r(this, "resizeHandler", null);
    r(this, "scrollHandler", null);
    r(this, "rafId", null);
    r(this, "targetObserver", null);
    r(this, "targetWaitTimeoutId", null);
    r(this, "cancelled", !1);
    this.options = {
      position: "bottom",
      highlight: !0,
      scrollTo: !0,
      ...t
    }, this.tour = e, this.initTargetElement();
  }
  /**
   * Initialize the target element
   */
  initTargetElement() {
    typeof this.options.target == "string" ? this.targetElement = document.querySelector(this.options.target) : this.targetElement = this.options.target;
  }
  /**
   * Clear any active observers/timeouts used while waiting for the target
   */
  clearTargetWait() {
    this.targetObserver && (this.targetObserver.disconnect(), this.targetObserver = null), this.targetWaitTimeoutId !== null && (window.clearTimeout(this.targetWaitTimeoutId), this.targetWaitTimeoutId = null);
  }
  /**
   * Wait for the target element to be present/connected up to the specified timeout.
   * Returns true if found, false if timed out.
   */
  waitForTarget(t) {
    const e = Math.max(0, t || 0);
    return new Promise((i) => {
      if (this.cancelled) {
        i(!1);
        return;
      }
      const s = (l) => {
        this.clearTargetWait(), i(l);
      };
      if (this.initTargetElement(), this.targetElement && (this.targetElement.isConnected || document.contains(this.targetElement))) {
        s(!0);
        return;
      }
      const o = document.documentElement || document.body;
      if (!o) {
        s(!1);
        return;
      }
      if (this.targetWaitTimeoutId = window.setTimeout(() => {
        s(!1);
      }, e), typeof this.options.target == "string") {
        const l = this.options.target;
        this.targetObserver = new MutationObserver(() => {
          if (this.cancelled) return;
          const n = document.querySelector(l);
          n && (this.targetElement = n, s(!0));
        }), this.targetObserver.observe(o, { childList: !0, subtree: !0, attributes: !0 });
      } else {
        const l = this.options.target;
        this.targetObserver = new MutationObserver(() => {
          this.cancelled || l && (l.isConnected || document.contains(l)) && (this.targetElement = l, s(!0));
        }), this.targetObserver.observe(o, { childList: !0, subtree: !0 });
      }
    });
  }
  /**
   * Schedule a throttled position update using requestAnimationFrame
   */
  scheduleUpdate() {
    this.rafId === null && (this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null, this.updatePositions();
    }));
  }
  /**
   * Recalculate positions for tooltip and highlight overlay
   */
  updatePositions() {
    if (this.tooltipElement && this.targetElement && this.positionTooltip(), this.element && this.targetElement && this.options.highlight) {
      const t = this.targetElement.getBoundingClientRect();
      this.element.style.top = `${t.top + window.scrollY}px`, this.element.style.left = `${t.left + window.scrollX}px`, this.element.style.width = `${t.width}px`, this.element.style.height = `${t.height}px`;
    }
  }
  /**
   * Get the effective interaction pattern for this step
   */
  getInteractionPattern() {
    return this.options.interactionPattern ? this.options.interactionPattern : this.tour.getInteractionPattern() || "button";
  }
  /**
   * Get the effective auto-progress delay for this step
   */
  getAutoProgressDelay() {
    return typeof this.options.autoProgressDelay == "number" ? this.options.autoProgressDelay : this.tour.getAutoProgressDelay() || 5e3;
  }
  /**
   * Create the tooltip element
   */
  createTooltip() {
    const t = this.tour.getContainer();
    if (!t) return;
    this.tooltipElement = document.createElement("div"), this.tooltipElement.className = "boardwalk-tooltip", this.tooltipElement.setAttribute("role", f.DIALOG);
    const e = this.tour.getCurrentStepIndex() + 1;
    w(this.tooltipElement, {
      labelledby: `boardwalk-title-${e}`,
      describedby: `boardwalk-content-${e}`,
      modal: "true",
      live: "polite"
    }), this.options.className && this.tooltipElement.classList.add(this.options.className);
    const i = document.createElement("div");
    if (i.className = "boardwalk-tooltip-arrow", this.tooltipElement.appendChild(i), this.options.title) {
      const n = document.createElement("div");
      n.className = "boardwalk-tooltip-title";
      const h = this.tour.shouldShowStepNumbers() ? `${this.tour.getCurrentStepIndex() + 1}. ` : "";
      n.textContent = `${h}${this.options.title}`, n.id = `boardwalk-title-${this.tour.getCurrentStepIndex() + 1}`, this.tooltipElement.appendChild(n);
    }
    const s = document.createElement("div");
    s.className = "boardwalk-tooltip-content", s.innerHTML = this.options.content, s.id = `boardwalk-content-${this.tour.getCurrentStepIndex() + 1}`, this.tooltipElement.appendChild(s);
    const o = document.createElement("div");
    o.className = "boardwalk-tooltip-buttons";
    const l = this.getInteractionPattern();
    if (this.tour.getCurrentStepIndex() > 0) {
      const n = document.createElement("button");
      n.className = "boardwalk-btn boardwalk-btn-prev boardwalk-focus-visible", n.setAttribute("data-boardwalk-focusable", "true"), n.textContent = "Previous", n.setAttribute("aria-label", "Go to previous step"), n.addEventListener("click", () => this.tour.prevStep()), o.appendChild(n);
    }
    if (l === "button") {
      const n = document.createElement("button");
      n.className = "boardwalk-btn boardwalk-btn-next boardwalk-focus-visible", n.setAttribute("data-boardwalk-focusable", "true"), this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1 ? (n.textContent = "Next", n.setAttribute("aria-label", "Go to next step"), n.addEventListener("click", () => this.tour.nextStep())) : (n.textContent = "Finish", n.setAttribute("aria-label", "Finish tour"), n.addEventListener("click", () => this.tour.end())), o.appendChild(n);
    } else {
      const n = document.createElement("div");
      if (n.className = "boardwalk-instruction-text", l === "click-to-continue")
        n.textContent = "Click anywhere to continue";
      else if (l === "auto-progress") {
        const c = this.getAutoProgressDelay(), h = Math.ceil(c / 1e3);
        n.textContent = `Continuing in ${h} seconds...`;
      }
      o.appendChild(n);
    }
    if (this.tour.shouldShowProgress()) {
      const n = this.tour.getCurrentStepIndex(), c = this.tour.getTotalSteps(), h = document.createElement("div");
      h.className = "boardwalk-tooltip-progress", h.textContent = `${n + 1} of ${c}`, h.setAttribute("role", f.PROGRESSBAR), h.setAttribute("aria-valuemin", "1"), h.setAttribute("aria-valuemax", `${c}`), h.setAttribute("aria-valuenow", `${n + 1}`), o.appendChild(h);
    }
    this.tooltipElement.appendChild(o), t.appendChild(this.tooltipElement);
  }
  /**
   * Position the tooltip relative to the target element
   */
  positionTooltip() {
    if (!this.tooltipElement || !this.targetElement) return;
    const t = this.targetElement.getBoundingClientRect(), e = this.tooltipElement.getBoundingClientRect();
    let i = 0, s = 0, o = this.options.position || "auto";
    switch (o) {
      case "top":
        i = t.top - e.height - 10, s = t.left + t.width / 2 - e.width / 2;
        break;
      case "bottom":
        i = t.bottom + 10, s = t.left + t.width / 2 - e.width / 2;
        break;
      case "left":
        i = t.top + t.height / 2 - e.height / 2, s = t.left - e.width - 10;
        break;
      case "right":
        i = t.top + t.height / 2 - e.height / 2, s = t.right + 10;
        break;
      case "auto":
      default:
        t.bottom + e.height + 10 <= window.innerHeight ? (i = t.bottom + 10, s = t.left + t.width / 2 - e.width / 2, o = "bottom") : t.top - e.height - 10 >= 0 ? (i = t.top - e.height - 10, s = t.left + t.width / 2 - e.width / 2, o = "top") : t.right + e.width + 10 <= window.innerWidth ? (i = t.top + t.height / 2 - e.height / 2, s = t.right + 10, o = "right") : (i = t.top + t.height / 2 - e.height / 2, s = t.left - e.width - 10, o = "left");
        break;
    }
    const l = o;
    s < 0 && (s = 10), i < 0 && (i = 10), s + e.width > window.innerWidth && (s = window.innerWidth - e.width - 10), i + e.height > window.innerHeight && (i = window.innerHeight - e.height - 10), this.tooltipElement.style.top = `${i + window.scrollY}px`, this.tooltipElement.style.left = `${s + window.scrollX}px`, this.tooltipElement.setAttribute("data-position", o), this.positionArrow(l, t);
  }
  /**
   * Position the arrow element based on the tooltip position
   * @param position The position of the tooltip
   * @param targetRect The bounding rectangle of the target element
   */
  positionArrow(t, e) {
    if (!this.tooltipElement) return;
    const i = this.tooltipElement.querySelector(".boardwalk-tooltip-arrow");
    if (!i) return;
    const s = this.tooltipElement.getBoundingClientRect();
    switch (i.style.top = "", i.style.left = "", i.style.right = "", i.style.bottom = "", t) {
      case "top":
        i.style.bottom = "-8px", i.style.left = `${e.left + e.width / 2 - s.left - 8}px`;
        break;
      case "bottom":
        i.style.top = "-8px", i.style.left = `${e.left + e.width / 2 - s.left - 8}px`;
        break;
      case "left":
        i.style.right = "-8px", i.style.top = `${e.top + e.height / 2 - s.top - 8}px`;
        break;
      case "right":
        i.style.left = "-8px", i.style.top = `${e.top + e.height / 2 - s.top - 8}px`;
        break;
    }
  }
  /**
   * Highlight the target element
   */
  highlightTarget() {
    if (!this.targetElement || !this.options.highlight) return;
    this.targetElement.classList.add("boardwalk-highlighted"), window.getComputedStyle(this.targetElement).position === "static" && (this.targetElement.dataset.originalPosition = "static", this.targetElement.style.position = "relative");
    const i = this.targetElement.getAttribute("tabindex");
    (!i || i === "-1") && (this.targetElement.setAttribute("tabindex", "0"), this.targetElement.dataset.originalTabindex = i || ""), w(this.targetElement, {
      highlighted: "true",
      describedby: `boardwalk-content-${this.tour.getCurrentStepIndex() + 1}`
    });
    const s = this.targetElement.getBoundingClientRect(), o = document.createElement("div");
    o.className = "boardwalk-highlight", o.style.top = `${s.top + window.scrollY}px`, o.style.left = `${s.left + window.scrollX}px`, o.style.width = `${s.width}px`, o.style.height = `${s.height}px`, o.setAttribute("aria-hidden", "true"), document.body.appendChild(o), this.element = o;
  }
  /**
   * Setup click-to-continue interaction
   */
  setupClickToContinue() {
    this.removeClickToContinue(), document.body.classList.add("boardwalk-click-to-continue"), this.clickHandler = (t) => {
      t.target.closest("button, a, input, select, textarea") || (this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1 ? this.tour.nextStep() : this.tour.end());
    }, document.addEventListener("click", this.clickHandler);
  }
  /**
   * Remove click-to-continue handler
   */
  removeClickToContinue() {
    this.clickHandler && (document.removeEventListener("click", this.clickHandler), this.clickHandler = null, document.body.classList.remove("boardwalk-click-to-continue"));
  }
  /**
   * Setup auto-progress interaction
   */
  setupAutoProgress() {
    this.clearAutoProgressTimeout();
    const t = this.getAutoProgressDelay();
    if (this.autoProgressTimeout = window.setTimeout(() => {
      this.tour.getCurrentStepIndex() < this.tour.getTotalSteps() - 1 ? this.tour.nextStep() : this.tour.end();
    }, t), this.tooltipElement) {
      const e = this.tooltipElement.querySelector(".boardwalk-instruction-text");
      if (e) {
        let i = Math.ceil(t / 1e3);
        const s = () => {
          i > 0 && e && (e.textContent = `Continuing in ${i} seconds...`, i--, setTimeout(s, 1e3));
        };
        s();
      }
    }
  }
  /**
   * Clear auto-progress timeout
   */
  clearAutoProgressTimeout() {
    this.autoProgressTimeout !== null && (window.clearTimeout(this.autoProgressTimeout), this.autoProgressTimeout = null);
  }
  /**
   * Show this step
   */
  async show() {
    if (this.cancelled = !1, this.options.beforeShow && !await Promise.resolve(this.options.beforeShow()))
      return;
    this.initTargetElement();
    let t = !!(this.targetElement && (this.targetElement.isConnected || document.contains(this.targetElement)));
    const e = this.options.waitForTarget;
    if (!t && e) {
      const n = typeof e == "number" ? e : this.tour.getTargetWaitTimeout ? this.tour.getTargetWaitTimeout() : 5e3;
      if (t = await this.waitForTarget(n), this.cancelled) return;
    }
    const i = this.tour.getCurrentStepIndex() + 1, s = this.tour.getTotalSteps(), o = this.options.title || "Step";
    y(`${o}, step ${i} of ${s}`, "polite"), this.targetElement && this.options.scrollTo && (this.targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), await new Promise((n) => setTimeout(n, 500))), this.highlightTarget(), this.createTooltip(), this.positionTooltip(), this.resizeHandler = () => this.scheduleUpdate(), this.scrollHandler = () => this.scheduleUpdate(), window.addEventListener("resize", this.resizeHandler), window.addEventListener("scroll", this.scrollHandler);
    const l = this.getInteractionPattern();
    l === "click-to-continue" ? this.setupClickToContinue() : l === "auto-progress" && this.setupAutoProgress(), this.options.afterShow && this.options.afterShow();
  }
  /**
   * Hide this step
   */
  async hide() {
    if (this.cancelled = !0, this.clearTargetWait(), !(this.options.beforeHide && !await Promise.resolve(this.options.beforeHide()))) {
      if (this.removeClickToContinue(), this.clearAutoProgressTimeout(), this.resizeHandler && (window.removeEventListener("resize", this.resizeHandler), this.resizeHandler = null), this.scrollHandler && (window.removeEventListener("scroll", this.scrollHandler), this.scrollHandler = null), this.rafId !== null && (window.cancelAnimationFrame(this.rafId), this.rafId = null), this.targetElement) {
        if (this.targetElement.classList.remove("boardwalk-highlighted"), this.targetElement.dataset.originalPosition !== void 0 && (this.targetElement.dataset.originalPosition === "static" ? this.targetElement.style.removeProperty("position") : this.targetElement.style.position = this.targetElement.dataset.originalPosition, delete this.targetElement.dataset.originalPosition), this.targetElement.dataset.originalTabindex !== void 0) {
          const t = this.targetElement.dataset.originalTabindex;
          t === "" ? this.targetElement.removeAttribute("tabindex") : this.targetElement.setAttribute("tabindex", t), delete this.targetElement.dataset.originalTabindex;
        }
        this.targetElement.removeAttribute("aria-highlighted"), this.targetElement.removeAttribute("aria-describedby");
      }
      this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.element = null), this.tooltipElement && this.tooltipElement.parentNode && (this.tooltipElement.parentNode.removeChild(this.tooltipElement), this.tooltipElement = null), this.options.afterHide && this.options.afterHide();
    }
  }
}
const v = {
  next: ["ArrowRight", "Space", "Enter"],
  previous: ["ArrowLeft"],
  close: ["Escape"]
};
class T {
  /**
   * Create a new KeyboardManager
   * @param tour The tour instance to control
   * @param keyBindings Custom key bindings (optional)
   */
  constructor(t, e) {
    r(this, "tour");
    r(this, "keyBindings");
    r(this, "enabled", !1);
    r(this, "keydownHandler");
    this.tour = t, this.keyBindings = {
      ...v,
      ...e || {}
    }, this.keydownHandler = this.handleKeydown.bind(this);
  }
  /**
   * Enable keyboard navigation
   */
  enable() {
    this.enabled || (document.addEventListener("keydown", this.keydownHandler), this.enabled = !0);
  }
  /**
   * Disable keyboard navigation
   */
  disable() {
    this.enabled && (document.removeEventListener("keydown", this.keydownHandler), this.enabled = !1);
  }
  /**
   * Set custom key bindings
   * @param keyBindings Custom key bindings
   */
  setKeyBindings(t) {
    this.keyBindings = {
      ...v,
      ...t
    };
  }
  /**
   * Get current key bindings
   * @returns Current key bindings
   */
  getKeyBindings() {
    return { ...this.keyBindings };
  }
  /**
   * Handle keydown events
   * @param event Keyboard event
   */
  handleKeydown(t) {
    if (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey)
      return;
    const e = t.target;
    if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
      return;
    const i = t.key;
    if (this.keyBindings.next.includes(i)) {
      t.preventDefault(), this.tour.nextStep();
      return;
    }
    if (this.keyBindings.previous.includes(i)) {
      t.preventDefault(), this.tour.prevStep();
      return;
    }
    if (this.keyBindings.close.includes(i)) {
      t.preventDefault(), this.tour.end();
      return;
    }
    Object.keys(this.keyBindings).forEach((s) => {
      if (!["next", "previous", "close"].includes(s) && this.keyBindings[s].includes(i)) {
        t.preventDefault();
        const o = new CustomEvent("boardwalk:keyaction", {
          detail: { action: s, key: i }
        });
        document.dispatchEvent(o);
      }
    });
  }
}
function L(a, t) {
  return new T(a, t);
}
class F {
  /**
   * Create a new tour
   * @param options Tour configuration options
   */
  constructor(t) {
    r(this, "options");
    r(this, "steps", []);
    r(this, "currentStepIndex", -1);
    r(this, "overlay", null);
    r(this, "container", null);
    r(this, "isActive", !1);
    r(this, "keyboardManager", null);
    r(this, "focusManager", null);
    r(this, "liveRegion", null);
    r(this, "defaultInteractionPattern", "button");
    r(this, "defaultAutoProgressDelay", 5e3);
    r(this, "defaultTargetWaitTimeout", 5e3);
    this.options = {
      showProgress: !0,
      showStepNumbers: !0,
      enableKeyboardNavigation: !0,
      interactionPattern: "button",
      autoProgressDelay: 5e3,
      ...t
    }, this.options.interactionPattern && (this.defaultInteractionPattern = this.options.interactionPattern), this.options.autoProgressDelay && (this.defaultAutoProgressDelay = this.options.autoProgressDelay), this.options.targetWaitTimeout && (this.defaultTargetWaitTimeout = this.options.targetWaitTimeout), this.initDOM(), this.options.enableKeyboardNavigation && this.initKeyboardNavigation(this.options.keyBindings);
  }
  /**
   * Initialize DOM elements for the tour
   */
  initDOM() {
    this.overlay = document.createElement("div"), this.overlay.className = "boardwalk-overlay", this.overlay.setAttribute("aria-hidden", "true"), this.container = document.createElement("div"), this.container.className = "boardwalk-container", this.container.setAttribute("role", f.DIALOG), this.container.setAttribute("aria-label", "Tour content"), this.options.className && this.container.classList.add(this.options.className), this.liveRegion = k("polite");
  }
  /**
   * Add a step to the tour
   * @param options Step configuration options
   * @returns The tour instance for chaining
   */
  addStep(t) {
    const e = new I(t, this);
    return this.steps.push(e), this;
  }
  /**
   * Add multiple steps to the tour
   * @param stepsOptions Array of step configuration options
   * @returns The tour instance for chaining
   */
  addSteps(t) {
    return t.forEach((e) => this.addStep(e)), this;
  }
  /**
   * Start the tour
   * @param startAt Optional index to start from
   * @returns The tour instance
   */
  start(t = 0) {
    return this.isActive ? this : ((t < 0 || t >= this.steps.length) && (t = 0), this.isActive = !0, document.body.appendChild(this.overlay), document.body.appendChild(this.container), this.keyboardManager && this.options.enableKeyboardNavigation && this.keyboardManager.enable(), this.focusManager = new A(this.container), this.focusManager.activate(), y(`Tour started. ${this.steps.length} steps in total.`, "assertive"), this.liveRegion && (this.liveRegion.textContent = `Tour started with ${this.steps.length} steps.`), this.options.onStart && this.options.onStart(), this.goToStep(t), this);
  }
  /**
   * End the tour
   * @param isCancelled Whether the tour was cancelled
   * @returns The tour instance
   */
  end(t = !1) {
    return this.isActive ? (this.isActive = !1, this.keyboardManager && this.keyboardManager.disable(), this.focusManager && (this.focusManager.deactivate(), this.focusManager = null), this.currentStepIndex >= 0 && this.steps[this.currentStepIndex].hide(), this.overlay && this.overlay.parentNode && this.overlay.parentNode.removeChild(this.overlay), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), y(`Tour ${t ? "cancelled" : "completed"}.`, "polite"), t && this.options.onCancel ? this.options.onCancel() : !t && this.options.onEnd && this.options.onEnd(), this) : this;
  }
  /**
   * Go to a specific step
   * @param index Step index
   * @returns The tour instance
   */
  goToStep(t) {
    return !this.isActive || t < 0 || t >= this.steps.length ? this : (this.currentStepIndex >= 0 && this.steps[this.currentStepIndex].hide(), this.currentStepIndex = t, this.steps[t].show(), this.focusManager && setTimeout(() => {
      var e;
      (e = this.focusManager) == null || e.updateFocusableElements();
    }, 500), this);
  }
  /**
   * Go to the next step
   * @returns The tour instance
   */
  nextStep() {
    return this.currentStepIndex < this.steps.length - 1 ? this.goToStep(this.currentStepIndex + 1) : this.end(), this;
  }
  /**
   * Go to the previous step
   * @returns The tour instance
   */
  prevStep() {
    return this.currentStepIndex > 0 && this.goToStep(this.currentStepIndex - 1), this;
  }
  /**
   * Get the container element
   * @returns The container element
   */
  getContainer() {
    return this.container;
  }
  /**
   * Get the current step index
   * @returns Current step index
   */
  getCurrentStepIndex() {
    return this.currentStepIndex;
  }
  /**
   * Get the total number of steps
   * @returns Total number of steps
   */
  getTotalSteps() {
    return this.steps.length;
  }
  /**
   * Initialize keyboard navigation
   * @param keyBindings Custom key bindings (optional)
   */
  initKeyboardNavigation(t) {
    this.keyboardManager = new T(this, t), this.isActive && this.options.enableKeyboardNavigation && this.keyboardManager.enable(), document.addEventListener("boardwalk:keyaction", (e) => {
      this.options.onKeyAction && this.options.onKeyAction(e.detail.action, e.detail.key);
    });
  }
  /**
   * Set custom key bindings for keyboard navigation
   * @param keyBindings Custom key bindings
   * @returns The tour instance
   */
  setKeyBindings(t) {
    return this.keyboardManager ? this.keyboardManager.setKeyBindings(t) : this.options.enableKeyboardNavigation && this.initKeyboardNavigation(t), this;
  }
  /**
   * Enable or disable keyboard navigation
   * @param enable Whether to enable keyboard navigation
   * @returns The tour instance
   */
  enableKeyboardNavigation(t) {
    return this.options.enableKeyboardNavigation = t, this.keyboardManager ? t && this.isActive ? this.keyboardManager.enable() : this.keyboardManager.disable() : t && this.initKeyboardNavigation(this.options.keyBindings), this;
  }
  /**
   * Get the current interaction pattern
   * @returns The current interaction pattern
   */
  getInteractionPattern() {
    return this.options.interactionPattern || this.defaultInteractionPattern;
  }
  /**
   * Set the interaction pattern for the tour
   * @param pattern The interaction pattern to use
   * @returns The tour instance
   */
  setInteractionPattern(t) {
    return this.options.interactionPattern = t, this;
  }
  /**
   * Get the auto-progress delay
   * @returns The auto-progress delay in milliseconds
   */
  getAutoProgressDelay() {
    return this.options.autoProgressDelay || this.defaultAutoProgressDelay;
  }
  /**
   * Set the auto-progress delay
   * @param delay The delay in milliseconds
   * @returns The tour instance
   */
  setAutoProgressDelay(t) {
    return this.options.autoProgressDelay = t, this;
  }
  /**
   * Get the target wait timeout used when steps opt into waiting for targets
   * @returns Timeout in milliseconds
   */
  getTargetWaitTimeout() {
    return this.options.targetWaitTimeout || this.defaultTargetWaitTimeout;
  }
  /**
   * Whether to show the step progress indicator (e.g., "1 of N")
   */
  shouldShowProgress() {
    return this.options.showProgress !== !1;
  }
  /**
   * Whether to prefix step titles with step numbers (e.g., "1. Title")
   */
  shouldShowStepNumbers() {
    return this.options.showStepNumbers !== !1;
  }
}
const S = {
  primaryColor: "--boardwalk-primary-color",
  secondaryColor: "--boardwalk-secondary-color",
  textColor: "--boardwalk-text-color",
  backgroundColor: "--boardwalk-bg-color",
  borderColor: "--boardwalk-border-color",
  overlayColor: "--boardwalk-overlay-color",
  fontFamily: "--boardwalk-font-family",
  borderRadius: "--boardwalk-border-radius-md",
  customCSS: "",
  cssVariables: ""
};
class $ {
  /**
   * Initialize the theme manager
   */
  constructor() {
    r(this, "styleElement", null);
    r(this, "currentTheme", "default");
    r(this, "customStyles", {});
  }
  /**
   * Create the style element for custom styles
   */
  createStyleElement() {
    typeof document > "u" || (this.styleElement = document.createElement("style"), this.styleElement.id = "boardwalk-custom-styles", document.head.appendChild(this.styleElement));
  }
  /**
   * Set the active theme
   * @param themeName Name of the theme to activate
   */
  setTheme(t) {
    document.documentElement.classList.remove(`boardwalk-theme-${this.currentTheme}`), document.documentElement.classList.add(`boardwalk-theme-${t}`), this.currentTheme = t;
  }
  /**
   * Customize the theme with specific options
   * @param options Theme customization options
   */
  customize(t) {
    this.styleElement || this.createStyleElement();
    let e = `:root {
`;
    Object.entries(t).forEach(([i, s]) => {
      const o = S[i];
      if (o && s !== void 0 && i !== "customCSS" && i !== "cssVariables" && (this.customStyles[o] = String(s), e += `  ${o}: ${s};
`, i === "primaryColor")) {
        const l = (h, d) => {
          if (h.startsWith("#")) {
            const u = h.slice(1), m = parseInt(u, 16), p = Math.max(0, (m >> 16) - d), g = Math.max(0, (m >> 8 & 255) - d), b = Math.max(0, (m & 255) - d);
            return `#${(p << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
          }
          return h;
        }, n = l(String(s), 10), c = l(String(s), 20);
        e += `  --boardwalk-primary-color-hover: ${n};
`, e += `  --boardwalk-primary-color-active: ${c};
`, this.customStyles["--boardwalk-primary-color-hover"] = n, this.customStyles["--boardwalk-primary-color-active"] = c;
      }
    }), t.cssVariables && Object.entries(t.cssVariables).forEach(([i, s]) => {
      const o = i.startsWith("--") ? i : `--boardwalk-${i}`;
      e += `  ${o}: ${s};
`, this.customStyles[o] = s;
    }), e += `}
`, t.customCSS && (e += t.customCSS), this.styleElement && (this.styleElement.textContent = e);
  }
  /**
   * Reset all custom styles to defaults
   */
  resetStyles() {
    this.styleElement && (this.styleElement.textContent = ""), this.customStyles = {};
  }
  /**
   * Get the current theme name
   */
  getCurrentTheme() {
    return this.currentTheme;
  }
  /**
   * Get all custom styles
   */
  getCustomStyles() {
    return { ...this.customStyles };
  }
}
const E = new $();
function O(a) {
  E.setTheme(a);
}
function B(a) {
  E.customize(a);
}
function H() {
  E.resetStyles();
}
function K(a, t) {
  if (typeof document > "u") return;
  const e = document.createElement("style");
  e.id = `boardwalk-theme-${a}`;
  let i = `.boardwalk-theme-${a} {
`;
  Object.entries(t).forEach(([s, o]) => {
    const l = S[s];
    if (l && o !== void 0 && s !== "customCSS" && s !== "cssVariables" && (i += `  ${l}: ${o};
`, s === "primaryColor")) {
      const n = (d, u) => {
        if (d.startsWith("#")) {
          const m = d.slice(1), p = parseInt(m, 16), g = Math.max(0, (p >> 16) - u), b = Math.max(0, (p >> 8 & 255) - u), C = Math.max(0, (p & 255) - u);
          return `#${(g << 16 | b << 8 | C).toString(16).padStart(6, "0")}`;
        }
        return d;
      }, c = n(String(o), 10), h = n(String(o), 20);
      i += `  --boardwalk-primary-color-hover: ${c};
`, i += `  --boardwalk-primary-color-active: ${h};
`;
    }
  }), t.cssVariables && Object.entries(t.cssVariables).forEach(([s, o]) => {
    const l = s.startsWith("--") ? s : `--boardwalk-${s}`;
    i += `  ${l}: ${o};
`;
  }), i += `}
`, t.customCSS && (i += t.customCSS), e.textContent = i, document.head.appendChild(e);
}
export {
  f as ARIA_ROLES,
  v as DEFAULT_KEY_BINDINGS,
  A as FocusManager,
  T as KeyboardManager,
  I as Step,
  F as Tour,
  M as addScreenReaderText,
  y as announce,
  w as applyAriaAttributes,
  L as createKeyboardManager,
  k as createLiveRegion,
  K as createTheme,
  B as customizeTheme,
  H as resetTheme,
  O as setTheme,
  E as themeManager
};
