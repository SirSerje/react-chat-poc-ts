import React from 'react';
import Button from '@material-ui/core/Button';

const InteractButton = props => (
  <div>
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.online ? 'Start Chat' : 'Email Us'}
    </Button>
  </div>
);

export default InteractButton;
