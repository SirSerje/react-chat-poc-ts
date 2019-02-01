import TextField from '@material-ui/core/TextField/TextField';
import Fab from '@material-ui/core/Fab/Fab';
import React from 'react';

const InputTextForm = props => {
  return <div className={'input'}>
    <TextField
      fullWidth
      variant="outlined"
      style={{marginRight: 10}}
      onChange={props.onChange}
      value={props.input}
    />
    
    <div>
      <Fab onClick={props.addMessage} color="primary" aria-label="Add" className={props.classes.fab}>
        send
      </Fab>
    </div>
  </div>
};

export default InputTextForm;