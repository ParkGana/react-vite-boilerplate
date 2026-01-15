import { useAuth } from '@/providers/authProvider';

const HomePage = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <div className="w-fit cursor-pointer border border-black p-3 hover:bg-neutral-300" onClick={signOut}>
        로그아웃
      </div>
    </div>
  );
};

export default HomePage;
