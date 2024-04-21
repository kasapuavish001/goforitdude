'use client'
import { useState } from 'react';
import { Calendar, Search } from 'react-feather';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="contain py-4 flex justify-between items-center ">
            <div className="logo">
                <p className="text-blue-600 text-base">Go For It <span className="text-orange-500 text-2xl font-medium">Dude</span></p>
            </div>
            <ul className="flex gap-10 items-center font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Destinations</li>
                <li>Reviews</li>
                <li
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={`bg-white flex items-center rounded-full py-2 px-3 shadow-md `}>
                        <input type="text" name="" id="" className={` bg-transparent ${isHovered ? 'w-80' : 'w-0'} transition-all duration-300 text-sm`} />
                        <Search className="text-rose-600" size={20} />
                    </div>
                </li>
            </ul>
            <button className="bg-gradient-to-r from-green-400 to-green-600 flex text-white items-center gap-2 py-2 px-6 rounded-2xl text-base transition-all duration-300 hover:from-green-500 hover:to-green-400 hover:scale-105">
                Book Now <Calendar size={20} className="text-white" />
            </button>



        </div>
    );
}

export default Header;
