'use client';

import React, { useState, useEffect } from 'react';
import { Letter, ArrowRight, HamburgerMenu, Programming, Cloud, ServerMinimalistic, Smartphone } from '@solar-icons/react'; 
import { FaDocker, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiPostgresql, SiN8N, SiKubernetes, SiNeo4J, SiRedis, SiNginx } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Navbar } from '@/components/ui/Navbar';
import { Toaster } from "@/components/ui/Toaster";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LetterOpened, Phone } from '@solar-icons/react/ssr';

type ToasterType = 'success' | 'error' | 'warning';

const technologies = [
  { name: 'Docker', icon: <FaDocker size={50} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} /> },
  { name: 'NestJS', icon: <SiNestjs size={50} /> },
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
  { name: 'TypeScript', icon: <SiTypescript size={50} /> },
  { name: 'Node.js', icon: <FaNode size={50} /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={50} /> },
  { name: 'Neo4j', icon: <SiNeo4J size={50} /> },
  { name: 'Redis', icon: <SiRedis size={50} /> },
  { name: 'Nginx', icon: <SiNginx size={50} /> },
  { name: 'n8n', icon: <SiN8N size={50} /> }
];

const projects = [
  {
    id: 1,
    title: "Projeto E-commerce",
    description: "Plataforma completa de vendas online com gestão de estoque e pagamentos integrados.",
    fullDescription: "Desenvolvemos uma solução de e-commerce robusta e escalável, com painel administrativo para gerenciamento de produtos, pedidos, clientes e relatórios de vendas. A integração com os principais gateways de pagamento e sistemas de frete garante uma experiência fluida para o lojista e o consumidor.",
    tags: ["React", "Next.js", "NestJS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Sistema de Gestão",
    description: "Dashboard administrativo com analytics em tempo real e automações de processos.",
    fullDescription: "Criamos um sistema de gestão (ERP/CRM) customizado para otimizar operações internas. O sistema inclui dashboards com métricas em tempo real, automação de tarefas repetitivas, controle de fluxo de trabalho e geração de relatórios, resultando em um aumento significativo de produtividade.",
    tags: ["TypeScript", "Node.js", "Docker", "React"]
  },
  {
    id: 3,
    title: "API WhatsApp",
    description: "Integração empresarial para automação de mensagens e atendimento ao cliente.",
    fullDescription: "Implementamos uma solução de automação para o WhatsApp utilizando a EvolutionAPI, permitindo o envio de notificações, campanhas de marketing e a criação de chatbots para atendimento ao cliente 24/7. A solução é containerizada com Docker para fácil deploy e escalabilidade.",
    tags: ["Evolution", "NestJS", "Docker", "Webhooks"]
  }
];

type Project = typeof projects[0];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toaster, setToaster] = useState<{ show: boolean; message: string; type: ToasterType } | null>(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoadingProjects(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => setIsModalOpen(false);

  const handleContactSubmit = () => {
    setToaster({ show: true, message: 'Mensagem enviada com sucesso!', type: 'success' });
  };
  
  const closeToaster = () => setToaster(null);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#tecnologias', label: 'Tecnologias' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <div>
      {toaster?.show && (
        <Toaster message={toaster.message} type={toaster.type as ToasterType} onClose={closeToaster} />
      )}
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.title ?? ''}</DialogTitle>
          </DialogHeader>
          <p className="text-foreground mb-4">{selectedProject?.fullDescription}</p>
          <div className="flex gap-2 flex-wrap">
            {selectedProject?.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        centerContent={
          <div className="flex items-center gap-5 text-xl font-medium text-foreground">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-foreground p-4 transition-colors">{link.label}</a>
            ))}
          </div>
        }
      >
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" className='w-[140px] h-[36px] font-bold'>Registre-se</Button>
          <Button variant="secondary" className='w-[120px] h-[36px] font-bold'>Sign-in</Button>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-2">
                <HamburgerMenu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map(link => (
                <DropdownMenuItem key={link.href} onClick={() => window.location.href = link.href}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Navbar>

      <main>
        <section className="pt-22 pb-20 px-6 text-center">
            <div className="container mx-auto max-w-4xl space-y-6">
                <Badge variant="default" className="mb-4 font-bold">Desenvolvimento de Software de Ponta a Ponta</Badge>
                <h1 className="text-9xl md:text-9xl font-bold text-foreground">
                    Tehkly
                </h1>
                <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto">
                    Desenvolvendo o seu futuro.
                </p>
                <div className="flex gap-4 justify-center pt-8">
                    <Button variant="default" onClick={() => window.location.href = '#servicos'}>
                        Ver Serviços
                    </Button>
                    <Button variant="secondary" onClick={() => window.location.href = '#contato'}>
                        Entre em Contato
                    </Button>
                </div>
            </div>
        </section>

        <section id="sobre" className="py-20 px-6 bg-card">
            <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Sobre a <span className="text-primary">Tehkly</span>
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
                Somos uma startup especializada no desenvolvimento de soluções tecnológicas inteligentes e inovadoras. Nosso propósito é transformar ideias em produtos digitais robustos, escaláveis e de alto desempenho, utilizando tecnologias avançadas e práticas modernas de engenharia de software para elevar continuamente o padrão de qualidade dos nossos projetos.
            </p>
            <p className="mt-5 text-lg text-foreground leading-relaxed">
                Acompanhamos de perto as principais tendências do mercado e as adaptamos de forma estratégica para maximizar eficiência, competitividade e impacto. Atuamos em parceria com profissionais e empresas que compartilham nossa visão de excelência, o que nos permite entregar soluções completas e bem estruturadas.
            </p>
            <p className='mt-5 text-lg text-foreground leading-relaxed'>
                Nosso compromisso é oferecer produtos e serviços que impulsionem negócios, acelerem processos e gerem valor real, sempre com foco em qualidade, inovação e profissionalismo.
            </p>
            </div>
        </section>

        <section id="tecnologias" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    <span className="text-primary">Tecnologias</span> que Utilizamos
                </h2>
                <p className="text-foreground mb-16 text-lg">
                    Algumas das ferramentas e frameworks que utilizamos em nossos trabalhos.
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <TooltipProvider>
                      {technologies.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <div className="aspect-square bg-card border border-border rounded-2xl flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-200 cursor-pointer p-4 text-primary">
                                {tech.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                    </div>
                </div> 
            </div>
        </section>

        <section id="servicos" className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-6xl ">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-center text-foreground mb-16 text-lg">
                Alcançamos várias áreas da tecnologia trabalhando em uma vasta gama de serviços.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Programming size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Desenvolvimento Web</h3>
                    </div>
                    <p className="text-foreground flex-grow grid place-items-center text-center">Criamos websites e aplicações web modernas, responsivas e otimizadas para performance.</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Cloud size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Sistemas em Nuvem</h3>
                    </div>
                    <p className="text-foreground flex-grow grid place-items-center text-center">Infraestrutura escalável e segura usando as principais plataformas cloud do mercado.</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <ServerMinimalistic size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Automação de Sistemas</h3>
                    </div>
                    <p className="text-foreground flex-grow grid place-items-center text-center">Automatizamos processos repetitivos para aumentar produtividade e reduzir custos.</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[280px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Smartphone size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Aplicações Mobile</h3>
                    </div>
                    <p className="text-foreground flex-grow grid place-items-center text-center">Desenvolvemos apps nativos e híbridos para iOS e Android com excelente UX.</p>
                </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-4xl font-bold mb-4 text-foreground">
                        Não encontrou o serviço que procurava?
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                        Nós <span className="text-primary">desenvolvemos</span> a <span className='text-primary'>solução</span>!
                    </h2>
                    <p className="text-foreground text-lg max-w-2xl mx-auto">
                        A Tehkly desenvolve sistemas personalizados, transformando suas ideias em realidade. Nossa equipe está pronta para discutir seu próximo projeto!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <Phone size={28} weight='LineDuotone' className="flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-2">Telefone</h3>
                                    <p className="text-foreground text-sm">+55 (31) 99606-6511 - João Victor</p>
                                    <p className="text-foreground text-sm">+55 (31) 97568-2079 - Felipe Fialho</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <Letter size={28} weight='LineDuotone' className="flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-2">E-mail</h3>
                                    <p className="text-foreground text-sm break-all">contato@tehkly.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                            <p className="text-foreground text-sm leading-relaxed">
                                <span className="font-semibold">Horário de Atendimento:</span><br/>
                                Segunda a Sexta: 9h às 18h<br/>
                                Respondemos em até 24h úteis
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-card border border-border rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                Solicite uma Proposta
                            </h3>
                            <p className="text-foreground mb-8">
                                Preencha os campos abaixo com suas informações e detalhes do projeto
                            </p>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-foreground">
                                            Nome Completo *
                                        </label>
                                        <Input placeholder="Digite seu nome" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-foreground">
                                            E-mail *
                                        </label>
                                        <Input type="email" placeholder="seu@email.com" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-foreground">
                                            Telefone
                                        </label>
                                        <Input placeholder="(00) 00000-0000" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-foreground">
                                            Empresa/Organização
                                        </label>
                                        <Input placeholder="Nome da empresa" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-foreground">
                                        Sobre o Projeto *
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full bg-background border border-border rounded-lg p-4 text-foreground placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Descreva seu projeto, objetivos e prazos desejados..."
                                        required
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input 
                                        type="checkbox" 
                                        id="terms" 
                                        className="mt-1 w-4 h-4 accent-primary"
                                        required 
                                    />
                                    <label htmlFor="terms" className="text-sm text-foreground">
                                        Concordo em compartilhar essas informações e autorizo o contato da equipe Tehkly
                                    </label>
                                </div>

                                <Button 
                                    type="submit" 
                                    variant="default" 
                                    className="w-full md:w-auto px-8"
                                    onClick={handleContactSubmit}
                                >
                                    Enviar Solicitação
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="pl-20 border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center text-foreground">
          <p>&copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}