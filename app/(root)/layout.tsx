import Header from "@/components/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div className="">
                {children}
            </div>
        </>
    );
}
