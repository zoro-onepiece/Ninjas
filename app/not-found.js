"use client";

import Link from 'next/link'
import {  useEffect } from 'react';
import {  useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter(); // Initialize router


    useEffect(() => {

      const timer=  setTimeout(() => {
            router.push('/');
        }, 3000);


        return ()=>{clearTimeout(timer)}
    }, [router]);

    return (
        <div className="not-found">
            <h1>Ooops..............This is 404!</h1>
            <h2>The page cannot be found :(</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default NotFound;