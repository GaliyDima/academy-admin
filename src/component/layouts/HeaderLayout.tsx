import { Outlet } from 'react-router-dom';
import menu from '../../assets/icons/burger_menu.svg'
import { Avatar, AvatarFallback } from "../../components/ui/avatar"

export const HeaderLayout = () => {
    return (
        <>
            <div className='h-16 bg-black py-5 px-5 flex justify-between items-center'>
                <div className='flex gap-x-8'>
                    <img src={menu} alt='menu' />
                    <h2 className='text-white font-semibold'>ADMNK</h2>
                </div>
                <Avatar className='bg-white'>
                    <AvatarFallback className='text-base'>CK</AvatarFallback>
                </Avatar>
            </div>
            <Outlet />
        </>
    );
};