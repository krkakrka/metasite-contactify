import React from 'react';
import _ from 'lodash';
import defaultUserImage from './userpic.jpg';
import './ContactDetails.css';

const CONTACT_ATTRIBUTES = ['name', 'surname', 'city', 'email', 'phone'];

function ContactDetails({ contact }) {
  return (
    <div className="ContactDetails">
      <div className="imageContainer">
        <img src={defaultUserImage} alt="Contact" />
      </div>
      {CONTACT_ATTRIBUTES.map(attribute => (
        <div className="row" key={attribute}>
          <div className="attrName">{`${_.capitalize(attribute)}:`}</div>
          <div className="attrValue">{contact[attribute]}</div>
        </div>
      ))}
    </div>
  );
}

export default ContactDetails;
