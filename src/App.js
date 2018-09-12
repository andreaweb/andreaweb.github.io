import React, { Component } from 'react';
import projects from './projects.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: projects,
      checkedProjects: [],
      search: [
        "Jquery", 
        "API", 
        "CSS Animations",
        "HTML5 Canvas",
        "Service Worker",
        "Accessibility",
        "Javascript",
        "React",
        "CSS Grid",
        "Redux"
        ]
    }
  }
  componentDidMount(){
    const filteredArr = this.state.projects
    this.setState({
      projects: filteredArr.filter(
        project =>    
          project.stack.map(
            (stack) => 
            this.state.search.includes(stack)
          ).reduce(
            (prev, next) =>
            prev == true || next == true ? true : false
          )
      )
    })
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__name">
            <span className="normal">ANDREA</span>
            <span className="light">SANTANA</span>
          </h1>
          <nav className="header__links">
            <ul className="header__menu">
              <li className="header__menu__item">PROJECTS</li>
              <li className="header__menu__item">SUMMARY</li>
            </ul>
          </nav>
          <div class="filter">

          </div>
          <nav className="header__links header__links--language">
            <ul className="header__menu header__menu--language">
                <li className="header__menu__item header__menu__item--language">
                  EN
                </li>
                <li className="header__menu__item header__menu__item--language">
                  PT
                </li>
                <li className="header__menu__item header__menu__item--language">
                  NL
                </li>
            </ul>
            </nav>
        </header>
  
      
      
    <main class="portfolio">
    
      {this.state.projects.map(
          (project, key) =>
          <section class="project" key={key}>
              <a 
                className="project__link"
                style={{backgroundImage: `url(${project.thumbnail})`}} 
                href={project.link} 
                title={project.name} 
                rel="noopener noreferrer" 
                target="_blank"
              >
              </a>
              <h3 className="project__title">
                {project.name} 
                <i role="link" tabindex="0" class="fa fa-plus project__icon" />
              </h3>
              <span className="project__stack">
                {project.stack.map(
                  (stack, i) => 
                  <span className="project__stack__item" key={i}>{stack}</span>
                  )
                }
              </span>
              <p className="project__description">
                {project.description}
              </p>
            
          </section>
        )
      }
      
    </main>

  <footer class="contact">
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
      </footer>
      </div>
    );
  }
}

export default App;
