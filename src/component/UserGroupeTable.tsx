import React, { MouseEventHandler } from 'react';
import arrowRight from '../assets/icons/arrow_right.svg'
import arrowLeft from '../assets/icons/arrow_left.svg'

interface IGroups {
    id: number
    startDate: string
    name: string
    status: string
    students: number
}


interface IGroupsTable {
    currentElements: IGroups[]
    handlePerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currentPage: number
    handlePrevPage: MouseEventHandler<HTMLButtonElement>
    elementsPerPage: number
    filteredStudents: IGroups[]
    startIndex: number
    endIndex: number
    handleNextPage: () => void
}

export const UserGroupeTable: React.FC<IGroupsTable> = ({ currentElements, handlePerPageChange, currentPage, handlePrevPage, elementsPerPage, filteredStudents, startIndex, endIndex, handleNextPage }) => {

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded mt-6'>
            <div className='flex py-4 px-5 bg-[#F5F5F5] border-b-[1px] border-[#BDBDBD] rounded-tr rounded-tl'>
                <div className='flex font-semibold w-[20%]'>
                    <h4>ID</h4>
                </div>
                <div className='flex font-semibold w-[40%]'>
                    <h4>Назва групи</h4>
                </div>
                <div className='flex font-semibold w-[20%]'>
                    <h4>Дата старту</h4>
                </div>
                <div className='flex font-semibold w-[20%]'>
                    <h4>Статус групи</h4>
                </div>
                <div className='flex font-semibold w-[20%]'>
                    <h4>Студентів</h4>
                </div>
            </div>
            {currentElements.map((courses, index) => (
                <div className='flex p-4 border-b-[1px] border-[#BDBDBD]'>
                    <h3 className='font-semibold w-[19%]'>
                        {courses.id}
                    </h3>
                    <h3 className='w-[36%] text-[#3548FE] font-semibold underline'>
                        {courses.name}
                    </h3>
                    <h3 className='font-semibold w-[18%] mr-2'>
                        {courses.startDate}
                    </h3>
                    <div className={`${courses.status === 'Йде набір' ? 'text-[#BF770C] bg-[#FFECB3]' : courses.status === 'Завершилась' ? 'bg-[#F5F5F5]' : 'text-[#1B5E20] bg-[#DCEDC8]'} px-5 rounded-full w-[150px] items-center flex justify-center w-[20%] mr-5`}>
                        <h3>{courses.status}</h3>
                    </div>
                    <h3 className='font-semibold w-[18%] mr-[10px]'>
                        {courses.students}
                    </h3>
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
