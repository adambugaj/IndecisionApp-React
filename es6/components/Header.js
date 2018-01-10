import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h3>{props.aboutTitle}</h3>
      {props.aboutTitle && <h5>{props.subTitle}</h5>}
    </div>
  );
}

export default Header;
