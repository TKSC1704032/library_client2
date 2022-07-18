import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
export default function InvisibleAuthPage() {
  const {auth}=useAuth();
  return(
    <>
      {auth?(<Navigate to='/' />):(<Outlet/>)}
    </>
  )
}