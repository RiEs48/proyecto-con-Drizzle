import Header from "@/src/shared/componentes/ui/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <Header />
            {children}
        </>
    );
}
