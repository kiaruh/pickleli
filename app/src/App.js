import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'
import Footer from './components/layout/footer/Footer'
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer"
import ItemListContainer from './components/itemList/ItemListContainer'

import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/catalogo/:id" component={ItemListContainer} />
            <Route path="/producto/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
