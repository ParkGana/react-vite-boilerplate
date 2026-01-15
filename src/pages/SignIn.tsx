import { useAuth } from '@/providers/authProvider';

const SignInPage = () => {
  const { signIn } = useAuth();

  return (
    <div>
      <div className="w-fit cursor-pointer border border-black p-3 hover:bg-neutral-300" onClick={signIn}>
        로그인
      </div>
    </div>
  );
};

export default SignInPage;
