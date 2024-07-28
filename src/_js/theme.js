import { init } from '../_plugins/mermaid.js';

function setTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('theme', theme);
  localStorage.setItem('preferredTheme', theme);

  init(theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement
  const themeIcon = document.querySelector("#theme")

  const userPrefersDark = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const loadPreferredTheme = () => {
    let preferredTheme = localStorage.getItem("preferredTheme")

    if (!preferredTheme) {
      preferredTheme = userPrefersDark() ? "dark" : "light"
    }

    setTheme(preferredTheme)
  }

  loadPreferredTheme()

  themeIcon.addEventListener("click", () => {
    const currentTheme = html.getAttribute("theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"

    setTheme(newTheme)
  })

  themeIcon.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    localStorage.removeItem("preferredTheme")
    loadPreferredTheme()
  })

  themeIcon.addEventListener("mouseenter", () => {
    themeIcon.innerHTML = html.getAttribute("theme") === "dark" ? "light_mode" : "dark_mode"
  })

  themeIcon.addEventListener("mouseleave", () => {
    themeIcon.innerHTML = html.getAttribute("theme") === "dark" ? "dark_mode" : "light_mode"
  })
})