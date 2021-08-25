import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Footer from './FooterComponent';



class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            isFooter :false
        
        }
        this.toogleFooter = this.toogleFooter.bind(this);  
        this.onClose = this.onClose.bind(this);
    }

    onClose(value){
        this.setState({
            isFooter: value
        });
        
    }
   

    toogleFooter(){
        this.setState({
            isFooter: true
        });

    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row row-view">
                <div className="col-12 col-sm-6 content">
                <h3>A wonderful serenity has taken possession</h3>
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet moments</p>
                <Button className="btn" outline onClick={this.toogleFooter}>Link Button</Button>
                </div>
                <img className="col-12 col-sm-6 mt-1" src="./assets/images/lack.jpg"></img>
            </div>
            { this.state.isFooter && <Footer parentCallback = {this.onClose}/>}

            </div>

        );
    }
}
export default Main;