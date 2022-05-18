import React from 'react';
import Style from './Search.module.scss';
import flags from '../../assets/images/flags.png';

const Search = () => {
  return (
    <div>
      <div className={Style.containerLogo}>
        <img className={Style.logo} src={flags} alt='flags logo' />
      </div>
      <div className={Style.containerSearch}>
        <h1 className={Style.title}>Country Search</h1>
        <h3 className={Style.subtitle}>
          Find useful information of all countries
        </h3>
        <input
          className={Style.search}
          type='text'
          name='country'
          placeholder='Venezuela'
        />
      </div>
    </div>
  );
};

export default Search;
