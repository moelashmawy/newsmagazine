import React, { useEffect } from 'react';
import './style/App.scss';
import Home from './components/MainPage/Home';
import CategoryPage from './components/pages/CategoryPage';
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
          <Route path="/us" render={(props) => <CategoryPage category="us" {...props} />} />
          <Route path="/business" render={(props) => <CategoryPage category="business" {...props} />} />
          <Route path="/health" render={(props) => <CategoryPage category="health" {...props} />} />
          <Route path="/world" render={(props) => <CategoryPage category="world" {...props} />} />
          <Route path="/culture" render={(props) => <CategoryPage category="culture" {...props} />} />
          <Route path="/techAndScience" render={(props) => <CategoryPage category="techAndScience" {...props} />} />
          <Route path="/newsgeek" render={(props) => <CategoryPage category="newsgeek" {...props} />} />
          <Route path="/sports" render={(props) => <CategoryPage category="sports" {...props} />} />
          <Route path="/theDebate" render={(props) => <CategoryPage category="theDebate" {...props} />} />
          <Route path="/vantage" render={(props) => <CategoryPage category="vantage" {...props} />} />
          <Route path="/weather" render={(props) => <CategoryPage category="weather" {...props} />} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
