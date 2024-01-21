import React from "react";
import { InputForm , Button } from '../../components'

const Login = () =>
{
    return (
        <div className="bg-white mw-600 p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Đăng Nhập</h3>
            <div className="w-full flex flex-col gap-5 ">
                <InputForm label={'SỐ ĐIỆN THOẠI'} />
                <InputForm label={'Mật Khẩu'} />
                <Button
               text = 'Đăng nhập'
               bgColor='bg-secondary1'
               textColor='text-white'
               fullWidth
            />
            </div>
            <div className="mt-7 flex items-center justify-between">
                 <small className="text-[blue] hover:text-[red]">Bạn quên mật khẩu</small>
                 <small className="text-[blue] hover:text-[red]">Tạo mật khẩu mới</small>
            </div>
           
        </div>
    )
}

export default Login