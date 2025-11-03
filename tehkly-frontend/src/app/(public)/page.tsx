'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Code, Cloud, Server, Smartphone } from '@solar-icons/react/ssr';
import { FaDocker, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiPostgresql, SiN8N, SiKubernetes, SiNeo4J, SiRedis, SiNginx } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/Toaster";
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/Navbar';

// --- TIPOS E DADOS ---
type ToasterType = 'success' | 'error' | 'warning';

const technologies = [
  { name: 'React / React Native', icon: <FaReact className="h-8 w-8" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8" /> },
  { name: 'Node.js', icon: <FaNode className="h-8 w-8" /> },
  { name: 'NestJS', icon: <SiNestjs className="h-8 w-8" /> },
  { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8" /> },
  { name: 'Docker', icon: <FaDocker className="h-8 w-8" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="h-8 w-8" /> },
  { name: 'Neo4j', icon: <SiNeo4J className="h-8 w-8" /> },
  { name: 'Redis', icon: <SiRedis className="h-8 w-8" /> },
  { name: 'Nginx', icon: <SiNginx className="h-8 w-8" /> },
  { name: 'n8n', icon: <SiN8N className="h-8 w-8" /> }
];

const projects = [
  {
    id: 1,
    title: "Plataforma E-commerce",
    description: "Solução completa de vendas online com painel administrativo, gestão de estoque e pagamentos integrados.",
    fullDescription: "Desenvolvemos uma solução de e-commerce robusta e escalável, com painel administrativo para gerenciamento de produtos, pedidos, clientes e relatórios de vendas. A integração com os principais gateways de pagamento e sistemas de frete garante uma experiência fluida para o lojista e o consumidor.",
    tags: ["React", "Next.js", "NestJS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Sistema de Gestão (ERP/CRM)",
    description: "Dashboard customizado com analytics em tempo real e automação de processos para otimizar operações.",
    fullDescription: "Criamos um sistema de gestão (ERP/CRM) customizado para otimizar operações internas. O sistema inclui dashboards com métricas em tempo real, automação de tarefas repetitivas, controle de fluxo de trabalho e geração de relatórios, resultando em um aumento significativo de produtividade.",
    tags: ["TypeScript", "Node.js", "Docker", "React"]
  },
  {
    id: 3,
    title: "Automação com WhatsApp",
    description: "Integração via EvolutionAPI para automação de mensagens, chatbots e atendimento ao cliente.",
    fullDescription: "Implementamos uma solução de automação para o WhatsApp utilizando a EvolutionAPI, permitindo o envio de notificações, campanhas de marketing e a criação de chatbots para atendimento ao cliente 24/7. A solução é containerizada com Docker para fácil deploy e escalabilidade.",
    tags: ["EvolutionAPI", "NestJS", "Docker", "Webhooks"]
  }
];

type Project = typeof projects[0];

const AuroraBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden opacity-40 dark:opacity-30">
    <div className="absolute top-1/4 left-1/4 h-[40vw] w-[40vw] animate-aurora rounded-full bg-primary/30 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 h-[30vw] w-[30vw] animate-aurora-delay rounded-full bg-secondary/30 blur-[120px]" />
  </div>
);

const GlassCard = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`rounded-3xl border border-foreground/10 bg-card/50 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

// --- SEÇÕES DA PÁGINA ---

const HeroSection = () => (
  <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden text-center p-4">
    <AuroraBackground />
    <div className="z-10 flex flex-col items-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="border-primary/50 bg-primary/10 py-2 px-4 text-sm font-medium text-primary backdrop-blur-sm">
          Desenvolvimento de Software de Ponta a Ponta
        </Badge>
        <h1 className="mt-6 font-sans text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Construindo o Futuro <br /> da Tecnologia, Hoje.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Somos uma startup especializada em transformar ideias em produtos digitais robustos, escaláveis e de alto desempenho.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Button size="lg" className="w-full sm:w-auto text-base font-semibold" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
          Comece seu Projeto <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-semibold" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
          Nossos Serviços
        </Button>
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { icon: Code, title: "Desenvolvimento Web", description: "Criamos websites e aplicações web modernas, responsivas e otimizadas para performance." },
    { icon: Cloud, title: "Sistemas em Nuvem", description: "Infraestrutura escalável e segura usando as principais plataformas cloud do mercado." },
    { icon: Server, title: "Automação de Sistemas", description: "Automatizamos processos repetitivos para aumentar produtividade e reduzir custos." },
    { icon: Smartphone, title: "Aplicações Mobile", description: "Desenvolvemos apps nativos e híbridos para iOS e Android com excelente experiência de usuário." },
  ];

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="font-sans text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
          Soluções Inovadoras para <span className="text-primary">Impulsionar seu Negócio</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Do conceito ao deploy, entregamos excelência em cada etapa do desenvolvimento.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card/30 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechMarquee = () => (
  <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0 bg-grid-slate-100/30 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] dark:bg-grid-slate-800/30"></div>
    <div className="w-full max-w-6xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div className="group flex animate-marquee-normal items-center space-x-12">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex flex-shrink-0 flex-col items-center text-muted-foreground transition-colors group-hover:text-foreground">
            {tech.icon}
            <span className="mt-2 text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ openModal }: { openModal: (project: Project) => void }) => (
  <section id="projetos" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="font-sans text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Projetos que <span className="text-primary">Falam por Nós</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Confira alguns dos desafios que transformamos em soluções de sucesso.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-3xl border border-foreground/10 bg-card/30 p-8 text-left backdrop-blur-lg transition-all duration-300 hover:!border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-3 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </div>
            <Button variant="ghost" className="mt-6 self-start" onClick={() => openModal(project)}>
              Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ onSubmit }: { onSubmit: (formData: { name: string; email: string; message: string }) => void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('https://discord.com/api/webhooks/1434918396763439186/Ap_zLb9mWGhhoRVdDN1ikcRdOO0NQpgogmq8z_0nPLZGkZf6Czzetijhs5Ke-0TTcWLs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [
            {
              title: '📬 Novo Contato Recebido',
              color: 3447003,
              fields: [
                {
                  name: '👤 Nome',
                  value: name,
                  inline: true,
                },
                {
                  name: '📧 Email',
                  value: email,
                  inline: true,
                },
                {
                  name: '💬 Mensagem',
                  value: message,
                  inline: false,
                },
              ],
              footer: {
                text: 'Tehkly - Formulário de Contato',
              },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (response.ok) {
        onSubmit({ name, email, message });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <GlassCard className="p-8 md:p-12">
          <div className="text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
              Vamos construir algo <span className="text-primary">incrível juntos.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tem uma ideia ou um desafio para nós? Preencha o formulário e nossa equipe entrará em contato.
            </p>
          </div>
          <form className="mt-12 space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input name="name" placeholder="Seu nome completo *" required className="h-12 bg-card/50 backdrop-blur-sm" />
              <Input name="email" type="email" placeholder="Seu melhor email *" required className="h-12 bg-card/50 backdrop-blur-sm" />
            </div>
            <textarea
              name="message"
              rows={6}
              className="w-full rounded-lg bg-card/50 p-4 text-foreground placeholder:text-muted-foreground resize-none backdrop-blur-sm border border-border focus:ring-2 focus:ring-primary"
              placeholder="Descreva seu projeto, objetivos e o que você precisa..."
              required
            />
            <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-6">
              <label className="flex cursor-pointer items-center gap-2.5 select-none text-sm text-muted-foreground">
                <input type="checkbox" required className="sr-only peer" />
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-foreground/20 peer-checked:bg-primary peer-checked:border-primary">
                  <svg className="h-3.5 w-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                Concordo em compartilhar minhas informações.
              </label>
              <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto text-base font-semibold">
                {isLoading ? 'Enviando...' : 'Enviar Solicitação'} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};


// --- PÁGINA PRINCIPAL ---

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toaster, setToaster] = useState<{ show: boolean; message: string; type: ToasterType } | null>(null);


  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleContactSubmit = (formData: { name: string; email: string; message: string }) => {
    setToaster({ show: true, message: 'Mensagem enviada com sucesso!', type: 'success' });
  };

  const closeToaster = () => setToaster(null);

  return (
    <div className="bg-background text-foreground selection:bg-primary/20">
      {toaster?.show && <Toaster message={toaster.message} type={toaster.type} onClose={closeToaster} />}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card/80 backdrop-blur-lg border-foreground/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground pt-4">{selectedProject?.fullDescription}</DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 flex-wrap pt-4">
            {selectedProject?.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </DialogContent>
      </Dialog>

      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <TechMarquee />
        <ProjectsSection openModal={openProjectModal} />
        <ContactSection onSubmit={handleContactSubmit} />
      </main>

      <footer className="border-t border-foreground/10 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}


