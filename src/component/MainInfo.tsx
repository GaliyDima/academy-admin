import React from 'react';
import copy from '../assets/icons/copy.svg'

export const MainInfo = () => {

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded mt-5 mb-[46px] flex'>
            <div className='border-r-2'>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5] rounded-tl'>
                    <h1>ID</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5]'>
                    <h1>Прізвище</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2  font-semibold bg-[#F5F5F5]'>
                    <h1>Ім'я</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2  font-semibold bg-[#F5F5F5]'>
                    <h1>Telegram</h1>
                </div>
                <div className='p-4 w-[170px] font-semibold bg-[#F5F5F5] rounded-bl'>
                    <h1>Статус</h1>
                </div>
            </div>
            <div className='border-r-2'>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>098</h1>
                </div>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>Kyryllo</h1>
                </div>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>Kozak</h1>
                </div>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>@Kozak</h1>
                </div>
                <div className='p-4 w-[368px] font-semibold'>
                    <div className='text-[#33691E] bg-[#DCEDC8] px-5 rounded-full w-max items-center flex justify-center'>
                        <h1>Active</h1>
                    </div>
                </div>
            </div>
            <div className='border-r-2'>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5]'>
                    <h1>Пошта</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5]'>
                    <h1>Телефон</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2  font-semibold bg-[#F5F5F5]'>
                    <h1>Github</h1>
                </div>
                <div className='p-4 w-[170px] border-b-2  font-semibold bg-[#F5F5F5]'>
                    <h1>English level</h1>
                </div>
                <div className='p-4 w-[170px] font-semibold bg-[#F5F5F5]'>
                    <h1>Created</h1>
                </div>
            </div>
            <div>
                <div className='p-4 w-[368px] border-b-2 '>
                    <div className='flex gap-2'>
                        <h1>alykora@gmail.com</h1>
                        <img src={copy} alt='copy' />
                    </div>
                </div>
                <div className='p-4 w-[368px] border-b-2'>
                    <div className='flex gap-2'>
                        <h1>+380 97 667 08 08</h1>
                        <img src={copy} alt='copy' />
                    </div>
                </div>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>5678</h1>
                </div>
                <div className='p-4 w-[368px] border-b-2 '>
                    <h1>@Advanced</h1>
                </div>
                <div className='p-4 w-[368px]'>
                    <h1>22.12.2021</h1>
                </div>
            </div>
        </div>
    );
};
