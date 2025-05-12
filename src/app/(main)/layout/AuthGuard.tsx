'use client'

import {usePathname} from 'next/navigation';
import useAuth from 'src/app/hooks/useAuth';
import {redirect} from 'next/navigation';

export default function AuthGuard({children}) {
    const {isLoggedIn} = useAuth();
    const pathname = usePathname();

    const protectedPaths = ['/post', '/profile'];

    const requiresAuth = protectedPaths.some(path => pathname.startsWith(path));

    if (isLoggedIn == null) return <h1> Waiting </h1>;

    if (isLoggedIn === false && requiresAuth) {
        redirect('/Account/Login');
    }

    return <>{children}</>;
}
