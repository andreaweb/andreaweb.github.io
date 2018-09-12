import React, { Component } from 'react';
import projects from './projects.json';
import summary from './summary.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: projects,
      activeDescription: null,
      projectsArr: [],
      currentLanguage: 'EN',
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
  addProject = (project) => {
    this.state.projectsArr.push(project)
  }
  toggleDescription = (e,key) => {
    const current = this.state.activeDescription;
    if(current === key){
      this.setState({activeDescription: null})
    }else{
      this.setState({activeDescription: key})
    }
  }
  changeLanguage = (lang) => {
    this.setState({currentLanguage: lang})
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__name">
            <span className="normal">ANDREA</span>
            <span className="light">SANTANA</span>
          </h1>
          <nav className="header__links display-none">
            <ul className="header__menu">
              <li className="header__menu__item">
                  { 
                    this.state.currentLanguage === "EN"
                    ?
                      "PROJECTS"
                    : null
                  }
                  { 
                    this.state.currentLanguage === "PT"
                    ?
                      "PROJETOS"
                    : null
                  }
                  { 
                    this.state.currentLanguage === "NL"
                    ?
                      "PROJECTS"
                    : null
                  } 
              </li>
              <li className="header__menu__item">
                { 
                    this.state.currentLanguage === "EN"
                    ?
                      "SUMMARY"
                    : null
                  }
                  { 
                    this.state.currentLanguage === "PT"
                    ?
                      "RESUMO"
                    : null
                  }
                  { 
                    this.state.currentLanguage === "NL"
                    ?
                      "SUMMARY"
                    : null
                  }
              </li>
            </ul>
          </nav>
          <div className="filter">

          </div>
          <nav className="header__links header__links--language">
            <ul className="header__menu header__menu--language">
                <li 
                  role="button"
                  tabIndex="0"
                  title="Change Language to English"
                  onClick={() => this.changeLanguage('EN')}
                  className={
                    this.state.currentLanguage === 'EN'
                    ? "header__menu__item header__menu__item--language pink bold"
                    : "header__menu__item header__menu__item--language"
                  }
                >
                  EN
                </li>
                <li 
                  role="button"
                  tabIndex="0"
                  title="Trocar idioma para Português"
                  onClick={() => this.changeLanguage('PT')}
                  className={
                    this.state.currentLanguage === 'PT'
                    ? "header__menu__item header__menu__item--language pink bold"
                    : "header__menu__item header__menu__item--language"
                  }
                >
                  PT
                </li>
                <li 
                  role="button"
                  tabIndex="0"
                  title=""
                  onClick={() => this.changeLanguage('NL')}
                  className={
                    this.state.currentLanguage === 'NL'
                    ? "header__menu__item header__menu__item--language pink bold"
                    : "header__menu__item header__menu__item--language"
                  }
                >
                  NL
                </li>
            </ul>
            </nav>
        </header>
  
      
      
    <main className="portfolio">
    
      {this.state.projects.map(
          (project, key) =>
          <section 
            className={
              this.state.activeDescription===key
              ? "project active"
              : "project"
            }
            key={key} 
            id={key} 
            ref={ this.addProject }
          >
              <a 
                className="project__link"
                style={{backgroundImage: `url(${project.thumbnail})`}} 
                href={project.link} 
                title={
                  this.state.currentLanguage === "EN" 
                  ? project.name
                  : project.nome
                } 
                rel="noopener noreferrer" 
                target="_blank"
              >
              </a>
              <h3 className="project__title">
                {
                  this.state.currentLanguage === "EN" 
                  ? project.name
                  : project.nome
                } 
                <i 
                  role="link" 
                  onClick={(e) => this.toggleDescription(e,key)}
                  tabIndex="0" 
                  className="fa fa-plus project__icon" 
                />
              </h3>
              <span className="project__stack">
                {project.stack.map(
                  (stack, i) => 
                  <span className="project__stack__item" key={i}>{stack}</span>
                  )
                }
              </span>
              <p 
                className={ 
                 this.state.activeDescription===key
                  ? "project__description project__description--open" 
                  : "project__description"
                }
              >
              
                {
                  this.state.currentLanguage === "EN" 
                  ? project.description
                  : project.descricao
                } 
              
              </p>
            
          </section>
        )
      }
      
    </main>

    <section className="summary">
      <div className="summary__text">
      { 
        this.state.currentLanguage === "EN"
        ?
          summary[0].textLines.map(
            (text, key) =>
            <p key="key">{text}</p>
          )
        : null
      }
      { 
        this.state.currentLanguage === "PT"
        ?
          summary[1].textLines.map(
            (text, key) =>
            <p key="key">{text}</p>
          )
        : null
      }
      { 
        this.state.currentLanguage === "NL"
        ?
          summary[2].textLines.map(
            (text, key) =>
            <p key="key">{text}</p>
          )
        : null
      }
      <p>
       { 
        this.state.currentLanguage === "EN"
        ?
          summary[0].articleLine
        : null
      }
      { 
        this.state.currentLanguage === "PT"
        ?
          summary[1].articleLine
        : null
      }
      { 
        this.state.currentLanguage === "NL"
        ?
          summary[2].articleLine
        : null
      } 
        <a 
          className="yellow"
          target="_blank"
          rel="noopener noreferrer"
          title="Guias de Estudo Front-End"
          href="https://medium.com/@a.cosmos/alguns-guias-de-estudo-front-end-especialmente-para-principiantes-bfa480aca526"
        >
          { 
            this.state.currentLanguage === "EN"
            ?
              summary[0].articleCall
            : null
          }
          { 
            this.state.currentLanguage === "PT"
            ?
              summary[1].articleCall
            : null
          }
          { 
            this.state.currentLanguage === "NL"
            ?
              summary[2].articleCall
            : null
          } 
        </a>
      </p>
      </div>
<div className="contact">
        <a 
          href="https://www.linkedin.com/in/andreafrontend/?locale=en_US" 
          title="LinkedIn" 
          rel="noopener noreferrer" 
          target="_blank"
          className="contact__link"
        >
          <i className="fa fa-linkedin-square white"></i>
        </a>

        <a 
          href="https://twitter.com/andreafrontend?lang=en" 
          title="Twitter" 
          rel="noopener noreferrer" 
          target="_blank"
          className="contact__link"
        >
          <i className="fa fa-twitter-square white"></i>
        </a>

        <a 
          href="mailto:return.santana@gmail.com" 
          title="E-mail" 
          rel="noopener noreferrer" 
          target="_blank"
          className="contact__link"
        >
          <i className="fa fa-envelope white"></i>
        </a>
        </div>
    </section>
      </div>
    );
  }
}

export default App;
