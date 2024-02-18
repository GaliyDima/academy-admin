import React, { useState } from 'react';
import { SideNav } from "../component/layouts/SideNav";
import { Students } from '../component/Students';
import { Courses } from '../component/Courses';
import { Groupe } from '../component/Group';

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState('students');

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        if (activeTab === 'students') {
            return <Students title='Students' />
        } else if (activeTab === 'courses') {
            return <Courses title='Courses' />
        } else if (activeTab === 'groups') {
            return <Groupe title='Groups' />
        }
    };

    return (
        <div className='flex'>
            <SideNav activeTab={activeTab} onTabChange={handleTabChange} />
            <div className='flex-grow p-4'>
                {renderContent()}
            </div>
        </div>
    );
}