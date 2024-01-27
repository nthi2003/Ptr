import React, { memo } from 'react';
import { createSearchParams, useNavigate} from "react-router-dom";

const PageNumber = ({number}) => {
    const navigate = useNavigate()

    const handleChangePage = () => {
        navigate({
            pathname: "/",
            search: createSearchParams({
                page: number
            }).toString()
        });
    }
  return (
    <div className='px-5 py-3 bg-white hover:bg-gray-300  rounded-md cursor-pointer'
    onClick={handleChangePage}>
        {number}
    </div>
  );
};

export default memo(PageNumber); 
