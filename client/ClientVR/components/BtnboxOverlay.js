import React from 'react';
import exitIcon from '../static_assets/icons/exit.png';

// Gets props via the DomOverlayModule and uses those to render content
const BtnboxOverlay = (props) => {
  return (
    <div className='overlay'>
      <div className='btn-container-a'>
        <div className='btn-a' onClick={ () => props.handleClick('exitVR button') }>

        </div>
      </div>
      <div className='btn-container-b'>
        <div className='btn-b' onClick={ () => props.handleClick('menu button') }>
          <i className="fa fa-lg fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default BtnboxOverlay;
