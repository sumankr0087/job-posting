import React, { useState } from 'react';
import { createJobPosting } from '../utils/api';

interface JobPostingFormProps {
    onJobPosted: (newJob: any) => void;
    onClose: () => void;
}

const JobPostingForm: React.FC<JobPostingFormProps> = ({ onJobPosted, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const jobData = { title, description, requirements, salary, location };

        try {
            const newJob = await createJobPosting(jobData);
            onJobPosted(newJob.data);
            setTitle('');
            setDescription('');
            setRequirements('');
            setSalary('');
            setLocation('');
            setError('');
            onClose();
        } catch (err) {
            setError('Failed to create job posting. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Job Title"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div>
                <input
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Requirements"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div>
                <input
                    type='number'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="Salary"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div>
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                >
                    Add Job Posting
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default JobPostingForm;
