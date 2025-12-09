"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Cloud, Briefcase, Calendar, ArrowRight, MessageCircle, Sparkles, Shield, Clock } from 'lucide-react';
import Api from '@/services/Api';
import { SubscriptionPlan, Service, PlanType } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/ui/Navbar';
import Image from 'next/image';

const serviceIcons: Record<Service, React.ComponentType<any>> = {
  [Service.CLOUD]: Cloud,
  [Service.AGENDE]: Calendar,
  [Service.FREELA]: Zap,
  [Service.BUSINESS]: Briefcase,
};

const serviceNames: Record<Service, string> = {
  [Service.CLOUD]: 'Cloud Storage',
  [Service.AGENDE]: 'Agende',
  [Service.FREELA]: 'Freela',
  [Service.BUSINESS]: 'Enterprise',
};

// =================================================================
// COMPONENT PRINCIPAL
// =================================================================

function SubscriptionPlansContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<PlanType>(PlanType.ANNUAL);
  const [selectedService, setSelectedService] = useState<Service>(Service.CLOUD);
  const [loading, setLoading] = useState(true);

  // ... (useEffects e Funções de Lógica - Inalterados) ...

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
      features.push(`${plan.cloudFeatures.storageGB} GB de armazenamento`);
      features.push(`Até ${plan.cloudFeatures.maxUsers} usuário${plan.cloudFeatures.maxUsers > 1 ? 's' : ''}`);
      features.push(`Arquivos até ${plan.cloudFeatures.maxFileSize} MB`);
      features.push(plan.cloudFeatures.maxBandwidthGB > 0 ? `${plan.cloudFeatures.maxBandwidthGB} GB banda/mês` : 'Banda ilimitada');
      if (plan.cloudFeatures.allowPublicSharing) features.push('Compartilhamento público');
      if (plan.cloudFeatures.allowCustomDomain) features.push('Domínio próprio');
      features.push(`Suporte ${plan.cloudFeatures.supportLevel}`);
    }

    if (plan.agendeFeatures) {
      features.push(`Até ${plan.agendeFeatures.maxAppointmentsPerMonth} agendamentos/mês`);
      features.push(`Até ${plan.agendeFeatures.maxOrganizations} organização${plan.agendeFeatures.maxOrganizations > 1 ? 's' : ''}`);
      features.push(`Até ${plan.agendeFeatures.maxPointsPerOrganization} ponto${plan.agendeFeatures.maxPointsPerOrganization > 1 ? 's' : ''} por organização`);
      if (plan.agendeFeatures.allowCustomBranding) features.push('Branding personalizado');
      if (plan.agendeFeatures.allowWhitelabel) features.push('White-label');
      features.push(`Suporte ${plan.agendeFeatures.supportLevel}`);
    }

    if (plan.freelaFeatures) {
      features.push(`Até ${plan.freelaFeatures.maxProjects} projetos ativos`);
      features.push(`Até ${plan.freelaFeatures.maxClients} clientes`);
      if (plan.freelaFeatures.allowInvoicing) features.push('Emissão de notas fiscais');
      if (plan.freelaFeatures.allowTimeTracking) features.push('Apontamento de horas');
      features.push(`Suporte ${plan.freelaFeatures.supportLevel}`);
    }

    if (plan.businessFeatures) {
      features.push('Solução empresarial completa');
      features.push('Gerente de conta dedicado');
      features.push('SLA garantido');
      features.push('Onboarding personalizado');
    }

    return features.length ? features : ['Acesso completo', 'Suporte prioritário', 'Atualizações inclusas'];
  };

  const handleServiceChange = (service: Service) => {
    setSelectedService(service);
    router.push(`/subscription-plans?service=${service.toLowerCase()}`, { scroll: false });
  };

  const isFeaturedPlan = (plan: SubscriptionPlan) => {
    return plan.annualDiscount >= 20 || plan.service === Service.BUSINESS;
  };

  const filteredPlans = subscriptionPlans
    .filter(plan => plan.service === selectedService)
    .sort((a, b) => Number(a.monthlyPrice) - Number(b.monthlyPrice));

  const handleSubscribeClick = (plan: SubscriptionPlan) => {
    router.push(`/subscription-plans/checkout/${plan.id}?period=${selectedPeriod.toLowerCase()}`);
  };

  // Funções de desconto
  const getPeriodDiscount = (period: PlanType): number => {
    if (period === PlanType.ANNUAL) return 10; // Máximo
    if (period === PlanType.QUARTERLY) return 5; // Máximo
    return 0;
  };
  
  const getDiscountBadgeText = (period: PlanType): string | null => {
    const discount = getPeriodDiscount(period);
    if (discount > 0) {
      return `Economize até ${discount}%`;
    }
    return null;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans selection:bg-primary/20">
      {/* BACKGROUND GRID PREMIUM */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80caff0a_1px,transparent_1px),linear-gradient(to_bottom,#80caff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </div>

      <Navbar />

      <main className="relative pt-24 pb-20">
        {/* Hero Section with Illustration */}
        <section className="relative pb-20 px-6 overflow-hidden">

          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Planos e Preços
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Escolha o plano
                  <span className="block text-primary">
                    perfeito para você
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Soluções flexíveis e escaláveis para impulsionar seu negócio. Comece gratuitamente e expanda conforme necessário.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-5 h-5 text-success" />
                    <span className="text-sm font-medium">Pagamento seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Cancele quando quiser</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <Image
                    src="/Pricing plans-amico.svg"
                    alt="Business planning illustration"
                    className="w-full h-full object-contain"
                    loading="eager"
                    width={400}
                    height={400}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SELETOR DE SERVIÇOS - ESTILO PREMIUM */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(serviceNames).map(([key, name]) => {
              const Icon = serviceIcons[key as Service];
              const service = key as Service;
              const isActive = selectedService === service;

              return (
                <motion.button
                  key={service}
                  onClick={() => handleServiceChange(service)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden border ${
                    isActive
                      ? 'border-primary/50 bg-primary/10 text-primary'
                      : 'border-border/50 bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
        {/* SELETOR DE PERÍODO - ESTILO PREMIUM */}
        <div className="max-w-lg mx-auto px-6 mb-20 text-center">
          {/* Badge de desconto no topo */}
          <div className="h-10 mb-4">
            {getDiscountBadgeText(selectedPeriod) && (
              <Badge className="bg-success/10 text-success border-success/30 text-sm font-semibold px-4 py-1.5 shadow-md">
                <Zap className='w-4 h-4 mr-2' />
                {getDiscountBadgeText(selectedPeriod)}
              </Badge>
            )}
          </div>

          <div className="relative inline-flex items-center p-1.5 bg-background/50 rounded-full border border-border/50 backdrop-blur-sm shadow-lg">
            
            {/* Fundo deslizante (Slider) */}
            <motion.div
              layoutId="periodSlider"
              className="absolute bg-primary rounded-full shadow-lg shadow-primary/30"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              style={{ 
                width: `calc(100% / 3 - 8px)`, // Divide o espaço por 3, menos o padding total (1.5 * 2)
                height: `calc(100% - 8px)`, // Ajusta a altura
                top: 4, 
                left: selectedPeriod === PlanType.MONTHLY ? 4 : 
                      selectedPeriod === PlanType.QUARTERLY ? `calc((100% / 3) + 4px)` : 
                      `calc((100% / 3 * 2) + 4px)` 
              }}
            />

            {[
              { type: PlanType.MONTHLY, label: 'Mensal', discount: 0 },
              { type: PlanType.QUARTERLY, label: 'Trimestral', discount: getPeriodDiscount(PlanType.QUARTERLY) },
              { type: PlanType.ANNUAL, label: 'Anual', discount: getPeriodDiscount(PlanType.ANNUAL) },
            ].map((period) => {
              const isActive = selectedPeriod === period.type;

              return (
                <button
                  key={period.type}
                  onClick={() => setSelectedPeriod(period.type)}
                  className={`relative z-10 w-full min-w-[120px] px-4 py-3 rounded-full font-semibold text-sm transition-colors duration-300 ${
                    isActive ? 'text-primary-foreground' : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span className={`relative flex flex-col items-center justify-center`}>
                    {period.label}
                    {period.discount > 0 && (
                      <span className={`text-xs font-bold transition-opacity duration-300 ${
                        isActive ? 'text-primary-foreground/80' : 'text-success'
                      }`}>
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Plans Grid */}
        {loading ? (
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center py-32">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-muted-foreground">Carregando planos...</span>
              </div>
            </div>
          </div>
        ) : filteredPlans.length === 0 ? (
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center py-32">
              <div className="max-w-md mx-auto">
                <Image
                  src="/No data-pana.svg"
                  alt="No data"
                  width={400}
                  height={400}
                />
                <p className="text-xl font-medium text-muted-foreground">
                  Nenhum plano disponível para este serviço no momento.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto max-w-7xl px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredPlans.map((plan, index) => {
                  const featured = isFeaturedPlan(plan);
                  const features = getFeatures(plan);
                  const Icon = serviceIcons[plan.service];

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={featured ? 'lg:-mt-8' : ''}
                    >
                      <div className={`relative h-full rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden ${
                        featured
                          ? 'border-primary/50 bg-card/60 shadow-2xl backdrop-blur-xl'
                          : 'border-border/50 bg-card/40 backdrop-blur-sm'
                      }`}>
                        {/* Gradient overlay ao hover */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Featured Badge */}
                        {featured && (
                          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                            <Badge className="bg-success/90 text-success-foreground border-0 px-4 py-2 font-bold shadow-lg">
                              ⭐ Mais Popular
                            </Badge>
                          </div>
                        )}

                        <div className="p-8">
                          {/* Icon and Name */}
                          <div className="flex flex-col items-center text-center mb-8">
                            <div className="p-4 rounded-2xl mb-4 bg-primary/10 border border-primary/20">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                            {plan.description && (
                              <p className="text-sm text-muted-foreground">{plan.description}</p>
                            )}
                          </div>

                          {/* Price */}
                          <div className="text-center mb-8 pb-8 border-b border-border/50">
                            <div className="flex items-baseline justify-center gap-2">
                              <span className="text-lg font-semibold text-muted-foreground">R$</span>
                              <span className="text-6xl font-black text-foreground">
                                {getMonthlyEquivalent(plan)}
                              </span>
                              <span className="text-muted-foreground font-medium">/mês</span>
                            </div>
                            {selectedPeriod !== PlanType.MONTHLY && (
                              <p className="text-sm text-muted-foreground mt-3 font-medium">
                                R$ {calculatePrice(plan)} cobrado por {getPeriodLabel()}
                              </p>
                            )}
                          </div>

                          {/* Features */}
                          <ul className="space-y-4 mb-8">
                            {features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                                  <Check className="h-4 w-4 text-success" />
                                </div>
                                <span className="text-sm text-foreground font-medium leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <Button
                            className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                              featured
                                ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]'
                                : 'bg-foreground/10 hover:bg-foreground/20 text-foreground border border-border/50 hover:scale-[1.02]'
                            }`}
                            onClick={() => handleSubscribeClick(plan)}
                          >
                            <span>Começar agora</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Enterprise Section with Illustration */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 mx-6"
        >
          <div className="max-w-7xl mx-auto rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="flex items-center p-12 lg:p-16">
              {/* Left Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 shadow-lg">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Soluções Enterprise
                  <span className="block text-primary">
                    sob medida para você
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Recursos ilimitados, SLA garantido, onboarding personalizado e gerente de conta dedicado para sua empresa.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Recursos personalizados', 'Suporte prioritário 24/7', 'SLA de 99.9%', 'Integrações sob demanda'].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg shadow-primary/25 transition-all duration-300 rounded-xl hover:scale-[1.02]"
                  onClick={() => window.location.href = '/#contato'}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  <span>Falar com especialista</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/Business deal-pana.svg"
                  alt="Business deal"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border/50 py-12 px-6 mt-20 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function SubscriptionPlans() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando planos...</p>
        </div>
      </div>
    }>
      <SubscriptionPlansContent />
    </Suspense>
  );
}