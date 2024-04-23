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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar  user={user}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-white border p-2 rounded' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center text-red-800 cursor-pointer"  onClick={(e) => { 
            e.preventDefault();
            signOut().catch(console.error)
        }}> Sign Out <LogOut className='w-4 h-4 ml-2' />
       </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav