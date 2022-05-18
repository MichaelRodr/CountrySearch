import React from 'react';
import Style from './Button.module.scss';

const Button = () => {
  return (
    <div className={Style.container}>
      <div className={Style.grid}>
        <div>
          <button className={Style.button}>Continents</button>
        </div>
        <div>
          <button className={Style.button}>Language</button>
        </div>
      </div>
    </div>
  );
};

export default Button;
