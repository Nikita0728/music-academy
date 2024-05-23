




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <h2>Orewa Zoro</h2>
        {children}
        </>

  );
}
