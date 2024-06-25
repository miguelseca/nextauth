export default function AuthLayout({ children }: any) {
  return (
    <div>
      <nav className="bg-red-500 text text-white">
        This s navbar withou /auth
      </nav>

      {children}
    </div>
  );
}
