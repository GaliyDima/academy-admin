import React, { MouseEventHandler } from 'react';
import shared from '../assets/icons/shared.svg'
import arrowRight from '../assets/icons/arrow_right.svg'
import arrowLeft from '../assets/icons/arrow_left.svg'

interface IGrops {
    id: number;
    name: string;
    startDate: string;
    status: string;
    students: number;
}


interface IGroupseTable {
    currentElements: IGrops[]
    handlePerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currentPage: number
    handlePrevPage: MouseEventHandler<HTMLButtonElement>
    elementsPerPage: number
    filteredCourses: IGrops[]
    startIndex: number
    endIndex: number
    handleNextPage: () => void
}

export const GroupeTable: React.FC<IGroupseTable> = ({ currentElements, handlePerPageChange, currentPage, handlePrevPage, elementsPerPage, filteredCourses, startIndex, endIndex, handleNextPage }) => {

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded'>
            <div className='flex py-4 px-5 bg-[#F5F5F5] border-b-[1px] border-[#BDBDBD] justify-between rounded-tr rounded-tl'>
                <div className='flex gap-[7px] w-[4%] flex justify-center font-semibold	'>
                    <h4>ID</h4>
                </div>
                <div className='flex w-[328px] ml-[13px] font-semibold'>
                    <h4>Назва групи</h4>
                </div>
                <div className='mr-[30px] flex font-semibold'>
                    <h4>Дата старту</h4>
                </div>
                <div className='mr-[15px] flex justify-center font-semibold'>
                    <h4>Статус групи</h4>
                </div>
                <div className='mr-[15px] font-semibold'>
                    <h4>Студентів</h4>
                </div>
            </div>
            {currentElements.map((groupe) => (
                <div key={groupe.id} className='flex p-4 justify-between border-b-[1px] border-[#BDBDBD]'>
                    <h3 className='w-[4%] flex justify-center'>{groupe.id}</h3>
                    <h3 className='w-[328px] text-[#3548FE] font-semibold underline'>{groupe.name}</h3>
                    <div>
                        <h3>
                            {groupe.startDate}
                        </h3>
                    </div>
                    <div className={`${groupe.status === 'Навчається' ? 'text-[#33691E] bg-[#DCEDC8]' : groupe.status === 'Завершилась' ? 'bg-[#F5F5F5]' : 'text-[#BF770C] bg-[#FFECB3]'} ml-[20px] px-5 rounded-full h-[30px] w-[120px] items-center flex justify-center`}>
                        <h3>{groupe.status}</h3>
                    </div>
                    <div className='w-[10%] '>
                        <h3>{groupe.students}</h3>
                    </div>
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
