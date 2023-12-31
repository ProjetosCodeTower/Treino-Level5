import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html data-theme="light">
            <body className={poppins.className}>
                <div className="container">
                    <h1
                        className={`font-bold text-lg py-2`}
                        style={{ fontSize: "32px" }}
                    >
                        Notas
                    </h1>
                    {children}
                </div>
            </body>
        </html>
    );
}
