import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Summary from './Summary/Summary';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLanguage: 'EN',
      checkedProjects: [],
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
  
      
      
    <Projects {...this.state} />

    <Summary {...this.state} />
      </div>
    );
  }
}

export default App;
