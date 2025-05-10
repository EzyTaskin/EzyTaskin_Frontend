import {useEffect, useState} from "react";
import {getProfile} from "src/app/helpers/api/auth";

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function loginStatus() {
            const res = await getProfile();
            if (res.status == 200) {
                setIsLoggedIn(true);
                const data = await res.json();
                setUserId(data.id)
            } else setIsLoggedIn(false);
        }

        loginStatus()
    })

    return {
        isLoggedIn,
        userId
    };
}
