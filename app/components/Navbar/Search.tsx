import React, { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPlaceholder, setCurrentPlaceholder] = useState('Search data...');
    const placeholders = [
        'Search data...',
        'RMS GUI',
        'InfraGUI',
        "Today's PnL",
        'Fees',
        'Exchanges in AlphaGrep',
        'My Machines',
        'Leased Lines',
        'Running Apps',
        'Need MFT data?',
        'Need HFT data?',
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % placeholders.length;
            setCurrentPlaceholder(placeholders[index]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
            <div
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-100"
                onClick={onClose}
            />
            <form
                onSubmit={handleSearchSubmit}
                className="relative flex items-center w-1/3 bg-[rgba(255,255,255,0.1)] rounded-full shadow-md px-4 py-1 border border-gray-600"
            >
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentPlaceholder}
                    className="flex-grow bg-transparent text-white placeholder-gray-400 px-2 py-2 outline-none"
                    autoFocus
                />
                <Button
                    type="submit"
                    className="px-6 py-2 bg-[rgb(221,255,0)] text-black font-semibold uppercase rounded-full hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 transition-all duration-300"
                >
                    <span className={cn(`inline text-black leading-none`)}>Search</span>
                </Button>
            </form>
        </div>
    );
};

export default SearchOverlay;