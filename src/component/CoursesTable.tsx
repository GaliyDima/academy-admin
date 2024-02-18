import React, { MouseEventHandler } from 'react';
import indicator from '../assets/icons/indicator.svg'
import shared from '../assets/icons/shared.svg'
import arrowRight from '../assets/icons/arrow_right.svg'
import arrowLeft from '../assets/icons/arrow_left.svg'
import { useNavigate } from 'react-router-dom';

interface ICourses {
    id: number
    name: string
    status: string
    open: number
    studying: number
    completed: number
}


interface ICoursesTable {
    currentElements: ICourses[]
    handlePerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currentPage: number
    handlePrevPage: MouseEventHandler<HTMLButtonElement>
    elementsPerPage: number
    filteredCourses: ICourses[]
    startIndex: number
    endIndex: number
    handleNextPage: () => void
}

export const CoursesTable: React.FC<ICoursesTable> = ({ currentElements, handlePerPageChange, currentPage, handlePrevPage, elementsPerPage, filteredCourses, startIndex, endIndex, handleNextPage }) => {

    const navigate = useNavigate()

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded'>
            <div className='flex py-4 px-5 bg-[#F5F5F5] border-b-[1px] border-[#BDBDBD] justify-between rounded-tr rounded-tl'>
                <div className='flex gap-[7px] w-[4%] flex justify-center font-semibold	'>
                    <h4>ID</h4>
                </div>
                <div className='flex gap-[7px] w-[16%] font-semibold'>
                    <h4>Назва курсу</h4>
                    <img src={indicator} />
                </div>
                <div className='w-[10%] ml-[20px] flex justify-end font-semibold'>
                    <h4>Статус</h4>
                </div>
                <div className='w-[13%] flex justify-center font-semibold'>
                    <h4>Open</h4>
                </div>
                <div className='w-[13%] font-semibold'>
                    <h4>Studying</h4>
                </div>
                <div className='w-[18%] font-semibold'>
                    <h4>Completed</h4>
                </div>
            </div>
            {currentElements.map((course) => (
                <div key={course.id} className='flex p-4 justify-between border-b-[1px] border-[#BDBDBD] cursor-pointer' onClick={() => {
                    navigate(`/course/${encodeURIComponent(course.name)}`);
                }}>
                    <h3 className='w-[4%] flex justify-center'>{course.id}</h3>
                    <h3 className='w-[20%] text-[#3548FE] font-semibold underline'>{course.name}</h3>
                    <div className={`${course.status === 'Active' ? 'text-[#33691E] bg-[#DCEDC8]' : 'text-[#D32F2F] bg-[#FEE4E3]'} px-5 rounded-full w-[100px] items-center flex justify-center`}>
                        <h3>{course.status}</h3>
                    </div>
                    <h3 className='w-[10%]'>{course.open}</h3>
                    <h3 className='w-[10%]'>{course.studying}</h3>
                    <h3 className='w-[10%]'>{course.completed}</h3>
                    <img src={shared} alt='shared' />
                </div>
            ))}
            <div className='flex p-4 justify-end items-center'>
                <div>
                    <label htmlFor="elementsPerPage">Рядків на сторінці</label>
                    <select id="elementsPerPage" onChange={handlePerPageChange} value={elementsPerPage}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <span className='ml-[26px]'>{`${startIndex + 1}-${endIndex + 1} of ${filteredCourses.length}`}</span>
                <div className='flex gap-10 ml-[47px]'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <img src={arrowLeft} alt='<' />
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredCourses.length / elementsPerPage)}>
                        <img src={arrowRight} alt='>' />
                    </button>
                </div>
            </div>
        </div>
    );
};
