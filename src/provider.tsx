import QueryProvider from './providers/queryProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}

export default Provider;
