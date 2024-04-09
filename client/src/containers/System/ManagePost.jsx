import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import moment from 'moment';
import { Button , UpdatePost } from '../../components';

const ManagePost = () => {
  const dispatch = useDispatch(); 
  const [isEdit, setIsEdit] = useState(false);

  const { postOfCurrent , dataEdit } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);
  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString());

  return (
    <div className='flex flex-col gap-6 '>
      <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Quản lí tin đăng</h1>
        <select className='outline-none border p-2 border-gray-200 rounded-md'>
          <option value="">Lọc theo trạng thái</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className='flex w-full bg-blue-100'>
            <th className='border p-2 flex-1'>Mã tin</th>
            <th className='border p-2 flex-1'>Ảnh đại diện</th>
            <th className='border p-2 flex-1'>Tiêu đề</th>
            <th className='border p-2 flex-1'>Giá</th>
            <th className='border p-2 flex-1'>Ngày bắt đầu</th>
            <th className='border p-2 flex-1'>Ngày hết hạn</th>
            <th className='border p-2 flex-1'>Trạng thái</th>
            <th className='border p-2 flex-1'>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {!postOfCurrent ? <tr>
            <td>dasda</td>
          </tr>
            : postOfCurrent?.map(item => {
              return (
                <tr className='h-16 items-center flex' key={item.id}>
                  <td className='border px-2 whitespace-nowrap overflow-hidden text-ellipsis h-full flex-1 text-center items-center flex justify-center'>{item?.overviews?.code}</td>
                  <td className='border px-2 whitespace-nowrap overflow-hidden text-ellipsis h-full flex-1 flex items-center  justify-center'>
                    <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar" className='w-10 h-10 object-cover rounded-md' />
                  </td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{`${item?.title?.slice(0,20)}...`}</td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.attributes?.price}</td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.overviews?.created}</td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.overviews?.expired}</td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{checkStatus(item?.overviews?.expired?.split( ' ' )[5]) ? 'Đang hoạt động' : 'Đã hết hạn'}</td>
                  <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center  flex items-center justify-center gap-4'>
                    <Button 
                      text='Sửa'
                      bgColor='bg-green-600'
                      textColor='text-white'
                      onClick={() => {
                        dispatch(actions.editData(item))
                        setIsEdit(true);
                      }}
                    />
                    <Button 
                      text='Xóa'
                      bgColor='bg-orange-600'
                      textColor='text-white'
                     
                    />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {isEdit && <UpdatePost  setIsEdit={setIsEdit} />} {/* Changed 'dadaEdit' to 'dataEdit' */}
    </div>
  );
};

export default ManagePost;
