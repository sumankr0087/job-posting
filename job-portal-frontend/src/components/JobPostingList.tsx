import React from 'react';

interface Job {
    id: number;
    title: string;
    description: string;
    requirements: string;
    salary: string;
    location: string;
}

interface JobPostingListProps {
    jobPostings: Job[];
}

const JobPostingList: React.FC<JobPostingListProps> = ({ jobPostings }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Job Postings</h2>
            {jobPostings.length === 0 ? (
                <p className="text-gray-500">No jobs posted yet.</p>
            ) : (
                <ul className="space-y-4">
                    {jobPostings.map((job) => (
                        <li 
                            key={job.id} 
                            className="p-4 border border-gray-300 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p className="text-gray-700">{job.description}</p>
                            <p className="text-gray-600"><strong>Requirements:</strong> {job.requirements}</p>
                            <p className="text-gray-600"><strong>Salary:</strong> {job.salary}</p>
                            <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default JobPostingList;
