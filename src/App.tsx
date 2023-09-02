import Category from "./components/Category"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section>
        <Hero/>
      </section>
      <section className="p-4">
        <Category/>
      </section>
    </main>
  )
}

export default App