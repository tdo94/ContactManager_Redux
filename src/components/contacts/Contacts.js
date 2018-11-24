import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types'
class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts()
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.PropTypes = {
  contacts:PropTypes.array.isrequired,
  getContacts: PropTypes.func.isrequired
}

const mapStatetoProps =(state) => ({
  contacts: state.contact.contacts
})

const mapDispatchtoProps =(dispatch) => ({
  getContacts: () => dispatch({type: GET_CONTACTS})
})
export default connect(mapStatetoProps,mapDispatchtoProps)(Contacts);
