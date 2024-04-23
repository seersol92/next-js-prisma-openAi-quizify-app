import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation';
import { title } from 'process';
import React from 'react'

type Props = {}

export const metadata = {
    title: 'Quizify | Dashboard'
}
async function dashboard({}: Props) {
  const session = await getAuthSession();
  if(!session?.user) {
    return redirect('/');
  }
  return (
    <div>Dashboard</div>
  )
}

export default dashboard