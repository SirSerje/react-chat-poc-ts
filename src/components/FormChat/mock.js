import Message from '../Message';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import React from 'react';
import Avatar from 'react-avatar';

// mock was designed for swapping behavior of backend responds
export const onlineWelcome = (userInfo, input, classes, online, submitted, handleClick, handleChange, addMessage) => [
  <Message>
    <Avatar round={true} size={50} style={{paddingRight: 10}} name={'John Doe'}/>
    Our support team is online
  </Message>,
  (!submitted && <Message>
    <p>Hello, please fill your details in the form below:</p>
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('firstName', e)}
      value={userInfo.firstName}
      label="First name"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('lastName', e)}
      value={userInfo.lastName}
      label="Last name"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('email', e)}
      value={userInfo.email}
      label="Email"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('phone', e)}
      value={userInfo.phone}
      label="Phone"
    />
    <p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        submit data
      </Button>
    </p>
  </Message>),
  (submitted && <Message suggestions={[
    {name: 'Service issues', action: () =>addMessage(null, 'Service issues')},
    {name: 'Sales', action: () =>addMessage(null, 'Sales')},
    {name: 'Other', action : ()=> addMessage(null, 'Other')},
  ]}>
    <p>What do you need help with?</p>
  </Message>),
];


export const offlineWelcome = (userInfo, input, classes, online, submitted, handleClick, handleChange) => [
  <Message>Everyone's busy. Fill form for feedback</Message>,
  (!submitted && <Message>
    <p>Hello, please fill your details in the form below:</p>
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('firstName', e)}
      value={userInfo.firstName}
      label="First name"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('lastName', e)}
      value={userInfo.lastName}
      label="Last name"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('email', e)}
      value={userInfo.email}
      label="Email"
    />
    <TextField
      fullWidth
      style={{ marginBottom: 8 }}
      onChange={e => handleChange('phone', e)}
      value={userInfo.phone}
      label="Phone"
    />
    <p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        submit data
      </Button>
    </p>
  </Message>),
  (submitted && <Message>Thank you for subscription</Message>),
];
