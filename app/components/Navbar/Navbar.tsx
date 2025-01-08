import React, { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import SearchOverlay from './Search';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isSearchOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-transparent backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          {/* Logo (Text) */}
          <span className="text-3xl font-bold text-white tracking-wide">
            <span className={'glow'}>One UI</span>
          </span>

          {/* Search Button */}
          <div
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center w-1/3 bg-[rgba(255,255,255,0.1)] rounded-full shadow-md px-4 py-1 border border-gray-600 mx-auto cursor-pointer"
          >
            <div className="flex-grow text-gray-400 px-2 py-2">Press / to search</div>
          </div>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg">
                <ChevronDown
                  className="text-black"
                  style={{ width: '26px', height: '26px' }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>SearchOverlay
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;