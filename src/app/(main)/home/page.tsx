import Hero from 'src/app/(landing)/components/Hero'
import PopularCategories from "src/app/(landing)/components/PopularCategories";
import HowEzyTaskinWorks from "src/app/(landing)/components/HowEzyTaskinWorks";
import TopRatedProvider from "src/app/(landing)/components/TopRatedProvider";
import WhatOurUsersSay from "src/app/(landing)/components/WhatOurUsersSay";
import GetStarted from "src/app/(landing)/components/GetStarted";

export default function Landing() {
    return (
        <>
            <Hero/>
            <PopularCategories/>
            <HowEzyTaskinWorks/>
            <TopRatedProvider/>
            <WhatOurUsersSay/>
            <GetStarted/>
        </>
    );
}
