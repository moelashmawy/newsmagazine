import React, { useEffect } from 'react';
import './style/App.scss';
import Home from './components/mainPage/Home';
import CategoryPage from './components/pages/CategoryPage';
import SinglePage from './components/singlePage/SinglePage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // This finction to imit AOS library
  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
          <Route path="/" component={Home} exact />

          <Route path="/:topic" component={CategoryPage} exact />

          <Route path="/:topic/:post_id" component={SinglePage} />

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
