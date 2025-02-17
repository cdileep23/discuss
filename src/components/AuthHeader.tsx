"use client"; 
import { useSession } from 'next-auth/react';
import React from 'react'
import { Button } from './ui/button'
import { signIn } from '@/app/actions/signIn'
import { signOut } from '@/app/actions/signOut'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AuthHeader = () => {
  const { data: session } = useSession(); 

  if (!session?.user) {
    return (
      <div className='flex items-center gap-4'>
        <form action={signIn}>
          <Button type='submit' variant={'outline'}>Sign In</Button>
        </form>

        <form action={signIn}>
          <Button type='submit' variant={'default'}>Sign Up</Button>
        </form>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarImage src={session.user.image || '/default-avatar.png'} />
        <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
      </Avatar>

      <form action={signOut}>
        <Button type='submit' variant={'destructive'}>Sign Out</Button>
      </form>
    </div>
  );
}

export default AuthHeader;
