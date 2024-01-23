import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
  { name: "Trang chủ", path: 'home' },
  { name: "Cho thuê phòng trọ", path: 'cho-thue-phong-tro' },
  { name: "Nhà cho thuê", path: 'nha-cho-thue' },
  { name: "Cho thuê căn hộ", path: 'cho-thue-can-ho' },
  { name: "Cho thuê mặt bằng", path: 'cho-thue-mat-bang' },
];


const notActive = 'hover:bg-secondary2 px-4 h-full items-center flex items-center bg-secondary1'
const active = 'hover:bg-secondary2 px-4 h-full items-center flex items-center  bg-secondary2'


const Navigation = () => {
  return (
    <div className='w-screen flex justify-center h-[40px] items-center bg-secondary1 text-white'>
      <div className="w-1100 h-full flex items-center gap-3 text-sm font-medium">
        {nav?.length > 0 && nav.map((item, index) => (
          <div key={index} className='h-full flex justify-center items-center'>
            <NavLink to={item.path} className={({ isActive }) => isActive ? active : notActive }
            >
              {item.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
