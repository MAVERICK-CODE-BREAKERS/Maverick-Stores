import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import CartPage from "./pages/CartPage";
import CarouselContainer from './components/CarouselContainer';
import Advert from "./components/Advert";
import PartnerCarousel from "./components/PartnerCarousel";
import SignUp from "./components/user/SignUp";
// import NotFound from "./pages/NotFound";
import Register from "./components/user/Register";


const App = () => {
  return (
    <Router>
    <Header />
    <main>
    <Switch>
    <Route path='/' component={CarouselContainer} exact />
        
        <Route path='/cart/:id?' component={CartPage} />
        
      <Route path='/login' component={SignUp} exact />
      <Route path='/register' component={Register} exact />
      
    </Switch>
    <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/' component={Advert} exact />
        
    </Container>
    <Route path='/' component={PartnerCarousel} exact />
    </main>
    
    {/* <Route  component={NotFound}/> */}
    

    {/* <Route path='/' component={CarouselContainer} exact />
    <main className='py-3'>
    
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartPage} />
        <Route path='/' component={Advert} exact />
        
      </Container>
      <Route path='/' component={PartnerCarousel} exact />
    </main> */}
    <Footer />
    </Router>
  );
}

export default App;
