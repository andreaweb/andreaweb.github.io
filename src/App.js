import React, { Component } from 'react';
import projects from './projects.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: projects
    }
  }
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
      <h5>
      I'm searching for a new job at a place that: 
      <ol>
        <li>Has technical challenges and a fast pace</li>
        <li>Cares more about actual deliver and performance than appearances</li>
        <li>Offers a good work environment that help you focus and/or 
          is an adept of home office
        </li>
      </ol> 
      If your company fits the description and you like my portfolio, 
      please message me!
      </h5>
      <section class="contact">
        <a 
          href="https://www.linkedin.com/in/andreafrontend/?locale=en_US" 
          title="LinkedIn" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <i class="fa fa-linkedin-square white"></i>
        </a>

        <a 
          href="https://twitter.com/andreafrontend?lang=en" 
          title="Twitter" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <i class="fa fa-twitter-square white"></i>
        </a>

        <a 
          href="mailto:return.santana@gmail.com" 
          title="E-mail" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <i class="fa fa-envelope white"></i>
        </a>
      </section>
    </aside>
    <div class="portfolio">
      {this.state.projects.map(
          (project, key) =>
          <section class="project" key={key}>
            <div class="title">
              <h3>{project.name}</h3>
               <p class="description">
                  {project.description}
                  {project.stack.map((stack, i) => <span class="tag skills" key={i}>{stack}</span>)}
                  {project.occasion ? <span class="tag occasion">{project.occasion}</span> : null }
                </p>
            </div>
            <div class="card">
              <a href={project.link} title={project.name} rel="noopener noreferrer" target="_blank">
                <img class="card__image" alt="" src={project.thumbnail} />
              </a>
            </div>
          </section>
        )
      }
      
    </div>
  </main>
      </div>
    );
  }
}

export default App;
