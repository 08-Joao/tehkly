# AuthContext

O `AuthContext` fornece autenticação e autorização para a aplicação frontend da Tehkly.

## Funcionalidades

- ✅ Verificação automática de autenticação ao carregar a aplicação
- ✅ Detecção de roles de admin (ADMIN, ROOT)
- ✅ Gerenciamento de estado do usuário
- ✅ Função de logout
- ✅ Suporte a re-verificação de autenticação

## Uso

### 1. AuthProvider (já configurado em `app/layout.tsx`)

```tsx
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 2. Hook `useAuth()`

Use o hook `useAuth()` em componentes client-side para acessar informações de autenticação:

```tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function MyComponent() {
  const { user, isLoggedIn, isAdmin, isCheckingAuth, signOut, checkAuth } = useAuth();

  if (isCheckingAuth) {
    return <div>Carregando...</div>;
  }

  if (!isLoggedIn) {
    return <div>Não autenticado</div>;
  }

  return (
    <div>
      <p>Bem-vindo, {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
      {isAdmin && <p>Você é um administrador!</p>}
      <button onClick={signOut}>Sair</button>
    </div>
  );
}
```

### 3. Componente `ProtectedRoute`

Proteja rotas que requerem autenticação ou permissões de admin:

```tsx
'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function AdminPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <div>Conteúdo exclusivo para admins</div>
    </ProtectedRoute>
  );
}
```

## Propriedades do `useAuth()`

| Propriedade | Tipo | Descrição |
|---|---|---|
| `user` | `User \| null` | Dados do usuário autenticado |
| `isLoggedIn` | `boolean` | Se o usuário está autenticado |
| `isCheckingAuth` | `boolean` | Se está verificando autenticação |
| `isAdmin` | `boolean` | Se o usuário tem role ADMIN ou ROOT |
| `signOut` | `() => Promise<void>` | Função para fazer logout |
| `checkAuth` | `() => Promise<void>` | Função para re-verificar autenticação |

## Tipos de Usuário

```typescript
type UserRole = 'ADMIN' | 'ROOT' | 'USER';

interface User {
  id: string;
  email: string;
  name: string;
  phoneNumber?: string;
  birthDate?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
```

## Exemplo Completo: Admin Layout

```tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function AdminLayout({ children }) {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <ProtectedRoute requireAdmin={true}>
      <nav>
        <h1>Admin Panel</h1>
        <p>{user?.name}</p>
        <button onClick={signOut}>Logout</button>
      </nav>
      <main>{children}</main>
    </ProtectedRoute>
  );
}
```
