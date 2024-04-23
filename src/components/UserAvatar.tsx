import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { User } from 'next-auth'
import React from 'react'

type Props = {
    user: Pick<User, 'name'| 'image' >
}

export default function UserAvatar({user}: Props) {
  return (
    <Avatar>
        {user.image
        ? (<AvatarImage src={user.image} alt="Profile Image"/>)
        : (<AvatarFallback>{user.name}</AvatarFallback>) 
        }
    </Avatar>
  )
}