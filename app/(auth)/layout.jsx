
export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-backgroundColor h-screen w-full flex items-center justify-center">
          <div className="flex items-center justify-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
