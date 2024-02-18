import React, { useState } from 'react';
import { SideNav } from "../component/layouts/SideNav";
import students from '../assets/icons/studets.svg'
import arrow from '../assets/icons/arrow_right.svg'
import { useParams } from 'react-router-dom';
import { MainInfo } from '../component/MainInfo';
import { UserCoursesTable } from '../component/UserCoursesTable';
import { userCourses } from '../constants';

export const UserPage = () => {
    const [activeTab, setActiveTab] = useState('students');
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredGroups = userCourses.filter(
        (groups: { name: string; }) =>
            groups.name.toLowerCase()
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
                <div className='flex align-center gap-[15px] mb-[13p]'>
                    <img src={students} alt='student' />
                    <img src={arrow} alt='>' />
                    <h5>{name}</h5>
                </div>
                <h1 className='text-[40px] font-semibold'>{name}</h1>
                <div className='w-full border-b-2 pb-2 w-full'>
                    <h3 className='text-5 font-semibold'>Main info</h3>
                </div>
                <MainInfo />
                <h3 className='text-5 font-semibold'>Courses</h3>
                <UserCoursesTable
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