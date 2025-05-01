'use client'

import {useAuth} from "src/app/hooks/useAuth";
import {useEffect} from "react";
import {redirect} from 'next/navigation'

export default function AuthGuard({children}) {
    const isLoggedIn = useAuth();
    useEffect(() => {
        console.log("isLoggedIn", isLoggedIn);
    }, [isLoggedIn])

    if (isLoggedIn == null) return <h1> Waiting </h1>
    if (isLoggedIn == false) redirect('/')

    return (
        <>
            {children}
        </>
    )
}
