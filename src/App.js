import Navbar from "./components/navbar"
import Search from "./components/search"
import Product from "./components/product"
import About from "./components/about"
import Footer from "./components/footer"
function App(){
    return(
        //we can put this instead of div and its called as fragments
        <>
  <Navbar></Navbar>
  <Search></Search>
  <Product></Product>
  <About></About>
  <Footer></Footer>
  </>
    )
}
export default App