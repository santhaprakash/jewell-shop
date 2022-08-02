import React from "react";
import Typography from '@mui/material/Typography';
import Design from "../Components/Designs"
import About from "../Components/About";
import Product from "../Components/Product";
import Contact from "../Components/Contact";
import Main from "../Components/Main";

const pages = ['Home', 'About us', 'designs','Products','Contact'];

  
function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
  
 <div style={{display: 'flex', flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop:'15px'}}>
   <a href="#home" style={{textDecoration: 'none'}}><Typography color="primary" style={{marginRight:'20px'}}>Home</Typography></a>
   <a href="#aboutus"  style={{textDecoration: 'none'}}><Typography color="primary" style={{marginRight:'20px'}}>About Us</Typography></a>
   <a href="#category"  style={{textDecoration: 'none'}}><Typography color="primary" style={{marginRight:'20px'}}>Category</Typography></a>
   <a href="#product"  style={{textDecoration: 'none'}}><Typography color="primary" style={{marginRight:'20px'}}>Product</Typography></a>
   <a href="#contact"  style={{textDecoration: 'none'}}><Typography color="primary" style={{marginRight:'20px'}}>Contact</Typography></a>
 </div>
 
 <div id="home">
   <Main />
 </div>
 <div id="aboutus">
   <About />
 </div>
 <div id="category">
   <Design />
 </div>
 <div id="product">
   <Product />
 </div>
 <div id="contact">
   <Contact />
 </div>

    </>
  );
}

export default Nav;

