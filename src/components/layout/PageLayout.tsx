import Footer from './Footer';
import Header from './Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 p-5">
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
