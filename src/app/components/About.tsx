"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function About() {
    const typedSequence = [
        'Software Engineer', 1000,
        'Developer', 1000,
        'Student at UC Berkeley', 1000,
        'Data Scientist', 1000,
        'Designer', 3000
    ];

    return (
        <>
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Mo Aljuboori</div>
            <div className="text-3">And I'm a <span className='typed-text'>
                <TypeAnimation
                    sequence={typedSequence}
                    speed={50}
                    repeat={Infinity}
                />
            </span>
            </div>
        </>
    );
}
