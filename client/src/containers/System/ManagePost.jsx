import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import moment from 'moment';
import { Button, UpdatePost } from '../../components';
import { apiDeletePost } from '../../services';
import Swal from 'sweetalert2';

const ManagePost = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector(state => state.post);
  const [updateData, setUpdateData] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    !dataEdit && dispatch(actions.getPostsLimitAdmin());
  }, [dataEdit, updateData]);

  useEffect(() => {
    setPosts(postOfCurrent || []);
  }, [postOfCurrent]);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) => moment(dateString, process.env.REACT_APP_FORMAT_DATE).isAfter(new Date().toDateString());

  const handleDeletePost = async (postId) => {
    try {
      const response = await apiDeletePost(postId);
      if (response?.data.err === 0) {
        setUpdateData(prev => !prev);
      } else {
        Swal.fire('Oops!', 'Xóa bài đằng thất bại', 'error');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      Swal.fire('Oops!', 'Something went wrong', 'error');
    }
  };

  const handleFilterByStatus = (statusCode) => {
    let filteredPosts = [];
    if (statusCode === '1') {
      filteredPosts = postOfCurrent?.filter(item => checkStatus(item?.overviews?.expired?.split(' ')[5]));
    } else if (statusCode === '0') {
      filteredPosts = postOfCurrent?.filter(item => !checkStatus(item?.overviews?.expired?.split(' ')[5]));
    } else {
      filteredPosts = postOfCurrent || [];
    }
    setPosts(filteredPosts);
  };

  return (
    <div className='flex flex-col gap-6 '>
      <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Quản lí tin đăng</h1>
        <select onChange={e => handleFilterByStatus(e.target.value)} className='outline-none border p-2 border-gray-200 rounded-md'>
          <option value="">Lọc theo trạng thái</option>
          <option value="1">Đang hoạt động</option>
          <option value="0">Đã hết hạn</option>
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
          {!posts.length ? <tr><td colSpan="8">No posts found</td></tr> : posts.map(item => (
            <tr className='h-16 items-center flex' key={item.id}>
              <td className='border px-2 whitespace-nowrap overflow-hidden text-ellipsis h-full flex-1 text-center items-center flex justify-center'>{item?.overviews?.code}</td>
              <td className='border px-2 whitespace-nowrap overflow-hidden text-ellipsis h-full flex-1 flex items-center  justify-center'>
                <img src={JSON.parse(item?.images?.image)[0] || ''} alt="avatar" className='w-10 h-10 object-cover rounded-md' />
              </td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{`${item?.title?.slice(0, 20)}...`}</td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.attributes?.price}</td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.overviews?.created}</td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{item?.overviews?.expired}</td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center items-center flex justify-center'>{checkStatus(item?.overviews?.expired?.split(' ')[5]) ? 'Đang hoạt động' : 'Đã hết hạn'}</td>
              <td className=' border px-2 whitespace-nowrap overflow-hidden text-ellipsis flex-1 h-full text-center  flex items-center justify-center gap-4'>
                <Button
                  text='Sửa'
                  bgColor='bg-green-600'
                  textColor='text-white'
                  onClick={() => {
                    dispatch(actions.editData(item));
                    setIsEdit(true);
                  }}
                />
                <Button
                  text='Xóa'
                  bgColor='bg-orange-600'
                  textColor='text-white'
                  onClick={() => handleDeletePost(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManagePost;
