"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button'
import UserAvatar from './UserAvatar'

type Props = {
    user: Pick<User, 'name' | 'email' | 'image'>
}

function UserAccountNav({user}: Props) {
  return (
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar  user={user}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 border p-2 rounded' align='end'>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center text-red-800 cursor-pointer"  onClick={(e) => { 
            e.preventDefault();
            signOut().catch(console.error)
        }}> Sign Out <LogOut className='w-4 h-4 ml-2' />
       </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default UserAccountNav