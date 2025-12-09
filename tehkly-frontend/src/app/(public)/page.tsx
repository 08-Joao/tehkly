'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Code, Cloud, Server, Smartphone, Shield, Lightning, Letter, Phone, User as UserIcon } from '@solar-icons/react/ssr';
import { FaDocker, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiPostgresql, SiN8N, SiKubernetes, SiNeo4J, SiRedis, SiNginx } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/Toaster";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Navbar } from '@/components/ui/Navbar';
import { GlassBackground } from '@/components/backgrounds/GlassBackground';
import Image from 'next/image';
import Api from '@/services/Api';

// --- TIPOS E DADOS ---
type ToasterType = 'success' | 'error' | 'warning';

// Variantes de Animação para Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

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

const GlassCard = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`rounded-3xl border border-foreground/10 bg-card/50 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

// --- SEÇÕES DA PÁGINA ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="container mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna Esquerda: Conteúdo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Desenvolvimento de Software
            </Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            Construindo o Futuro
            <span className="block text-primary">
              da Tecnologia, Hoje.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Somos uma startup especializada em transformar ideias em produtos digitais robustos, escaláveis e de alto desempenho.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Tecnologia de Ponta</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lightning className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">Entrega Rápida</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="group relative h-12 w-full sm:w-auto overflow-hidden rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-primary/40" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              Comece seu Projeto <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold rounded-xl" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
              Nossos Serviços
            </Button>
          </motion.div>
        </motion.div>

        {/* Coluna Direita: Ilustração com Efeito Vidro */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-20 blur-3xl rounded-full" />

          <div className="relative aspect-square max-w-lg mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            {/* Card Efeito Vidro atrás da imagem */}
            <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl dark:bg-black/20" />

            <div className="relative z-10 flex h-full w-full items-center justify-center p-10">
              <Image
                src="/Team work-pana.svg"
                alt="Software development illustration"
                width={600}
                height={600}
                className="h-full w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Element */}
            {/* <div className="absolute -bottom-6 -right-6 z-20 rounded-xl border border-border bg-card p-4 shadow-xl ">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-purple-500 ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-green-500 ring-2 ring-background" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-foreground">50+ Projetos</p>
                  <p className="text-muted-foreground text-xs">Entregues</p>
                </div>
              </div>
            </div> */}

          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { icon: Code, title: "Desenvolvimento Web", description: "Criamos websites e aplicações web modernas, responsivas e otimizadas para performance.", features: ["React/Next.js", "TypeScript", "Responsivo"] },
    { icon: Cloud, title: "Sistemas em Nuvem", description: "Infraestrutura escalável e segura usando as principais plataformas cloud do mercado.", features: ["Docker", "Kubernetes", "CI/CD"] },
    { icon: Server, title: "Automação de Sistemas", description: "Automatizamos processos repetitivos para aumentar produtividade e reduzir custos.", features: ["n8n", "Webhooks", "APIs"] },
    { icon: Smartphone, title: "Aplicações Mobile", description: "Desenvolvemos apps nativos e híbridos para iOS e Android com excelente experiência de usuário.", features: ["React Native", "Performance", "UX"] },
  ];

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Soluções Inovadoras para
            <span className="block text-primary">Impulsionar seu Negócio</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Do conceito ao deploy, entregamos excelência em cada etapa do desenvolvimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full rounded-3xl border-2 border-border bg-card/50 p-8 backdrop-blur-lg transition-all duration-500 hover:border-primary hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
  <section id="projetos" className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge variant="outline" className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          Nossos Projetos
        </Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          Projetos que
          <span className="block text-primary">Falam por Nós</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Confira alguns dos desafios que transformamos em soluções de sucesso.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full flex flex-col rounded-3xl border-2 border-border bg-card/50 p-8 backdrop-blur-lg transition-all duration-500 hover:border-primary hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl" />
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
              </div>
            </div>
            <Button variant="ghost" className="mt-6 self-start text-primary hover:text-primary group/btn" onClick={() => openModal(project)}>
              Ver Detalhes <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, '').slice(0, 11);
  if (numbers.length <= 2) return numbers.length > 0 ? `(${numbers}` : '';
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
};


const ContactSection = ({ onSubmit }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phoneValue = phone;
    const message = formData.get('message') as string;

    try {
      const response = await Api.newContact({
        name,
        email,
        phone: phoneValue,
        message,
      })
      if (response.status === 201 || response.status === 200) {
        onSubmit({ name, email, message });
        (e.target as HTMLFormElement).reset();
        setPhone('');
      } else {
        throw new Error(`Erro ao enviar mensagem. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro completo:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contato" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Vamos construir algo
                <span className="block text-primary">incrível juntos.</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Estamos prontos para tirar sua ideia do papel. Preencha o formulário e responderemos em até 24h.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border">
                    <Letter className="w-5 h-5" />
                  </div>
                  <span>contato@tehkly.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span>+55 (31) 99606-6511</span>
                  <span>+55 (31) 97568-2079</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full items-end justify-end">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                  <Letter className="w-4 h-4 mr-2" /> Contato
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-background/40 p-6 rounded-3xl border border-border/40">

                <Input name="name" placeholder="Seu nome" required />
                <Input name="email" type="email" placeholder="Seu email" required />
                <Input
                  type="tel"
                  placeholder="WhatsApp / Telefone"
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                  required
                />

                <div className="relative group/input">
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border-border/60 bg-background/50 p-4 shadow-sm transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:ring-[3px] focus:ring-primary/20 resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

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
    <main className="relative min-h-screen w-full overflow-hidden bg-background font-sans selection:bg-primary/20">
      {toaster?.show && <Toaster message={toaster.message} type={toaster.type} onClose={closeToaster} />}

      {/* BACKGROUND - Grid Pattern + Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-40 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,transparent,var(--background))]" />
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card/80 backdrop-blur-lg border-border/50">
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

      <HeroSection />
      <ServicesSection />
      <TechMarquee />
      <ProjectsSection openModal={openProjectModal} />
      <ContactSection onSubmit={handleContactSubmit} />

      <footer className="border-t border-border/50 py-8 px-4 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}