"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Cloud, Briefcase, Calendar } from 'lucide-react';
import Api from '@/services/Api';
import { SubscriptionPlan, Service, PlanType } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/ui/Navbar';
import { GlassBackground } from '@/components/backgrounds/GlassBackground';

const AuroraBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden opacity-40 dark:opacity-30">
    <div className="absolute top-1/4 left-1/4 h-[40vw] w-[40vw] animate-aurora rounded-full bg-primary/30 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 h-[30vw] w-[30vw] animate-aurora-delay rounded-full bg-secondary/30 blur-[120px]" />
  </div>
);

const GlassCard = ({ children, className = '', featured = false }: { children: React.ReactNode, className?: string, featured?: boolean }) => (
  <div className={`rounded-3xl border ${featured ? 'border-primary/30 ring-2 ring-primary/20' : 'border-foreground/10'} bg-card/50 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:shadow-primary/10 hover:border-primary/20 ${className}`}>
    {children}
  </div>
);

const serviceIcons: Record<Service, React.ReactNode> = {
  [Service.CLOUD]: <Cloud className="h-8 w-8" />,
  [Service.AGENDE]: <Calendar className="h-8 w-8" />,
  [Service.FREELA]: <Zap className="h-8 w-8" />,
  [Service.BUSINESS]: <Briefcase className="h-8 w-8" />,
};

const serviceColors: Record<Service, string> = {
  [Service.CLOUD]: 'text-blue-500',
  [Service.AGENDE]: 'text-green-500',
  [Service.FREELA]: 'text-purple-500',
  [Service.BUSINESS]: 'text-orange-500',
};

function SubscriptionPlansContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<PlanType>(PlanType.MONTHLY);
  const [selectedService, setSelectedService] = useState<Service>(Service.CLOUD);
  const [loading, setLoading] = useState(true);

  // Initialize service from URL parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const upperService = serviceParam.toUpperCase();
      if (Object.values(Service).includes(upperService as Service)) {
        setSelectedService(upperService as Service);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await Api.getPublicSubscriptionPlans();
        if (response && response.data) {
          setSubscriptionPlans(response.data);
        }
      } catch (error) {
        console.error('Error fetching subscription plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  const calculatePrice = (plan: SubscriptionPlan) => {
    const basePrice = Number(plan.monthlyPrice) || 0;
    switch (selectedPeriod) {
      case PlanType.QUARTERLY:
        return (basePrice * 3 * (1 - plan.quarterlyDiscount / 100)).toFixed(2);
      case PlanType.ANNUAL:
        return (basePrice * 12 * (1 - plan.annualDiscount / 100)).toFixed(2);
      default:
        return basePrice.toFixed(2);
    }
  };

  const getMonthlyEquivalent = (plan: SubscriptionPlan) => {
    const totalPrice = parseFloat(calculatePrice(plan));
    switch (selectedPeriod) {
      case PlanType.QUARTERLY:
        return (totalPrice / 3).toFixed(2);
      case PlanType.ANNUAL:
        return (totalPrice / 12).toFixed(2);
      default:
        return totalPrice.toFixed(2);
    }
  };

  const getPeriodLabel = () => {
    switch (selectedPeriod) {
      case PlanType.QUARTERLY:
        return 'trimestre';
      case PlanType.ANNUAL:
        return 'ano';
      default:
        return 'mês';
    }
  };

  const getFeatures = (plan: SubscriptionPlan): string[] => {
    const features: string[] = [];
    
    if (plan.cloudFeatures) {
      features.push(`${plan.cloudFeatures.storageGB}GB de armazenamento`);
      features.push(`Até ${plan.cloudFeatures.maxUsers} usuário(s)`);
      features.push(`Tamanho máximo de arquivo: ${plan.cloudFeatures.maxFileSize}MB`);
      if (plan.cloudFeatures.maxBandwidthGB > 0) {
        features.push(`${plan.cloudFeatures.maxBandwidthGB}GB de banda mensal`);
      } else {
        features.push('Banda ilimitada');
      }
      if (plan.cloudFeatures.allowPublicSharing) {
        features.push('Compartilhamento público');
      }
      if (plan.cloudFeatures.allowCustomDomain) {
        features.push('Domínio customizado');
      }
      features.push(`Suporte ${plan.cloudFeatures.supportLevel}`);
    }
    
    if (plan.agendeFeatures) {
      features.push(`Até ${plan.agendeFeatures.maxAppointmentsPerMonth} agendamentos/mês`);
      features.push(`Até ${plan.agendeFeatures.maxOrganizations} organização(ões)`);
      features.push(`${plan.agendeFeatures.maxPointsPerOrganization} pontos por organização`);
      if (plan.agendeFeatures.allowCustomBranding) {
        features.push('Branding customizado');
      }
      if (plan.agendeFeatures.allowWhitelabel) {
        features.push('Solução white-label');
      }
      features.push(`Suporte ${plan.agendeFeatures.supportLevel}`);
    }
    
    if (plan.freelaFeatures) {
      features.push(`Até ${plan.freelaFeatures.maxProjects} projetos`);
      features.push(`Até ${plan.freelaFeatures.maxClients} clientes`);
      if (plan.freelaFeatures.allowInvoicing) {
        features.push('Faturamento integrado');
      }
      if (plan.freelaFeatures.allowTimeTracking) {
        features.push('Controle de horas');
      }
      features.push(`Suporte ${plan.freelaFeatures.supportLevel}`);
    }
    
    if (plan.businessFeatures) {
      features.push('Solução empresarial completa');
      features.push('Consultoria dedicada');
      features.push('Customização avançada');
      features.push(`Suporte ${plan.businessFeatures.supportLevel}`);
    }

    // Add generic features if no specific features
    if (features.length === 0) {
      features.push('Acesso completo à plataforma');
      features.push('Suporte técnico');
      features.push('Atualizações gratuitas');
    }

    return features;
  };

  const handleServiceChange = (service: Service) => {
    setSelectedService(service);
    // Update URL with service parameter
    router.push(`/subscription-plans?service=${service.toLowerCase()}`, { scroll: false });
  };

  const isFeaturedPlan = (plan: SubscriptionPlan) => {
    // Mark plans with highest discount or specific services as featured
    return plan.annualDiscount >= 20 || plan.service === Service.BUSINESS;
  };

  const filteredPlans = subscriptionPlans
    .filter(plan => plan.service === selectedService)
    .sort((a, b) => Number(a.monthlyPrice) - Number(b.monthlyPrice));

  const serviceOptions = [
    { value: Service.CLOUD, label: 'Cloud', icon: <Cloud className="h-5 w-5" /> },
    { value: Service.AGENDE, label: 'Agende', icon: <Calendar className="h-5 w-5" /> },
    { value: Service.FREELA, label: 'Freela', icon: <Zap className="h-5 w-5" /> },
    { value: Service.BUSINESS, label: 'Business', icon: <Briefcase className="h-5 w-5" /> },
  ];

  return (
    <GlassBackground variant="default" className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="relative pt-24 pb-20 px-4">
        
        {/* Header Section */}
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-primary/50 bg-primary/10 py-2 px-4 text-sm font-medium text-primary backdrop-blur-sm mb-6">
              Planos e Preços
            </Badge>
            <h1 className="font-sans text-5xl font-bold tracking-tighter text-foreground md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Escolha o Plano <span className="text-primary">Perfeito</span> para Você
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Soluções flexíveis e escaláveis para atender suas necessidades. Economize mais com planos anuais.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Service Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-4xl"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl border border-foreground/10 bg-card/50 p-2 backdrop-blur-xl">
                {serviceOptions.map((service) => (
                  <button
                    key={service.value}
                    onClick={() => handleServiceChange(service.value)}
                    className={`relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all whitespace-nowrap justify-center ${
                      selectedService === service.value
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {selectedService === service.value && (
                      <motion.div
                        layoutId="serviceSelector"
                        className="absolute inset-0 bg-primary rounded-xl shadow-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {service.icon}
                      {service.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Period Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-card/50 p-2 backdrop-blur-xl"
            >
              {[
                { type: PlanType.MONTHLY, label: 'Mensal' },
                { type: PlanType.QUARTERLY, label: 'Trimestral' },
                { type: PlanType.ANNUAL, label: 'Anual' }
              ].map((period) => (
                <button
                  key={period.type}
                  onClick={() => setSelectedPeriod(period.type)}
                  className={`relative rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                    selectedPeriod === period.type
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {selectedPeriod === period.type && (
                    <motion.div
                      layoutId="periodSelector"
                      className="absolute inset-0 bg-primary rounded-xl shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{period.label}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Plans Grid */}
        {loading ? (
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-muted-foreground">Carregando planos...</p>
          </div>
        ) : filteredPlans.length === 0 ? (
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-muted-foreground">Nenhum plano disponível para este serviço.</p>
          </div>
        ) : (
          <div className="container mx-auto max-w-7xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredPlans.map((plan, index) => {
                  const featured = isFeaturedPlan(plan);
                  const features = getFeatures(plan);
                  
                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={featured ? 'lg:scale-105' : ''}
                    >
                      <GlassCard featured={featured} className="p-8 h-full flex flex-col">
                        {featured && (
                          <Badge className="mb-4 w-fit">Mais Popular</Badge>
                        )}
                        
                        {/* Service Icon */}
                        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ${serviceColors[plan.service]}`}>
                          {serviceIcons[plan.service]}
                        </div>

                        {/* Plan Name */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                        
                        {/* Description */}
                        {plan.description && (
                          <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                        )}

                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-foreground">
                              R$ {getMonthlyEquivalent(plan)}
                            </span>
                            <span className="text-muted-foreground">/mês</span>
                          </div>
                          {selectedPeriod !== PlanType.MONTHLY && (
                            <p className="mt-2 text-sm text-muted-foreground">
                              R$ {calculatePrice(plan)} cobrado por {getPeriodLabel()}
                            </p>
                          )}
                          {selectedPeriod === PlanType.ANNUAL && plan.annualDiscount > 0 && (
                            <Badge variant="secondary" className="mt-2">
                              {plan.annualDiscount}% de desconto
                            </Badge>
                          )}
                          {selectedPeriod === PlanType.QUARTERLY && plan.quarterlyDiscount > 0 && (
                            <Badge variant="secondary" className="mt-2">
                              {plan.quarterlyDiscount}% de desconto
                            </Badge>
                          )}
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-8 flex-grow">
                          {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <Button 
                          className="w-full" 
                          variant={featured ? 'default' : 'outline'}
                          size="lg"
                        >
                          Começar Agora
                        </Button>
                      </GlassCard>
                  </motion.div>
                );
              })}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* FAQ or Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto max-w-4xl mt-20"
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Precisa de um Plano Customizado?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para criar uma solução personalizada que atenda perfeitamente às suas necessidades.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/#contato'}>
              Falar com Especialista
            </Button>
          </GlassCard>
        </motion.div>
      </main>

      <footer className="border-t border-foreground/10 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </GlassBackground>
  );
}

export default function SubscriptionPlans() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Carregando planos...</p>
        </div>
      </div>
    }>
      <SubscriptionPlansContent />
    </Suspense>
  );
}