import React from 'react';
import { Link } from 'react-router-dom';
import StyledSideBar from '@styles/styledSideBar';
import { assets } from '@constants/assets';

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className='top-section'>
        <img src={assets.logo} alt="logo" />
      </div>
      <div className='bottom-section'>
      <p>Navigation</p>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/products'>
            <li>Products</li>
          </Link>
          <Link to='/orders'>
            <li>Orders</li>
          </Link>
          <Link to='/customers'>
            <li>Customers</li>
          </Link>
          <Link to='/settings'>
            <li>Settings</li>
          </Link>
        </ul>
      </div>
    </StyledSideBar>
  );
}

export default SideBar;