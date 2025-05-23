import { ThemeProvider } from "./components/theme-provider"
import Home from "./Home"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}

export default App