import React from 'react';

const Doctors = () => {
    return (
        <div className="bg-gray-200">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-green-600">
                        We have the best equipment
                    </h2>
                    <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Our Best Doctors
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center ">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/FV9mRcV/doctor-1.jpg" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Dr. John Melborn</p>
                            <p className="text-base text-gray-400 font-normal">Prosthodontics Dentist</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/cCpxFRb/doctor-2.jpg" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Vincent Cooper</p>
                            <p className="text-base text-gray-400 font-normal">ESTETIC DENTIST</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/hYVCVxM/doctor-3.jpg" alt="photo" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                            <p className="text-base text-gray-400 font-normal">DENTAL TECHNICIAN</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doctors;