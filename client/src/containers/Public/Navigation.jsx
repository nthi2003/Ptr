import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiGetCategories } from '../../services/category';
import { formatVietnameseToString } from '../../ultils/constant'

const notActive = 'hover:bg-secondary2 px-4 h-full items-center flex items-center bg-secondary1';
const active = 'hover:bg-secondary2 px-4 h-full items-center flex items-center  bg-secondary2';

const Navigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className='w-screen flex justify-center h-[40px] items-center bg-secondary1 text-white'>
      <div className="w-3/5 h-full flex items-center text-sm font-medium">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 && categories.map(item => {
          return (
            <div key={item.code} className='h-full flex justify-center items-center'>

              <NavLink
                to={`${formatVietnameseToString(item.value)}`}
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                {item.value}
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Navigation;
