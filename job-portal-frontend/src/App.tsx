import React, { useState } from 'react';
import JobPostingList from './components/JobPostingList';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import JobPostingFormModal from './components/JobPostingFormModal';
import { Job } from './types/Job';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [jobPostings, setJobPostings] = useState<Job[]>([]);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [isAddJobModalOpen, setIsAddJobModalOpen] = useState(false); 

    const handleLogin = (token: string) => {
        setIsAuthenticated(true);
        setIsLoginModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    const handleNewJobPosting = (newJob: Job) => {
        setJobPostings((prevJobs) => [...prevJobs, newJob]);
    };

    return (
        <div>
            <Header 
                openLoginModal={() => setIsLoginModalOpen(true)} 
                openSignupModal={() => setIsSignupModalOpen(true)} 
                isAuthenticated={isAuthenticated} 
                onLogout={handleLogout} 
                openAddJobModal={() => setIsAddJobModalOpen(true)} 
            />
            {isLoginModalOpen && (
                <LoginModal onClose={() => setIsLoginModalOpen(false)} onLogin={handleLogin} />
            )}
            {isSignupModalOpen && (
                <RegisterModal onClose={() => setIsSignupModalOpen(false)} />
            )}
            <JobPostingFormModal 
                isOpen={isAddJobModalOpen} 
                onClose={() => setIsAddJobModalOpen(false)} 
                onJobPosted={handleNewJobPosting} 
            />
            {isAuthenticated && (
                <>
                    <JobPostingList jobPostings={jobPostings} />
                </>
            )}
        </div>
    );
};

export default App;
