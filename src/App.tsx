import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Router } from "./router"

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Router />
       <Footer></Footer>
    </div>
  )
}

export default App
