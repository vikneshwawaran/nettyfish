import Header from "./Header";
import Footer from "./Footer";

 const Layout = ({ children }) => (
    <div className="content">
        <Header />
        { children }
        <Footer />
    </div>
);
export default Layout;