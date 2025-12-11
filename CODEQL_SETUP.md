# CodeQL Setup - Tehkly

Este projeto agora está configurado com **CodeQL** para análise de segurança e qualidade de código.

## O que é CodeQL?

CodeQL é uma ferramenta de análise estática desenvolvida pelo GitHub que:
- Identifica vulnerabilidades de segurança
- Detecta padrões de código perigosos
- Encontra problemas de qualidade
- Analisa código JavaScript/TypeScript

## Como funciona?

### Execução Automática

O CodeQL é executado automaticamente em:
- **Push** para as branches `main` e `develop`
- **Pull Requests** para as branches `main` e `develop`
- **Agendado** diariamente às 2 da manhã UTC

### Visualizar Resultados

1. Acesse seu repositório no GitHub
2. Vá para a aba **Security** (Segurança)
3. Clique em **Code scanning alerts** (Alertas de análise de código)
4. Você verá todos os problemas encontrados categorizados por severidade

## Configuração Local (Opcional)

Se quiser executar CodeQL localmente:

### 1. Instalar CodeQL CLI

```bash
# No macOS com Homebrew
brew install codeql

# Ou baixar manualmente de:
# https://github.com/github/codeql-cli-releases/releases
```

### 2. Criar um banco de dados

```bash
codeql database create codeql-db --language=typescript --source-root=.
```

### 3. Executar análise

```bash
codeql database analyze codeql-db security-and-quality.qls --format=sarif-latest --output=results.sarif
```

## Arquivos Configurados

- `.github/workflows/codeql.yml` - Workflow do GitHub Actions
- `.codeql-config.yml` - Configuração de análise

## Tipos de Problemas Detectados

O CodeQL detecta:
- **Injeção SQL** - Queries vulneráveis
- **XSS (Cross-Site Scripting)** - Código não sanitizado
- **Injeção de Comando** - Execução de comandos perigosos
- **Acesso a Dados Sensíveis** - Exposição de secrets
- **Problemas de Criptografia** - Uso de algoritmos fracos
- **Problemas de Autenticação** - Validação inadequada
- **Problemas de Lógica** - Código perigoso ou ineficiente

## Próximos Passos

1. Faça push para a branch `main` ou `develop`
2. Acesse a aba **Security** no GitHub
3. Revise os alertas encontrados
4. Corrija os problemas de segurança identificados
5. Feche os alertas após correção

## Recursos Adicionais

- [Documentação CodeQL](https://codeql.github.com/docs/)
- [GitHub Code Scanning](https://docs.github.com/en/code-security/code-scanning)
- [Queries CodeQL Disponíveis](https://github.com/github/codeql/tree/main/javascript/ql/src)
