import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Content } from "./components/Content"
import { Router } from "./router"
import { globalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  globalStyles()

  return (
    <div className={theme}>
      <Header></Header>
      <Content><Router /></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
