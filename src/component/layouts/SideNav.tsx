import React, { useState } from 'react';
import courses from '../../assets/icons/courses.svg';
import groupe from '../../assets/icons/groupe.svg';
import arrow from '../../assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';

interface ISideNav {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const SideNav: React.FC<ISideNav> = ({ activeTab, onTabChange }) => {
    const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0);

    const navigate = useNavigate();

    const handleCoursesClick = () => {
        setIsCoursesExpanded(!isCoursesExpanded);
        setArrowRotation(arrowRotation + 180);
    };

    return (
        <div className='border-r-2 w-[256px]' onClick={() => { }}>
            <div className={`flex gap-x-[33px] py-[17px] px-[33px] cursor-pointer ${activeTab === 'students' ? 'bg-gray-200' : ''}`} onClick={() => { onTabChange('students'); navigate('/home') }}>
                <img src={groupe} alt='groupe' />
                <h3>Students</h3>
            </div>
            <div className={`flex flex-col py-[17px] pl-[15px] cursor-pointer`} onClick={() => { handleCoursesClick(); navigate('/home') }}>
                <div className='flex items-center'>
                    <img src={arrow} alt='arrow' style={{ transform: `rotate(${arrowRotation}deg)` }} />
                    <img src={courses} alt='courses' className='mr-[33px] ml-[10px]' />
                    <h3>Courses</h3>
                </div>
            </div>
            {isCoursesExpanded && (
                <div>
                    <p className={`py-[8px] pl-[88px] cursor-pointer ${activeTab === 'courses' ? 'bg-gray-200' : ''}`} onClick={() => { onTabChange('courses'); navigate('/home') }}>Courses</p>
                    <p className={`py-[8px] pl-[88px] cursor-pointer ${activeTab === 'groups' ? 'bg-gray-200' : ''}`} onClick={() => { onTabChange('groups'); navigate('/home') }}>Groups</p>
                </div>
            )}
        </div>
    );
};
