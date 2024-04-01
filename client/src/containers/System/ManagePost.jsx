import React from 'react'

const ManagePost = () => {
  return (
    <div >
      <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
      <h1 className='text-3xl font-medium '>Quản lí tin đăng</h1>
      <select className='outline-none border p-2 border-gray-200 rounded-md'>
        <option value="">Lọc theo trạng thái</option>
      </select>
      </div>
      <table class="w-full table-auto">
  <thead>
    <tr>
      <th>Mã tin</th>
      <th>Ảnh đại diện</th>
      <th>Giá</th>
      <th>Ngày bắt đầu</th>
      <th>Ngày hết hạn</th>
      <th>Trạng thái</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>

  </tbody>
</table>
    </div>
  )
}

export default ManagePost
