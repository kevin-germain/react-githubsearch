import React, { useEffect } from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Message({ message, visible, onTimeout }) {
  if (!visible) {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="message">
      <MessageSUI>{message}</MessageSUI>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onTimeout: PropTypes.func.isRequired,
};
