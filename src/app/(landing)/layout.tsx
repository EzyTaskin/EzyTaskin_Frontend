import Header from 'src/app/(landing)/layout/Header';
import Footer from 'src/app/(landing)/layout/Footer'

export default function LandingLayout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
