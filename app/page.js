import Header from "../components/Header"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import About from "../components/About"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        {/* <Footer /> */}
      </main>
    </>
  )
}
