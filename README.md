# React Vite Boilerplate

React Vite 프로젝트 Boilerplate으로서, 아래 내용들에 대한 설정이 적용되어 있습니다.

<br />

<!-- Vite 프로젝트 생성 -->
<details>

<summary><strong>Vite 프로젝트 생성</strong></summary>
<br />

```bash
yarn create vite . --template react-ts
```

</details>

<br />

<!-- Prettier 설정 -->
<details>

<summary><strong>Prettier 설정</strong></summary>
<br />

```bash
yarn add -D prettier
```

```json
/* .vscode/settings.json */

{
  "editor.formatOnSave": true,
  "[markdown]": {
    "editor.defaultFormatter": "vscode.markdown-language-features",
    "editor.formatOnSave": false
  }
}
```

```json
/* .prettierrc */

{	
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "trailingComma": "all"
}
```

</details>

<br />

<!-- 전역 Font 및 CSS 설정 -->
<details>

<summary><strong>전역 Font 및 CSS 설정</strong></summary>
<br />

```css
/* src/styles/index.css */

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/PretendardVariable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: Pretendard;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

</details>

<br />

<!-- 경로 별칭 설정 -->
<details>

<summary><strong>경로 별칭 설정</strong></summary>
<br />

```ts
/* vite.config.ts */

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
```

```json
/* tsconfig.app.json */

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

</details>

<br />

<!-- 로컬에서 IP 주소로 접속 가능하도록 설정 -->
<details>

<summary><strong>로컬에서 IP 주소로 접속 가능하도록 설정</strong></summary>
<br />

```ts
/* vite.config.ts */

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
});
```

</details>

<br />

<!-- Provider 설정 -->
<details>

<summary><strong>Provider 설정</strong></summary>
<br />

```tsx
/* src/provider.tsx */

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}

export default Provider;
```

```tsx
/* src/main.tsx */

import Provider from './provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>,
);
```

</details>

<br />

<!-- import 순서 자동 정렬되도록 설정 (Prettier 설정 필요) -->
<details>

<summary><strong>import 순서 자동 정렬되도록 설정 (Prettier 설정 필요)</strong></summary>
<br />

```bash
yarn add -D @trivago/prettier-plugin-sort-imports
```

```json
/* .prettierrc */

{	
  "plugins": ["@trivago/prettier-plugin-sort-imports"],

  "importOrder": ["^react$", "^react", "<THIRD_PARTY_MODULES>", "^@/", "^[./]"],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true
}
```

```json
/* .vscode/settings.json */

{
  "editor.codeActionsOnSave": {
    "source.organizeImports": "never"
  }
}
```

</details>

<br />

<!-- Tailwind CSS 설정 -->
<details>

<summary><strong>Tailwind CSS 설정</strong></summary>
<br />

```bash
yarn add tailwindcss@3.3.5 postcss autoprefixer

npx tailwindcss init -p
```

```css
/* src/styles/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```ts
/* tailwind.config.ts */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

</details>

<br />

<!-- Tailwind CSS 순서 자동 정렬되도록 설정 (Prettier 설정 필요) -->
<details>

<summary><strong>Tailwind CSS 순서 자동 정렬되도록 설정 (Prettier 설정 필요)</strong></summary>
<br />

```bash
yarn add -D prettier-plugin-tailwindcss
```

```json
/* .prettierrc */

{	
	"plugins": ["prettier-plugin-tailwindcss"],
}
```

</details>

<br />

<!-- Context API 설정 -->
<details>

<summary><strong>Context API 설정</strong></summary>
<br />

```tsx
/* src/providers/authProvider.tsx */

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const signIn = useCallback(() => setIsAuthenticated(true), []);

  const signOut = useCallback(() => setIsAuthenticated(false), []);

  const value = useMemo(() => ({ isAuthenticated, signIn, signOut }), [isAuthenticated, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error();
  return context;
};
```

```tsx
/* src/provider.tsx */

import AuthProvider from './providers/authProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
```

</details>

<br />

<!-- Router 설정 -->
<details>

<summary><strong>Router 설정</strong></summary>
<br />

```bash
yarn add react-router-dom
```

```tsx
/* src/router.tsx */

import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
```

```tsx
/* src/App.tsx */

import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
```

</details>

<br />

<!-- 조건부 라우팅 설정 (Router 설정 필요) -->
<details>

<summary><strong>조건부 라우팅 설정 (Router 설정 필요)</strong></summary>
<br />

```tsx
/* src/routes/authenticatedRoute.tsx */

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/providers/authProvider';

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  return <Outlet />;
}

export default AuthenticatedRoute;
```

```tsx
/* src/routes/nonAuthenticatedRoute.tsx */

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/providers/authProvider';

const NonAuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}

export default NonAuthenticatedRoute;
```

```tsx
/* src/router.tsx */

import { Route } from 'react-router-dom';
import AuthenticatedRoute from './routes/authenticatedRoute';
import NonAuthenticatedRoute from './routes/nonAuthenticatedRoute';

const Router = () => {
  return (
    <Routes>
      <Route element={<NonAuthenticatedRoute />}>
        <Route path="/signin" element={<SignInPage />} />
      </Route>

      <Route element={<AuthenticatedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
```

</details>

<br />

<!-- Axios 설정 -->
<details>

<summary><strong>Axios 설정</strong></summary>
<br />

```bash
yarn add axios
```

```ts
/* src/api/api.ts */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
```

</details>

<br />

<!-- TanStack Query 설정 -->
<details>

<summary><strong>TanStack Query 설정</strong></summary>
<br />

```bash
yarn add @tanstack/react-query
```

```tsx
/* src/providers/queryProvider.tsx */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
```

```tsx
/* src/provider.tsx */

import QueryProvider from './providers/queryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
}

export default Provider;
```

</details>
