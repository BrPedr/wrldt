import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import JoinPage from "./pages/join-page/JoinPage";
import AboutPage from "./pages/about-page/AboutPage";
import SignInPage from "./pages/signin-page/SigninPage";
import ShopPage from "./pages/shop-page/ShopPage";
import CartPage from "./pages/cart-page/CartPage";

import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import NavMobile from "./components/nav-mobile/NavMobile";

const App = () => {
  return (
    <div className="Container">
      <Banner imageUrl="https://i.pinimg.com/564x/91/a6/23/91a6233ced3799f85ed93326af0f238e.jpg" />
      <Header />
      <NavMobile />
      <Switch>
        <Route path="/wrldt" exact component={Homepage} />
        <Route path="/wrldt/join" component={JoinPage} />
        <Route path="/wrldt/about" component={AboutPage} />
        <Route path="/wrldt/sign-in" component={SignInPage} />
        <Route path="/wrldt/shop" component={ShopPage} />
        <Route path="/wrldt/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
