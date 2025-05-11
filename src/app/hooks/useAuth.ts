import {useEffect, useState} from "react";
import {getAccount} from "src/app/helpers/api/auth";
import {getProviderProfile} from "src/app/helpers/api/profile";

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function loginStatus() {
            const accountRes = await getAccount();
            if (accountRes.status == 200) {
                setIsLoggedIn(true);
                const data = await accountRes.json();
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
