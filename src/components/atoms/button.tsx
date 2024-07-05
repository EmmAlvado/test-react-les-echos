import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'default' | 'inscription' | 'subscription';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'default', onClick, children }) => {
  const buttonClass = classNames('button', {
    'button--inscription': type === 'inscription',
    'button--subscription': type === 'subscription',
    'button--default': type === 'default',
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
