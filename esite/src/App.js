import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from "./component/header/Header";
import Home from './component/home/Home';
import Cart from './component/cart/Cart';
import DetailView from './component/product/itemDetails'
import { TemplatesProvider } from './templates/TemplatesProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <TemplatesProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={DetailView} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplatesProvider>
  );
}

export default App;
