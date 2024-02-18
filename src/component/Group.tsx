import React, { ChangeEventHandler, useState } from 'react';
import book from '../assets/icons/book.svg'
import arrow from '../assets/icons/arrow_right.svg'
import { Input } from '../components/ui/input';
import search from '../assets/icons/search.svg'
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { groups } from '../constants';
import { GroupeTable } from './GroupTable';

interface IGroupe {
    title: string
}

export const Groupe: React.FC<IGroupe> = ({ title }) => {
    const [elementsPerPage, setElementsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const filteredGroups = groups.filter(
        (groups: { name: string; }) =>
            groups.name.toLowerCase().includes(searchTerm.toLowerCase())
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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };


    return (
        <div className='px-5 py-[27px]'>
            <div className='flex align-center gap-[15px]'>
                <img src={book} alt='student' />
                <img src={arrow} alt='>' />
                <h5>Groups</h5>
            </div>
            <h2 className='mt-4 mb-6 text-[32px]'>{title}</h2>
            <div className='flex mb-[25px]'>
                <div className={`px-4 py-[9px] font-semibold cursor-pointer ${activeTab === 'All' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                    onClick={() => handleTabClick('All')}>
                    <h3>
                        All (134)
                    </h3>
                </div>
                <div className={`px-4 py-[9px] font-semibold cursor-pointer ${activeTab === 'Open' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                    onClick={() => handleTabClick('Open')}>
                    <h3>
                        Open (12)
                    </h3>
                </div>
                <div className={`px-4 py-[9px] font-semibold cursor-pointer ${activeTab === 'Studing' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                    onClick={() => handleTabClick('Studing')}>
                    <h3>
                        Studing (4 678)
                    </h3>
                </div>
                <div className={`px-4 py-[9px] font-semibold cursor-pointer ${activeTab === 'Completed' && 'border-b-[2px] border-[#3548FE] text-[#3548FE]'}`}
                    onClick={() => handleTabClick('Completed')}>
                    <h3>
                        Completed (4 567)
                    </h3>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='relative'>
                    <img src={search} alt='search' className='absolute top-[11px] left-[15px]' />
                    <Input placeholder='Пошук по назві' className='w-[350px] border-slate-300 rounded pl-[44px]' onChange={handleSearchChange} value={searchTerm} />
                </div>
                <Button variant='destructive' className='bg-[#3548FE] rounded text-white hover:bg-slate-300'>
                    <Plus className="mr-2 h-4 w-4" /> ADD GROUP
                </Button>
            </div>
            <h4 className='font-semibold mb-4 mt-6'>Всього знайдено: 4 567</h4>
            <GroupeTable
                currentElements={currentElements}
                handlePerPageChange={handlePerPageChange}
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                elementsPerPage={elementsPerPage}
                filteredCourses={filteredGroups}
                startIndex={startIndex}
                endIndex={endIndex}
                handleNextPage={handleNextPage}
            />
        </div>

    );
};
