import React, { MouseEventHandler } from 'react';
import arrowRight from '../assets/icons/arrow_right.svg'
import arrowLeft from '../assets/icons/arrow_left.svg'
import edit from '../assets/icons/edit.svg'
import deleteCourse from '../assets/icons/delete.svg'

interface ICourses {
    startDate: string
    name: string
    status: string
}


interface IStudentsTable {
    currentElements: ICourses[]
    handlePerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currentPage: number
    handlePrevPage: MouseEventHandler<HTMLButtonElement>
    elementsPerPage: number
    filteredStudents: ICourses[]
    startIndex: number
    endIndex: number
    handleNextPage: () => void
}

export const UserCoursesTable: React.FC<IStudentsTable> = ({ currentElements, handlePerPageChange, currentPage, handlePrevPage, elementsPerPage, filteredStudents, startIndex, endIndex, handleNextPage }) => {

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded mt-6'>
            <div className='flex py-4 px-5 bg-[#F5F5F5] border-b-[1px] border-[#BDBDBD] rounded-tr rounded-tl'>
                <div className='flex font-semibold w-[20%]'>
                    <h4>Дата старту</h4>
                </div>
                <div className='flex font-semibold w-[30%]'>
                    <h4>Назва групи</h4>
                </div>
                <div className='flex font-semibold'>
                    <h4>Статус</h4>
                </div>
            </div>
            {currentElements.map((courses, index) => (
                <div className='flex p-4 border-b-[1px] border-[#BDBDBD]'>
                    <h3 className='font-semibold w-[20%]'>
                        {courses.startDate}
                    </h3>
                    <h3 className='w-[30%]  text-[#3548FE] font-semibold underline'>
                        {courses.name}
                    </h3>
                    <div className={`${courses.status === 'Вибув' ? 'text-[#D32F2F] bg-[#FEE4E3]' : 'bg-[#F5F5F5]'} px-5 rounded-full w-[100px] items-center flex justify-center`}>
                        <h3>{courses.status}</h3>
                    </div>
                    {index === 0 &&
                        <div className='flex gap-[15px] w-[40%] justify-end'>
                            <img src={edit} alt='edit' />
                            <img src={deleteCourse} alt='delete' />
                        </div>
                    }
                </div>
            ))}
            <div className='flex p-4 justify-end items-center'>
                <div>
                    <label htmlFor="elementsPerPage">Студентів на сторінці</label>
                    <select id="elementsPerPage" onChange={handlePerPageChange} value={elementsPerPage}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <span className='ml-[26px]'>{`${startIndex + 1}-${endIndex + 1} of ${filteredStudents.length}`}</span>
                <div className='flex gap-10 ml-[47px]'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <img src={arrowLeft} alt='<' />
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredStudents.length / elementsPerPage)}>
                        <img src={arrowRight} alt='>' />
                    </button>
                </div>
            </div>
        </div>
    );
};
