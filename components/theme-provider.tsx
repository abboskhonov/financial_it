"use client"

import * as React from "react"

const THEME_KEY = "theme"
const DARK = "dark"
const LIGHT = "light"

type Theme = typeof DARK | typeof LIGHT

const ThemeContext = React.createContext<{
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>(DARK)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = stored || (prefersDark ? DARK : LIGHT)
    setResolvedTheme(theme)
    document.documentElement.classList.toggle(DARK, theme === DARK)
    setMounted(true)
  }, [])

  const setTheme = React.useCallback((theme: Theme) => {
    setResolvedTheme(theme)
    localStorage.setItem(THEME_KEY, theme)
    document.documentElement.classList.toggle(DARK, theme === DARK)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(THEME_KEY)
      if (!stored) {
        const theme = e.matches ? DARK : LIGHT
        setResolvedTheme(theme)
        document.documentElement.classList.toggle(DARK, theme === DARK)
      }
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [mounted])

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key.toLowerCase() !== "d") return
      if (isTypingTarget(event.target)) return
      setTheme(resolvedTheme === DARK ? LIGHT : DARK)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider, useTheme }
