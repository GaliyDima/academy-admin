import React from 'react';
import copy from '../assets/icons/copy.svg'

export const MainInfoCourses = () => {

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded mt-5 mb-[46px] flex'>
            <div className='border-r-2'>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5] rounded-tl'>
                    <h1>ID</h1>
                </div>
                <div className='p-4 w-[170px] font-semibold bg-[#F5F5F5]'>
                    <h1>Статус</h1>
                </div>
            </div>
            <div className='border-r-2'>
                <div className='p-4 w-[368px] border-b-2'>
                    <h1>098</h1>
                </div>
                <div className='p-4 w-[368px] font-semibold'>
                    <div className='text-[#33691E] bg-[#DCEDC8] px-5 rounded-full w-max items-center flex justify-center'>
                        <h1>Active</h1>
                    </div>
                </div>
            </div>
            <div className='border-r-2'>
                <div className='p-4 w-[170px] border-b-2 font-semibold bg-[#F5F5F5]'>
                    <h1>/?</h1>
                </div>
                <div className='p-4 w-[170px] font-semibold bg-[#F5F5F5]'>
                    <h1>?</h1>
                </div>
            </div>
            <div>
                <div className='p-4 w-[368px] border-b-2 '>
                    <h1>?</h1>
                </div>
                <div className='p-4 w-[368px]'>
                    <h1 className=' text-[#3548FE] font-semibold underline'>?</h1>
                </div>
            </div>
        </div>
    );
};
