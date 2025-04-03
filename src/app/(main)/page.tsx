import Hero from 'src/app/(main)/components/Hero'
import PopularCategories from "src/app/(main)/components/PopularCategories";
import HowEzyTaskinWorks from "src/app/(main)/components/HowEzyTaskinWorks";
import TopRatedProvider from "src/app/(main)/components/TopRatedProvider";
import WhatOurUsersSay from "src/app/(main)/components/WhatOurUsersSay";
import GetStarted from "src/app/(main)/components/GetStarted";

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
