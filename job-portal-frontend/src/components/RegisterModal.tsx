import React, { useState } from 'react';
import axios from 'axios';

interface RegisterModalProps {
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register/', {
                username,
                password,
                email,
            });
            onClose(); 
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 mb-4 w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 mb-4 w-full"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 mb-4 w-full"
                        required
                    />
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button 
                        type="submit" 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Register
                    </button>
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="text-gray-600 hover:underline mt-2 block"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
