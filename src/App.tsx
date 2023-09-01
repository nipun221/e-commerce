import Hero from "./components/Hero"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
    </main>
  )
}

export default App