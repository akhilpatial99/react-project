import React from 'react'
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic goes here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    return (
        <div className='bg-[url(https://st5.depositphotos.com/90090170/75052/i/450/depositphotos_750529710-stock-photo-bstract-red-black-background-texture.jpg)] w-full'>
            <div className="max-w-3xl mx-auto p-8">
                <h1 className="text-3xl text-[#dc0cf7] font-bold mb-6 text-center">CONTACT US</h1>
                <form onSubmit={handleSubmit} className="space-y-6 bg-[#2b7cd7] p-6 shadow-md rounded-xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#3b1b1b] text-white py-2 px-4 rounded-lg hover:bg-[#a56868] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact