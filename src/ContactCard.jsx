import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./ContactCard.css";

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            mobile : this.props.mobile,
            work: this.props.work,
            email : this.props.email
        }
    }
    render(){
        return (
            <div id = "content">
                <h2 id = "contact-name">Contact-Name: <br></br>{this.state.name}</h2>
                <h2 id = "mobile">Mobile-Number: <br></br>{this.state.mobile}</h2>
                <h2 id = "work">Work-Number: <br></br>{this.state.work}</h2>
                <h2 id = "email">Email: <br></br>{this.state.email}</h2>
            </div>
        );
    }
}
ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobile: PropTypes.number.isRequired,
    work: PropTypes.number,
    email: PropTypes.string.isRequired
}
export default ContactCard;