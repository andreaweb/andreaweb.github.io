import React from 'react';
import projects from './projects.json';

class Projects extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			projects: projects,
			projectsArr: [],
			activeDescription: null,
			search: [
		        //"Jquery", 
		        "api", 
		        "css animations",
		        "html5 canvas",
		        "service worker",
		        "accessibility",
		        "javascript",
		        "react",
		        "css grid",
		        "redux"
	        ]
		}
	}
	componentDidMount(){
		this.filterProjects()    
	}
	filterProjects(){
		let filteredArr = this.state.projects
	    this.setState({
	      projects: filteredArr.filter(
	        project =>    
	          project.stack.map(
	            (stack) => 
	            this.state.search.includes(stack.toLowerCase())
	          ).reduce(
	            (prev, next) =>
	            prev === true || next === true ? true : false
	          )
	      )
	    })
	}
	//chooseStack = () =>{
	//	let searchCopy = this.search.value;
	//	console.log(this.state.search.indexOf(searchCopy.toLowerCase()))
	//}
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
	render(){
		return(
			<main className="portfolio">
		    {//<input FILTER IS CURRENTLY NOT SO USEFUL... THERE'S NOT THAT MANY PROJECTS!
			   // ref={input => this.search = input}
			   // onChange={this.chooseStack} 
			///>
			}
		      {this.state.projects.map(
		          (project, key) =>
		          <section 
		            className={
		              this.state.activeDescription===key
		              ? "project active"
		              : "project"
		            }
		            key={project.name} 
		            id={key} 
		            ref={ this.addProject }
		          >
		              <a 
		                className="project__link"
		                style={{backgroundImage: `url(${project.thumbnail})`}} 
		                href={project.link} 
		                title={
		                  this.props.currentLanguage === "EN" 
		                  ? project.name
		                  : this.props.currentLanguage === "PT" ? project.nome : project.titel
		                } 
		                rel="noopener noreferrer" 
		                target="_blank"
		              >
		              </a>
		              <h3 className="project__title">
		                {
		                  this.props.currentLanguage === "EN" 
		                  ? project.name
		                  : this.props.currentLanguage === "PT" ? project.nome : project.titel
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
		                  this.props.currentLanguage === "EN" 
		                  ? project.description
		                  : this.props.currentLanguage === "PT" 
		                  	? project.descricao : project.Omschrijving
		                } 
		              
		              </p>
		            
		          </section>
		        )
		      }
		      
		    </main>
		)
	}
}
export default Projects