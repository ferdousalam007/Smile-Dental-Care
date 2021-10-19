import React from 'react';

const Apontment = () => {
    return (
        <div className="px-8">
            <form action="" class="form bg-white p-6 my-10 relative">

                
                <h3 class="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
                <p class="text-gray-600"> To help you choose your property</p>
                <div class="flex space-x-5 mt-3">
                    <input type="text" name="" id="" placeholder="Your Name" class="border p-2  w-1/2"/>
                    <input type="tel" name="" id="" placeholder="Your Number" class="border p-2 w-1/2" />
                </div>
                <input type="email" name="" id="" placeholder="Your Email" class="border p-2 w-full mt-3" />
                <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about your problem" class="border p-2 mt-3 w-full"></textarea>
                <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
                <div class="flex items-baseline space-x-2 mt-2">
                    <input type="checkbox" name="" id="" class="inline-block"/>
                    <p class ="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                </div>
                <input type="submit" value="Submit" class="w-full mt-6 bg-green-800 hover:bg-green-500 text-white font-semibold p-3" />

            </form>
        </div>
    );
};

export default Apontment;