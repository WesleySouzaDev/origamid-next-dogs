import UserHeaderNav from '@/components/conta/conta-header';

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <UserHeaderNav />
      {children}
    </div>
  );
}
