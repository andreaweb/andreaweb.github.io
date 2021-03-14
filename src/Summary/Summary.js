import React from 'react';
import summary from './summary.json';

const Summary = (props) => (
		<section className="summary">
		    <div className="summary__text">
		      { 
		        props.currentLanguage === "EN"
		        &&
		          summary[0].textLines.map(
		            (text) =>
		            <p key={text}>{text}</p>
		          )
		      }
		      { 
		        props.currentLanguage === "PT"
		        &&
		          summary[1].textLines.map(
		            (text) =>
		            <p key={text}>{text}</p>
		          )
		      }
		      { 
		        props.currentLanguage === "NL"
		        &&
		          summary[2].textLines.map(
		            (text) =>
		            <p key={text}>{text}</p>
		          )
		      }
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

export default Summary