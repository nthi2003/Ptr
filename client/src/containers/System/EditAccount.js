import React, { useState } from 'react';
import { InputReadOnly, InputFormV2, Button } from '../../components';
import anonAvatar from '../../assets/anon-avatar.png'; // Corrected the typo in 'assets'

const EditAccount = () => {
    const [invalidFields, setInvalidFields] = useState([]);

    return ( 
        <div className='flex flex-col h-full items-center'>
            <h1 className='text-3xl w-full text-start font-medium py-4 border-b h-[69px] flex-none border-gray-200'>Chỉnh sửa thông tin cá nhân</h1>
            <div className='w-3/5 flex items-center justify-center flex-auto'>
                <div className='py-6 flex flex-col gap-4 w-full'>
                    <InputReadOnly direction='flex-row' label='Mã thành viên' />
                    <InputReadOnly editPhone direction='flex-row' label='Số điện thoại' />
                    <InputFormV2 invalidFields={invalidFields} setInvalidFields={setInvalidFields} direction='flex-row' label='Tên hiển thị' />
                    <InputFormV2 invalidFields={invalidFields} setInvalidFields={setInvalidFields} direction='flex-row' label='Email' />
                    <InputFormV2 invalidFields={invalidFields} setInvalidFields={setInvalidFields} direction='flex-row' label='Zalo' />
                    <InputFormV2 invalidFields={invalidFields} setInvalidFields={setInvalidFields} direction='flex-row' label='Facebook' />
                    <div className='flex items-center gap-4'>
                        <label className='w-48 flex-none' htmlFor="password">Mật khẩu</label>
                        <small className='flex-auto text-blue-500 h-12 cursor-pointer'>Đổi mật khẩu</small> {/* Corrected the tag name */}
                    </div>
                    <div className='flex items-center gap-4'>
                        <label className='w-48 flex-none' htmlFor="avatar">Ảnh đại diện</label>
                        <img src={anonAvatar} alt="avatar" className='w-28 h-28 rounded-full object-cover'/>
                    </div>
                    <Button text='Cập nhật' bgColor='bg-blue-600' textColor='text-white' />
                </div>
            </div>
        </div>
    );
};

export default EditAccount;
