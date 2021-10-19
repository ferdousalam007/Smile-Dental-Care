import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-gray-100">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div class="max-h-96">
                        <img class="w-screen h-screen" src="https://image.freepik.com/free-photo/portrait-smiling-caucasian-man-dentist-posing-modern-dental-office_158595-7647.jpg" alt="" />
                    </div>
                    <div class="flex bg-gray-100 p-10">
                        <div class="mb-auto mt-auto max-w-lg">
                            <h1 class="text-3xl uppercase mb-3">30 Years of Experience with the skills of Dental Care.</h1>
                            <p class="font-semibold mb-5">We provide standard treatment & best medical facility in clinic.</p>
                            <p>Practicing good dental health is important to maintaining a healthy mouth, teeth and gums. It will also help your appearance and quality of life. ... Together, you can prevent many dental problems from causing a diminished quality of life and potential medical complications.</p>
                            <button class="bg-green-800 rounded-md py-3 px-7 mt-6 text-white"><Link to="/apointment" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Book an Apontment</Link></button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;