import Header from '@components/Header';
import Nav from '@common/Nav';
import { useContext, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';

export default function MainLayout({ children }) {
  const { refreshSession } = useAuth();

  useEffect(() => {
    refreshSession();
  }, []);
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-6">{children}</div>
        </main>
      </div>
    </>
  );
}
