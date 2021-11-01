import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'
import Footer from './components/layout/footer/Footer'
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import ItemListContainer from './components/itemList/ItemListContainer'
import Category from './components/Category'
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/categoria/:id" component={Category} />
            <Route path="/catalogo/" component={ItemListContainer} />
            <Route path="/producto/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
