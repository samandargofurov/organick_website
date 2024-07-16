import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const Layout = ({children}: any) => {
  return (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
  )
}

export default Layout