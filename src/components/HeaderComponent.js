import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component{
    render(){
        return(
        <Navbar>
            <div className="container">
                <div className="row row-header">
                  <h3>CtA - MainConversation</h3>
                     
                </div>
            </div>
        </Navbar>

                
        );
    }
}
export default Header;