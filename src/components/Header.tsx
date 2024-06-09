import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-black p-4 flex justify-between items-center">
            <div className="text-red-600 text-3xl font-bold">Similar Finder</div>
            <nav className="flex space-x-4">
                <a href="#" className="text-white">TV Shows</a>
                <a href="#" className="text-white">Movies</a>
            </nav>
        </header>
    );
};

export default Header;
