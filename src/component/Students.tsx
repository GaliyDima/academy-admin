import React, { useState } from 'react';
import { students } from '../constants';
import student from '../assets/icons/studets.svg'
import { Actions } from './Actions';
import { StudentsTable } from './StudentsTable';

interface IStudents {
    title: string
}

export const Students: React.FC<IStudents> = ({ title }) => {
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = students.filter(
        (student: { name: string; email: string; }) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage - 1, filteredStudents.length - 1);

    const currentElements = filteredStudents.slice(startIndex, endIndex + 1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredStudents.length / elementsPerPage)));
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
            <img src={student} alt='student' />
            <h2 className='mt-4 text-[32px]'>{title}</h2>
            <div className='h-px border-b-2 mt-[66px] mb-[47px]' />
            <Actions value={searchTerm} onChange={handleSearchChange} />
            <StudentsTable
                currentElements={currentElements}
                handlePerPageChange={handlePerPageChange}
                currentPage={currentPage} handlePrevPage={handlePrevPage}
                elementsPerPage={elementsPerPage}
                filteredStudents={filteredStudents}
                startIndex={startIndex}
                endIndex={endIndex}
                handleNextPage={handleNextPage}
            />
        </div>

    );
};
