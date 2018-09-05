import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="dark-blue-bg white header">
    <p class="intro">Hi! I'm Andrea.</p>
    <div class="filter">

    </div>
  </header>
  <main class="main light-orange-bg">
    <aside class="aside dark-blue-bg white">
      <h5>I'm searching for a new job at a place that: <ol><li>Has technical challenges and a fast pace</li><li>Cares more about actual deliver and performance than appearances</li><li>Offers a good work environment that help you focus and/or is an adept of home office</li></ol> If your company fits the description and you like my portfolio, please message me!</h5>
      <section class="contact">
        <a href="https://www.linkedin.com/in/andreafrontend/" title="LinkedIn" target="_blank">
          <i class="fa fa-linkedin-square white"></i>
        </a>
        <a href="https://twitter.com/andreafrontend?lang=en" title="Twitter" target="_blank">
          <i class="fa fa-twitter-square white"></i>
        </a>
        <a href="mailto:return.santana@gmail.com" title="E-mail" target="_blank">
          <i class="fa fa-envelope white"></i>
        </a>
      </section>
    </aside>
    <div class="portfolio">
      <section class="project">
        <div class="title">
          <h3>My Reads</h3>
           <p class="description">A shelf app that displays books that you're reading, planning to read, or have finished. You can add more books in the search page, and you can change the shelves books are in or remove them from the shelves in either page.
              <span class="tag skills">React</span> <span class="tag skills">API</span> <span class="tag occasion">Udacity</span>
            </p>
        </div>
        <div class="card">
          <a href="https://andreaweb.github.io/reactnd-project-myreads-starter/" title="My Reads" rel="noopener noreferrer" target="_blank">
            <img class="card__image" alt="My Reads Printscreen" src="images/myreads.jpg" />
          </a>
        </div>
      </section>
    </div>
  </main>
      </div>
    );
  }
}

export default App;
