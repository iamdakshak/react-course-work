import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 500,
    exit: 800
}

const modal = (props) => (
    <CSSTransition in={props.show} timeout={animationTiming}
          mountOnEnter unmountOnExit
          classNames={{
              enter: '',
              enterActive: 'ModalOpen',
              exit: '',
              exitActive: 'ModalClose'
          }} >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
    </CSSTransition>
)

export default modal;