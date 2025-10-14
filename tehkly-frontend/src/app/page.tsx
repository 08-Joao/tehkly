'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import { Sun, Moon, Magnifer, CheckCircle, ShieldWarning, CloseCircle, AltArrowUp, 
        User, Letter, ArrowRight, HamburgerMenu
} from '@solar-icons/react'; 

import { MoreVertical, LucideIcon} from 'lucide-react';
import { FaDocker, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiPostgresql, SiN8N, SiKubernetes } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa6';

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/components/ui/Dropdown";
import { Input } from '@/components/ui/Input'
import { Modal } from "@/components/ui/Modal"
import { Navbar } from '@/components/ui/Navbar'
import { SkeletonLoader } from "@/components/ui/SkeletonLoader"
import { Switch } from "@/components/ui/Switch"
import { Toaster } from "@/components/ui/Toaster"
import { Tooltip } from "@/components/ui/Tooltip"

// --- Tipos e Helpers Globais ---
type IconType = LucideIcon;

interface IconWrapperProps {
  icon: IconType;
  className?: string;
}
const IconWrapper = ({ icon: Icon, className = '' }: IconWrapperProps) => (
  <Icon className={`inline-block h-5 w-5 ${className}`} />
);

type ToasterType = 'success' | 'error' | 'warning';

// --- Dados para a Página ---
const technologies = [
  { name: 'Docker', icon: <FaDocker size={60} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={60} /> },
  { name: 'NestJS', icon: <SiNestjs size={60} /> },
  { name: 'React', icon: <FaReact size={60} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={60} /> },
  { name: 'TypeScript', icon: <SiTypescript size={60} /> },
  { name: 'Node.js', icon: <FaNode size={60} /> },
  { name: 'n8n', icon: <SiN8N size={60} /> }
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

// --- Componente Principal da Página ---
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toaster, setToaster] = useState<{ show: boolean; message: string; type: ToasterType } | null>(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  
  // Efeito para o modo escuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Efeito para simular carregamento dos projetos
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToaster({ show: true, message: 'Mensagem enviada com sucesso!', type: 'success' });
  };
  
  const closeToaster = () => setToaster(null);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#tecnologias', label: 'Tecnologias' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-[#D5D5D5]">
      {toaster?.show && (
        <Toaster message={toaster.message} type={toaster.type as ToasterType} onClose={closeToaster} />
      )}
      
      <Modal isOpen={isModalOpen} onClose={closeProjectModal} title={selectedProject?.title ?? ''}>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject?.fullDescription}</p>
        <div className="flex gap-2 flex-wrap">
          {selectedProject?.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </Modal>

      <Navbar 
        isDarkMode={isDarkMode} 
        onThemeToggle={handleThemeToggle}
        lightModeIcon={<Sun size={25} weight="LineDuotone" className="text-yellow-400" />}
        darkModeIcon={<Moon size={25} weight="LineDuotone" className="text-slate-400" />}
      >
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-[#656565] dark:text-[#D5D5D5]">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-black dark:hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>
        <Button variant="primary">
            Registre-se
        </Button>
        <Button variant="ghost">
            Login
        </Button>
        <div className="md:hidden">
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="ghost" className="p-2">
                        <HamburgerMenu />
                    </Button>
                </DropdownTrigger>
                <DropdownContent>
                    {navLinks.map(link => (
                        <DropdownItem key={link.href} onClick={() => window.location.href = link.href}>
                            {link.label}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            </Dropdown>
        </div>
      </Navbar>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 text-center">
            <div className="container mx-auto max-w-4xl space-y-6">
                <Badge variant="primary" className="mb-4">Desenvolvimento de Software de Ponta a Ponta</Badge>
                <h1 className="text-9xl md:text-9xl font-bold text-black dark:text-white">
                    Tehkly
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-[#656565] max-w-2xl mx-auto">
                    Desenvolvendo o seu futuro.
                </p>
                <div className="flex gap-4 justify-center pt-8">
                    <Button variant="primary" onClick={() => window.location.href = '#projetos'}>
                        Ver Projetos
                    </Button>
                    <Button variant="ghost" onClick={() => window.location.href = '#contato'}>
                        Entre em Contato
                    </Button>
                </div>
            </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-20 px-6 bg-white/50 dark:bg-white/5">
            <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                Sobre a <span className="text-[#C0FF6B]">Tehkly</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-[#656565] leading-relaxed">
                [Inserir descrição]
            </p>
            </div>
        </section>

        {/* Tecnologias Section */}
        <section id="tecnologias" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                    <span className="text-[#C0FF6B]">Tecnologias</span> que Utilizamos
                </h2>
                <p className="text-gray-600 dark:text-[#656565] mb-16 text-lg">
                    Utilizamos as ferramentas mais modernas para construir soluções de alta performance.
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {technologies.map((tech) => (
                        <Tooltip key={tech.name} content={tech.name}>
                            <div className="aspect-square bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-[#656565]/20 rounded-2xl flex flex-col items-center justify-center hover:border-[#C0FF6B]/50 hover:shadow-lg hover:shadow-[#C0FF6B]/10 hover:-translate-y-1 transition-all duration-200 cursor-pointer p-4 text-[#C0FF6B]">
                                {tech.icon}
                            </div>
                        </Tooltip>
                    ))}
                    </div>
                </div> 
            </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="py-20 px-6 bg-white/50 dark:bg-white/5">
            <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
                Nossos <span className="text-[#C0FF6B]">Projetos</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-[#656565] mb-16 text-lg">
                Conheça alguns dos desafios que transformamos em soluções de sucesso.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoadingProjects ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <SkeletonLoader className="aspect-video w-full rounded-lg" />
                            <SkeletonLoader className="h-6 w-3/4 rounded-lg" />
                            <SkeletonLoader className="h-12 w-full rounded-lg" />
                            <SkeletonLoader className="h-10 w-1/3 rounded-lg" />
                        </div>
                    ))
                ) : (
                    projects.map((project) => (
                        <Card
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imagePlaceholder={true}
                            action={
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button variant="primary" onClick={() => openProjectModal(project)}>
                                        Ver Detalhes
                                    </Button>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <Badge key={tag} variant="neutral">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                    ))
                )}
            </div>
            </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-20 px-6">
            <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Vamos construir algo <span className="text-[#C0FF6B]">incrível</span> juntos?
            </h2>
            <p className="text-gray-600 dark:text-[#656565] mb-12 text-lg">
                Preencha o formulário abaixo e vamos conversar sobre seu próximo projeto.
            </p>
            
            <form onSubmit={handleContactSubmit} className="bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-[#656565]/30 rounded-lg p-8 space-y-6 text-left">
                <Input icon={User} placeholder="Seu nome completo" required />
                <Input icon={Letter} type="email" placeholder="Seu melhor e-mail" required />
                <textarea
                    rows={5}
                    className="w-full bg-transparent border-2 border-[#D5D5D5]/50 dark:border-[#656565] rounded-lg p-4 text-black dark:text-white placeholder:text-[#656565] focus:outline-none focus:ring-2 focus:ring-[#C0FF6B] focus:border-[#C0FF6B] transition-colors duration-200 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                />
                <Button type="submit" variant="primary" className="w-full" icon={ArrowRight} iconPosition="right">
                    Enviar Mensagem
                </Button>
            </form>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-[#656565]/20 py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center text-[#656565]">
          <p>&copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}