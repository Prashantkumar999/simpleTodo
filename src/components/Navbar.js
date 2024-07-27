import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-purple-700 text-white font-semibold'>
            <ul className='flex justify-between items-center mx-10 py-5'>
                <li className='text-2xl'>MyTodos</li>
                <li>About Me</li>
            </ul>
        </nav>
    );
}

export default Navbar;
