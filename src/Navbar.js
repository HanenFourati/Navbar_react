import React, { Component } from 'react';
import './Navbar.css';
const theButtons = [
    {
      value: 'Home', link: "#",active : true,
     },
     {
     value: 'Services', link: "#",active : false,
     },
     {
     value: 'Contact', link: "#",active : false,
     },
  ]
 
let Button = (props) => 
 
            <li className="listdecoration"> <a href={props.button.link}  style={{color : props.button.active ? '#add8e6' : 'gray'}} className="hl1">{props.button.value
            }</a> </li>
                   
                
const Buttons = (props) =>

            props.buttonsList.map((currentButton, i) =>
            <ul  key={i}>
              <Button button={currentButton} />
            </ul>
            )
class Navbar extends Component {

                render() {
                    return (
                      <div className="Nav_bar_style"><Buttons buttonsList={theButtons} /></div>
                    );
                  }
    
 
}

export default Navbar;
