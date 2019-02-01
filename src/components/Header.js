import React from 'react';

const Header = props => (
  <div className={'header'}>
    <b>{props.online ? 'Have a question?' : "We're out. Contact us"}</b>
    <b className={'minimize'} onClick={props.collapse}>
      _
    </b>
  </div>
);

export default Header;
