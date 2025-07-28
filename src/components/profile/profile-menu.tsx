'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  CircleUserRound,
  User,
  Settings,
  LogOut,
  ShoppingBag,
  Heart,
  CreditCard,
  Bell,
} from 'lucide-react';

interface ProfileMenuProps {
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
  };
}

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const handleMenuAction = (action: string) => {
    switch (action) {
      case 'profile':
        console.log('Navigate to profile');
        // Add your navigation logic here
        break;
      case 'courses':
        console.log('Navigate to courses');
        break;
      case 'Interested':
        console.log('Navigate to Interested');
        break;
      case 'settings':
        console.log('Navigate to settings');
        break;
      case 'logout':
        console.log('Logout user');
        // Add your logout logic here
        break;
      default:
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 rounded-full"
        >
          {user?.avatar ? (
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={user.avatar || '/placeholder.svg'}
                alt={user.name || 'User'}
              />
              <AvatarFallback>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </AvatarFallback>
            </Avatar>
          ) : (
            <CircleUserRound className="size-6 hover:text-primary transition-colors" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 mt-2" align="end" forceMount>
        {/* User Info Section */}
        {user && (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.name || 'User'}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email || 'user@example.com'}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        {/* Main Menu Items */}
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => handleMenuAction('profile')}
            className="cursor-pointer"
          >
            <User className="mr-2 size-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleMenuAction('courses')}
            className="cursor-pointer"
          >
            <ShoppingBag className="mr-2 size-4" />
            <span>My Courses</span>
            <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleMenuAction('Interested')}
            className="cursor-pointer"
          >
            <Heart className="mr-2 size-4" />
            <span>Interested</span>
            <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 size-4" />
            <span>Payment Methods</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Bell className="mr-2 size-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleMenuAction('settings')}
          className="cursor-pointer"
        >
          <Settings className="mr-2 size-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          onClick={() => handleMenuAction('logout')}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 size-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
