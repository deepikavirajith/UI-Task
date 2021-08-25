import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Footer extends Component {
   
    constructor(props){
        super(props);
        
    }

    closeFooter = (event) => {
        this.props.parentCallback(false);

    }

    
    render(){
        return(
        <div className="footer">
            <div className="container-fluid">
                <div className ="row justify-content-center">
                    <div className="col-12 col-sm-4">
                    <h5>Contact</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
                      <i className="fa fa-phone fa-lg"></i> : +852 1234 5678<br />
                      <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br />
                      <i className="fa fa-envelope fa-lg"></i> <a href="mailto:Lakshmi.dodda@pollub.edu.pl">Lakshmi.dodda@pollub.edu.pl</a>
                    </address>   
                    </div>
                <div className="col-12 col-sm-4 m-1">
                <Button type="submit" className="float-right" onClick={this.closeFooter}> <i className="fa fa-close fa-lg"></i></Button>
                </div>
            </div>
            </div>
            </div>
        );
    }
    
    
}
export default Footer;