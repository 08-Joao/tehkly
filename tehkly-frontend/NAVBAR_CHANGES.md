# Mudanças na Navbar - Sistema de Autenticação

## Resumo das Alterações

A navbar foi completamente atualizada para suportar estados de autenticação, oferecendo diferentes interfaces para usuários logados e não logados.

## Novos Componentes Criados

### 1. Avatar Component (`/src/components/ui/avatar.tsx`)
- Componente reutilizável para exibir foto do usuário
- Suporta fallback quando não há foto disponível
- Pronto para integração com sistema de fotos de perfil

## Funcionalidades Implementadas

### Estado Não Logado
**Desktop:**
- Botão "Sign Up" (outline)
- Botão "Sign In" (primary)

**Mobile:**
- Botão "Sign Up" (outline, largura total)
- Botão "Sign In" (primary, largura total)

### Estado Logado
**Desktop:**
- Avatar do usuário (clicável)
- Dropdown menu com:
  - Label "Minha Conta"
  - Opção "Profile" (ícone User)
  - Opção "Subscriptions" (ícone CreditCard)
  - Separador
  - Opção "Sign Out" (ícone LogOut, estilo destrutivo)

**Mobile:**
- Avatar grande (16x16)
- Botões em lista vertical:
  - "Profile" (outline)
  - "Subscriptions" (outline)
  - "Sign Out" (destrutivo)

## Lógica de Autenticação

### Verificação de Login
- Verifica cookie `accessToken` ao montar o componente
- Atualiza estado `isLoggedIn` dinamicamente
- Função auxiliar `getCookie()` para ler cookies no client-side

### Handlers Implementados
- `handleSignInClick()` - Redireciona para página de login
- `handleSignUpClick()` - Redireciona para página de cadastro
- `handleSignOut()` - Remove cookie e redireciona para home
- `handleProfileClick()` - Navega para `/profile`
- `handleSubscriptionsClick()` - Navega para `/subscriptions`

### URLs Dinâmicas por Ambiente
```typescript
const authBaseUrl = isProduction 
  ? 'https://auth.tehkly.com' 
  : 'http://localhost:3004';
```

## Integração Futura - Sistema de Fotos

No `useEffect` há um TODO preparado para quando o sistema de fotos for implementado:

```typescript
// TODO: Quando implementar o sistema de fotos, buscar a foto do usuário aqui
// Exemplo: const photo = await fetchUserPhoto();
// setUserPhoto(photo);
```

Quando implementar, basta:
1. Criar função `fetchUserPhoto()` que busca a foto do backend
2. Chamar dentro do `useEffect`
3. Atualizar `setUserPhoto(photo)`
4. O Avatar já está preparado para receber a URL da foto

## Dependências Utilizadas
- `lucide-react` - Ícones (User, CreditCard, LogOut)
- `@radix-ui/react-dropdown-menu` - Dropdown menu (já instalado)
- Componentes UI existentes: Button, ThemeToggle

## Observações
- Os erros de lint do TypeScript no IDE são normais e não afetam a execução
- O componente é "use client" para suportar hooks e interatividade
- Mantida consistência visual entre desktop e mobile
- Animações do Framer Motion preservadas
