import React from 'react';
import summary from './summary.json';

class Summary extends React.Component{
	render(){
		return(
			<section className="summary">
			    <div className="summary__text">
			      { 
			        this.props.currentLanguage === "EN"
			        ?
			          summary[0].textLines.map(
			            (text) =>
			            <p key={text}>{text}</p>
			          )
			        : null
			      }
			      { 
			        this.props.currentLanguage === "PT"
			        ?
			          summary[1].textLines.map(
			            (text) =>
			            <p key={text}>{text}</p>
			          )
			        : null
			      }
			      { 
			        this.props.currentLanguage === "NL"
			        ?
			          summary[2].textLines.map(
			            (text) =>
			            <p key={text}>{text}</p>
			          )
			        : null
			      }
			      <p>
				       { 
				        this.props.currentLanguage === "EN"
				        ?
				          summary[0].articleLine
				        : null
				      }
				      { 
				        this.props.currentLanguage === "PT"
				        ?
				          summary[1].articleLine
				        : null
				      }
				      { 
				        this.props.currentLanguage === "NL"
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
				            this.props.currentLanguage === "EN"
				            ?
				              summary[0].articleCall
				            : null
				          }
				          { 
				            this.props.currentLanguage === "PT"
				            ?
				              summary[1].articleCall
				            : null
				          }
				          { 
				            this.props.currentLanguage === "NL"
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
		)
	}
}
export default Summary