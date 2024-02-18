import React, { useState } from 'react';
import { SideNav } from "../component/layouts/SideNav";
import book from '../assets/icons/book.svg'
import arrow from '../assets/icons/arrow_right.svg'
import shared from '../assets/icons/shared_blue.svg'
import edit from '../assets/icons/edit_blue.svg'
import { useParams } from 'react-router-dom';
import { UserCoursesTable } from '../component/UserCoursesTable';
import { userCourses, userGroups } from '../constants';
import { MainInfoCourses } from '../component/MainInfoCourses';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { UserGroupeTable } from '../component/UserGroupeTable';

export const CoursePage = () => {
    const [activeTab, setActiveTab] = useState('students');
    const [currentTab, setCurrentTab] = useState('Main');
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabClick = (tab: string) => {
        setCurrentTab(tab);
    };

    const filteredGroups = userGroups.filter(
        (userGroups: { name: string; }) =>
            userGroups.name.toLowerCase()
    );

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage - 1, filteredGroups.length - 1);

    const currentElements = filteredGroups.slice(startIndex, endIndex + 1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredGroups.length / elementsPerPage)));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setElementsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1);
    };


    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const { name } = useParams();

    return (
        <div className='flex w-full'>
            <SideNav activeTab={activeTab} onTabChange={handleTabChange} />
            <div className='px-5 py-[27px] w-full'>
                <div className='flex align-center gap-[15px]'>
                    <img src={book} alt='student' />
                    <img src={arrow} alt='>' />
                    <h5>Сourses</h5>
                    <img src={arrow} alt='>' />
                    <h5>{name}</h5>
                </div>
                <div className='w-full justify-between flex items-center mb-6'>
                    <h1 className='text-[40px] font-semibold'>{name}</h1>
                    <div className='flex gap-2 w-[150px] items-center'>
                        <img src={shared} alt='shared' width={18} height={18} />
                        <h3 className='text-[#3548FE]'>Open Course</h3>
                    </div>
                </div>
                <div className='flex mb-[25px]'>
                    <div className={`px-4 py-[9px] font-semibold cursor-pointer ${currentTab === 'Main' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                        onClick={() => handleTabClick('Main')}>
                        <h3>
                            Main info
                        </h3>
                    </div>
                    <div className={`px-4 py-[9px] font-semibold cursor-pointer ${currentTab === 'Content' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                        onClick={() => handleTabClick('Content')}>
                        <h3>
                            Content
                        </h3>
                    </div>
                    <div className={`px-4 py-[9px] font-semibold cursor-pointer ${currentTab === 'Emails' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                        onClick={() => handleTabClick('Emails')}>
                        <h3>
                            Emails
                        </h3>
                    </div>
                </div>

                <div className='w-full justify-between flex items-center mb-6'>
                    <h3 className='text-[20px] font-semibold'>Main info</h3>
                    <div className='flex gap-2 w-[150px] items-center'>
                        <img src={edit} alt='edit' width={18} height={18} />
                        <h3 className='text-[#3548FE]'>Редагувати</h3>
                    </div>
                </div>
                <MainInfoCourses />
                <div className='w-full justify-between flex items-center mb-6'>
                    <h3 className='text-[20px] font-semibold'>Groups</h3>
                    <Button variant='destructive' className='bg-[#3548FE] rounded text-white hover:bg-slate-300'>
                        <Plus className="mr-2 h-4 w-4" /> ADD GROUP
                    </Button>
                </div>
                <UserGroupeTable
                    currentElements={currentElements}
                    handlePerPageChange={handlePerPageChange}
                    currentPage={currentPage}
                    handlePrevPage={handlePrevPage}
                    elementsPerPage={elementsPerPage}
                    filteredStudents={filteredGroups}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    handleNextPage={handleNextPage}
                />
            </div>
        </div>
    );
}