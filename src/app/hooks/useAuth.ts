import {useEffect, useState} from "react";
import {checkLoggedIn} from "src/app/helpers/api/auth";

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        async function loginStatus() {
            const res = await checkLoggedIn();
            if (res.status == 200) setIsLoggedIn(true);
            else setIsLoggedIn(false);
        }

        loginStatus()
    })

    return isLoggedIn;
}
