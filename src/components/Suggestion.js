import React from 'react';
import Chip from '@material-ui/core/Chip/Chip';

const Suggestion = props => {
  const { action, children } = props;
  return <Chip color="primary" label={children} style={{ marginRight: 4 }} onClick={action} />;
};

export default Suggestion;
