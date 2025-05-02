import {Inter} from "next/font/google";
import "./globals.css";
import {Suspense} from "react";
import { Metadata } from "next";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EzyTaskin",
    description: "EzyTaskin Website",
};

if (process.env.NODE_ENV === "development") {
    metadata.referrer = "no-referrer-when-downgrade";
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={inter.className}
        >
        <Suspense>
            {children}
        </Suspense>
        </body>
        </html>
    );
}
