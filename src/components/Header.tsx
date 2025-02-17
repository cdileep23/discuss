import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { signIn } from '@/app/actions/signIn'
import { signOut } from '@/app/actions/signOut'
import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AuthHeader from './AuthHeader'

const Header =  () => {


  return (
    <div className='flex items-center justify-between m-4'>
      <div><h1 className='font-bold text-xl'>Discuss</h1></div>
      <div>
        <Input type="text" placeholder='search post'/>
      </div>

      <div>
        <AuthHeader/>
      </div>
    </div>
  )
}

export default Header;
