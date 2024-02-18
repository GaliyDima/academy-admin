import React, { MouseEventHandler } from 'react';
import indicator from '../assets/icons/indicator.svg'
import options from '../assets/icons/options.svg'
import arrowRight from '../assets/icons/arrow_right.svg'
import arrowLeft from '../assets/icons/arrow_left.svg'
import { useNavigate } from 'react-router-dom';

interface IStudents {
    id: number;
    name: string;
    email: string;
    status: string;
    progress: string;
    courses: number;
}


interface IStudentsTable {
    currentElements: IStudents[]
    handlePerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    currentPage: number
    handlePrevPage: MouseEventHandler<HTMLButtonElement>
    elementsPerPage: number
    filteredStudents: IStudents[]
    startIndex: number
    endIndex: number
    handleNextPage: () => void
}

export const StudentsTable: React.FC<IStudentsTable> = ({ currentElements, handlePerPageChange, currentPage, handlePrevPage, elementsPerPage, filteredStudents, startIndex, endIndex, handleNextPage }) => {
    const navigate = useNavigate();

    return (
        <div className='border-[1.5px] border-[#BDBDBD] rounded'>
            <div className='flex py-4 px-5 bg-[#F5F5F5] border-b-[1px] border-[#BDBDBD] justify-between rounded-tr rounded-tl'>
                <div className='flex gap-[7px]'>
                    <h4>ID</h4>
                    <img src={indicator} />
                </div>
                <div>
                    <h4>All (8 765)</h4>
                </div>
                <div>
                    <h4>Active (1 267)</h4>
                </div>
                <div>
                    <h4>Completed (4 678)</h4>
                </div>
                <div className='flex gap-[7px]'>
                    <h4>Full name</h4>
                    <img src={indicator} />
                </div>
                <div className='flex gap-[7px]'>
                    <h4>Email</h4>
                    <img src={indicator} />
                </div>
                <div>
                    <h4>Status</h4>
                </div>
                <div>
                    <h4>Courses</h4>
                </div>
                <div>
                    <h4>Progress</h4>
                </div>
            </div>
            {currentElements.map((student) => (
                <div key={student.id} className='flex p-4 justify-between border-b-[1px] border-[#BDBDBD] cursor-pointer' onClick={() => {
                    navigate(`/user/${encodeURIComponent(student.name)}`);
                }}>
                    <h3 className='w-[4%] flex justify-center'>{student.id}</h3>
                    <h3 className='w-[20%]'>{student.name}</h3>
                    <h3 className='w-[20%]'>{student.email}</h3>
                    <div className={`${student.status === 'Active' ? 'text-[#33691E] bg-[#DCEDC8]' : 'text-[#D32F2F] bg-[#FEE4E3]'} px-5 rounded-full w-[100px] items-center flex justify-center`}>
                        <h3>{student.status}</h3>
                    </div>
                    <h3>{student.courses}</h3>
                    <h3>{student.progress}%</h3>
                    <img src={options} alt='options' />
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
