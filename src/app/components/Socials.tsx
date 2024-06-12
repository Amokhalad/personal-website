"use client";
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';


const socialsData = [
    { name: "Instagram", url: "https://instagram.com/mokhaladdd", icon: <FaInstagram />, color: "btn-danger" },
    { name: "GitHub", url: "https://github.com/Amokhalad", icon: <FaGithub />, color: "btn-secondary" },
    { name: "LinkedIn", url: "https://linkedin.com/in/mokhalad-aljuboori", icon: <FaLinkedinIn />, color: "btn-primary" },
    { name: "Email", url: "mailto:mokhalad@berkeley.edu", icon: <FaEnvelope />, color: "btn-warning" }
];

const Socials = () => {

    return (
        <div className="d-flex justify-content-center align-items-center gap-2 p-6 mt-6">
            {socialsData.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    className={`btn ${social.color} d-inline-flex align-items-center`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {social.icon}
                    <span className="ms-2">{social.name}</span>
                </a>
            ))}
        </div>
    );
};

export default Socials;
