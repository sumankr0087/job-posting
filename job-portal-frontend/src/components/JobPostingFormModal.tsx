import React from 'react';
import JobPostingForm from './JobPostingForm';

interface JobPostingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onJobPosted: (newJob: any) => void;
}

const JobPostingFormModal: React.FC<JobPostingFormModalProps> = ({ isOpen, onClose, onJobPosted }) => {
    if (!isOpen) return null; 

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 w-96">
                <h2 className="text-xl mb-4">Add Job Posting</h2>
                <JobPostingForm onJobPosted={onJobPosted} onClose={onClose} />
                <button onClick={onClose} className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default JobPostingFormModal;
