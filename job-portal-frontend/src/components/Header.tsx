import React from 'react';

interface HeaderProps {
    openLoginModal: () => void;
    openSignupModal: () => void;
    isAuthenticated: boolean;
    onLogout: () => void;
    openAddJobModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openLoginModal, openSignupModal, isAuthenticated, onLogout, openAddJobModal }) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl">Job Posting Portal</h1>
            <div>
                {!isAuthenticated ? (
                    <>
                        <button 
                            onClick={openLoginModal} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Login
                        </button>
                        <button 
                            onClick={openSignupModal} 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign Up
                        </button>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={openAddJobModal}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Add Job
                        </button>
                        <button 
                            onClick={onLogout}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
