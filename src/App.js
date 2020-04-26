import React, { useEffect } from 'react';
import './style/App.scss';
import Home from './components/mainPage/Home';
import CategoryPage from './components/categoryPage/CategoryPage';
import PostSinglePage from './components/postPage/PostSinglePage';
import OpinionSinglePage from './components/opinionPage/OpinionSinglePage';
import TopicPage from './components/topicPage/TopicPage';
import NotFound from './components/mainPage/NotFound';
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

          <Route path="/:category" component={CategoryPage} exact />

          <Route path="/topic/:topic_name" component={TopicPage} strict />

          <Route path="/opinion/:opinion_id" component={OpinionSinglePage} exact strict />

          <Route path="/:category/:post_id" component={PostSinglePage} exact strict />

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
