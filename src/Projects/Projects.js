import React, { useState } from 'react';
import projects from './projects.json';

function Projects(props){
	const [projectsArr, setProjectsArr] = useState(projects);
	const [activeDescription, setActiveDescription] = useState(null);
	const refsArr = [];
	
	// componentDidMount(){
	// 	let filteredArr = this.state.projectsArr
	//     this.setState({
	//       projectsArr: filteredArr.filter(
	//         project =>    
	//           project.stack.map(
	//             (stack) => 
	//             this.state.search.includes(stack.toLowerCase())
	//           ).reduce(
	//             (prev, next) =>
	//             prev === true || next === true ? true : false
	//           )
	//       )
	//     })   
	// }
	const addProject = (project) => {
		refsArr.push(project)
	}
	const toggleDescription = (e,key) => {
		const current = activeDescription;
		if(current === key){
		  setActiveDescription(null)
		}else{
		  setActiveDescription(key)
		}
	}

	return(
		<main className="portfolio">
	    {//<input FILTER IS CURRENTLY NOT SO USEFUL... THERE'S NOT THAT MANY PROJECTS!
		   // ref={input => this.search = input}
		   // onChange={this.chooseStack} 
		///>
		}
	      {
	      	projectsArr.map(
	           (project, key) =>
	            <section 
		            className={
		              activeDescription===key
		              ? "project active"
		              : "project"
		            }
		            key={project.name} 
		            id={key} 
		            ref={ addProject }
		        >
		      		<a
		                className="project__link"
		                style={{backgroundImage: `url(${project.thumbnail})`}} 
		                href={project.link} 
		                title={
		                  props.currentLanguage === "EN" 
		                  ? project.name
		                  : props.currentLanguage === "PT" ? project.nome : project.titel
		                } 
		                rel="noopener noreferrer" 
		                target="_blank"
		            >
		            </a>
	               	<h3 className="project__title">
		               {
		     			props.currentLanguage === "EN" 
		      				? project.name
		      				: props.currentLanguage === "PT" ? project.nome : project.titel
		               } 
		                <i 
		                  role="link" 
		                  onClick={(e) => toggleDescription(e,key)}
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
	                 activeDescription===key
	                  ? "project__description project__description--open" 
	                  : "project__description"
	                }
	              >
	              
	                {
	                  props.currentLanguage === "EN" 
	                  ? project.description
	                  : props.currentLanguage === "PT" 
	                  	? project.descricao : project.Omschrijving
	                } 
	              
	              </p>
	      		</section>
	        )
	      }     
	    </main>
	)
}
export default Projects