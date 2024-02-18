import React, { ChangeEventHandler, useState } from 'react';
import book from '../assets/icons/book.svg'
import arrow from '../assets/icons/arrow_right.svg'
import { Input } from '../components/ui/input';
import search from '../assets/icons/search.svg'
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { CoursesTable } from './CoursesTable';
import { courses } from '../constants';

interface ICourses {
    title: string
}

export const Courses: React.FC<ICourses> = ({ title }) => {
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(
        (courses: { name: string; }) =>
            courses.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage - 1, filteredCourses.length - 1);

    const currentElements = filteredCourses.slice(startIndex, endIndex + 1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredCourses.length / elementsPerPage)));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setElementsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };


    return (
        <div className='px-5 py-[27px]'>
            <div className='flex align-center gap-[15px]'>
                <img src={book} alt='student' />
                <img src={arrow} alt='>' />
                <h5>Courses</h5>
            </div>
            <h2 className='mt-4 mb-6 text-[32px]'>{title}</h2>
            <div className='flex justify-between w-full'>
                <div className='relative'>
                    <img src={search} alt='search' className='absolute top-[11px] left-[15px]' />
                    <Input placeholder='Search' className='w-[350px] border-slate-300 rounded pl-[44px]' onChange={handleSearchChange} value={searchTerm} />
                </div>
                <Button variant='destructive' className='bg-[#3548FE] rounded text-white hover:bg-slate-300'>
                    <Plus className="mr-2 h-4 w-4" /> ADD COURSES
                </Button>
            </div>
            <h4 className='font-semibold mb-4 mt-6'>Всього знайдено: 4 567</h4>
            <CoursesTable
                currentElements={currentElements}
                handlePerPageChange={handlePerPageChange}
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                elementsPerPage={elementsPerPage}
                filteredCourses={filteredCourses}
                startIndex={startIndex}
                endIndex={endIndex}
                handleNextPage={handleNextPage}
            />
        </div>

    );
};
