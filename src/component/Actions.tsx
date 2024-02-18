import React, { ChangeEventHandler, useState } from 'react';
import search from '../assets/icons/search.svg'
import { Plus } from "lucide-react"
import { Input } from '../components/ui/input'
import { DatePicker } from '../components/ui/dataPicker'
import { Button } from '../components/ui/button';
import arrow from '../assets/icons/arrow_outlined.svg'

interface IActions {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string | number | readonly string[] | undefined
}

export const Actions: React.FC<IActions> = ({ onChange, value }) => {

    return (
        <div className='flex mb-[24px] justify-between'>
            <div className='relative'>
                <img src={search} alt='search' className='absolute top-[11px] left-[15px]' />
                <Input placeholder='Name, email...' className='border-slate-300 rounded pl-[44px]' onChange={onChange} value={value} />
            </div>
            <div className='flex py-2 px-4 justify-between items-center border-[1px] border-slate-300 rounded w-[200px] ml-[24px] mr-[59px]'>
                <h3>ALL COURSES</h3>
                <img src={arrow} alt='arrow' />
            </div>
            <DatePicker title='Дата від' />
            <DatePicker title='Дата до' className='ml-2 mr-4' />
            <Button variant='destructive' className='bg-black rounded text-white hover:bg-slate-300'>
                <Plus className="mr-2 h-4 w-4" /> Login with Email
            </Button>
        </div>
    );
};
