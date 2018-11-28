import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
const theButtons = [
    {
      value: 'Home', link: "/",active : true, page: function() { return <h2 style={{color : 'white'}} >Page d'accueil</h2> }
     },
     {
     value: 'Services', link: "/service",active : false, page: function() { return <div>
      <Link to="/services/b2b">B2B</Link>
      <Link to="/services/b2c">B2C</Link>
      <div>
        <Route path="/service/b2b" render={() => 'Business 2 Business'} />
        <Route path="/service/b2c" render={() => 'Business 2 Customer'} />
      </div>
    </div> }
     },
     {
     value: 'Contact', link: "/contact",active : false,  page: function() { return   <h2 style={{color : 'white'}}>Contact Us on test@test.com</h2> }
     },
  ]

  //style={{color : props.button.active ? '#add8e6' : 'gray'}}
  
let Button = (props) => 
            <li className="listdecoration">
             <Link to={props.button.link}   className="hl1">{props.button.value
            }</Link> 
            <Route exact path={props.button.link} component={props.button.page} /></li>

                   
                
const Buttons = (props) =>

            props.buttonsList.map((currentButton, i) =>
            <ul  key={i}>
              <Button button={currentButton} />
            </ul>
            )
class Navbar extends Component {

                render() {
                    return (
                      <div className="Nav_bar_style"><BrowserRouter>
                       <Buttons buttonsList={theButtons} /></BrowserRouter>
</div>
                    );
                  }
    
 
}

export default Navbar;
