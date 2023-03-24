import './globals.css'
import React from "react";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
    title: 'ellunext',
    description: 'personal fun project website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-slate-700">

        <Navbar/>

        {children}


        </body>
        </html>
    )
}
