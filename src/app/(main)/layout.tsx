import Header from "src/app/(main)/layout/Header";
import Footer from "src/app/(main)/layout/Footer";
import AuthGuard from "src/app/(main)/layout/AuthGuard";

export default function MainLayout({children}) {
    return (
        <>
            <AuthGuard>
                <Header/>
                <div className="min-h-screen flex flex-col">
                    <main className="flex-grow">
                        {children}
                    </main>

                    <Footer />
                </div>
            </AuthGuard>
        </>
    );
}
