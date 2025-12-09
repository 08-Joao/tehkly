"use client";
import Api from '@/services/Api';
import { SubscriptionPlan } from '@/types/subscription';
import React, { useEffect, useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, QrCode, ArrowRight, Check, Sparkles, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toaster';
import { PlanType } from '@/types/subscription';
import Image from 'next/image';

type ToasterType = 'success' | 'error' | 'warning';

type PaymentMethod = 'card' | 'pix';

interface CardData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface PixData {
  cpf: string;
  name: string;
}

function SubscriptionCheckout({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ period?: string }> }) {
  const { id } = use(params);
  const { period } = use(searchParams);
  const [plan, setPlan] = useState<SubscriptionPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [pixData, setPixData] = useState<PixData>({
    cpf: '',
    name: '',
  });
  const [processing, setProcessing] = useState(false);
  const [cvvFocused, setCvvFocused] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [pixCode] = useState('00020126580014br.gov.bcb.pix0136xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx52040000530398654061234.565802BR5913JOHN DOE6009SAO PAULO62410503***63041D3D');
  const [toaster, setToaster] = useState<{ show: boolean; message: string; type: ToasterType } | null>(null);
  
  const getBillingPeriodFromQuery = (): PlanType => {
    if (period === 'quarterly') return PlanType.QUARTERLY;
    if (period === 'annual') return PlanType.ANNUAL;
    return PlanType.MONTHLY;
  };
  
  const [billingPeriod] = useState<PlanType>(getBillingPeriodFromQuery());

  useEffect(() => {
    async function fetchPlan() {
      try {
        setLoading(true);
        const response = await Api.getSubscriptionPlanById(id);
        setPlan(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPlan();
  }, [id]);

  useEffect(() => {
    setIsCardFlipped(cvvFocused);
  }, [cvvFocused]);

  const handleCardChange = (field: keyof CardData, value: string) => {
    let formattedValue = value;

    if (field === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16);
    } else if (field === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setCardData(prev => ({ ...prev, [field]: formattedValue }));
  };

  const handlePixChange = (field: keyof PixData, value: string) => {
    let formattedValue = value;

    if (field === 'cpf') {
      formattedValue = value.replace(/\D/g, '').slice(0, 11);
    }

    setPixData(prev => ({ ...prev, [field]: formattedValue }));
  };

  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})(?=(\d))/g, '$1 ').slice(0, 19);
  };

  const calculateTotalPrice = () => {
    if (!plan) return 0;
    const basePrice = Number(plan.monthlyPrice) || 0;
    
    if (billingPeriod === PlanType.QUARTERLY) {
      return basePrice * 3 * (1 - (plan.quarterlyDiscount || 0) / 100);
    } else if (billingPeriod === PlanType.ANNUAL) {
      return basePrice * 12 * (1 - (plan.annualDiscount || 0) / 100);
    }
    return basePrice;
  };

  const getDiscount = () => {
    if (!plan) return 0;
    if (billingPeriod === PlanType.QUARTERLY) return plan.quarterlyDiscount || 0;
    if (billingPeriod === PlanType.ANNUAL) return plan.annualDiscount || 0;
    return 0;
  };

  const getPeriodLabel = () => {
    if (billingPeriod === PlanType.QUARTERLY) return 'trimestre';
    if (billingPeriod === PlanType.ANNUAL) return 'ano';
    return 'mês';
  };

  const handlePayment = async () => {
    setProcessing(true);
    try {
      // Implementar chamada à API de pagamento
      console.log('Processando pagamento...', { paymentMethod, cardData, pixData });
      // await Api.processPayment(...);
      
      // Simular sucesso e mostrar confirmação
      setTimeout(() => {
        setPaymentConfirmed(true);
        setProcessing(false);
      }, 1500);
    } catch (e) {
      console.log(e);
      setProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode);
    setToaster({ show: true, message: 'Código PIX copiado com sucesso!', type: 'success' });
  };

  const closeToaster = () => setToaster(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando plano...</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium text-muted-foreground">Plano não encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {toaster?.show && <Toaster message={toaster.message} type={toaster.type} onClose={closeToaster} />}
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 gradient-orb gradient-orb-primary animate-float opacity-30" />
            <div className="absolute top-20 right-1/4 w-96 h-96 gradient-orb gradient-orb-secondary animate-float-slow opacity-30" />
          </div>

          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Finalizar Pagamento
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Complete seu pedido
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha seu método de pagamento preferido e finalize a compra de forma segura
              </p>
            </motion.div>
          </div>
        </section>

        {/* Payment Confirmation Modal */}
        <AnimatePresence>
          {paymentConfirmed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card border-2 border-border rounded-3xl p-8 max-w-md w-full shadow-2xl"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Pagamento Confirmado!</h2>
                  <p className="text-muted-foreground">Escaneie o QR Code ou copie o código PIX abaixo</p>
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="space-y-6">
                    {/* QR Code */}
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-center">
                      <div className="w-56 h-56 bg-gray-200 rounded-lg flex items-center justify-center">
                        <QrCode className="w-32 h-32 text-gray-400" />
                      </div>
                    </div>

                    {/* PIX Code */}
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">Código PIX (Copia e Cola)</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={pixCode}
                          readOnly
                          className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground text-xs font-mono truncate"
                        />
                        <Button
                          onClick={copyToClipboard}
                          className="px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold"
                        >
                          Copiar
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
                    <p className="text-sm font-medium text-success">Cartão processado com sucesso!</p>
                    <p className="text-xs text-muted-foreground mt-2">Sua subscrição será ativada em breve.</p>
                  </div>
                )}

                <Button
                  onClick={() => setPaymentConfirmed(false)}
                  className="w-full mt-6 h-12 bg-foreground hover:bg-foreground/90 text-background rounded-xl font-semibold"
                >
                  Fechar
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Payment Method Selector */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Método de Pagamento</h2>
                <div className="flex gap-4 mb-8">
                  {[
                    { id: 'card', label: 'Cartão de Crédito', icon: CreditCard },
                    { id: 'pix', label: 'PIX', icon: QrCode },
                  ].map(method => {
                    const Icon = method.icon;
                    const isActive = paymentMethod === method.id;
                    return (
                      <motion.button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 relative px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-300 overflow-hidden border-2 ${
                          isActive
                            ? 'border-transparent text-background'
                            : 'border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="paymentMethodPill"
                            className="absolute inset-0 bg-foreground rounded-2xl shadow-lg"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Icon className="w-5 h-5" />
                          {method.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Forms */}
              <AnimatePresence mode="wait">
                {paymentMethod === 'card' ? (
                  <motion.div
                    key="card-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Card Preview */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Seu Cartão</h3>
                      <div className="flex justify-center">
                        <div style={{ perspective: '1000px' }} className="w-full max-w-sm">
                          <motion.div
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                              transformStyle: 'preserve-3d',
                            }}
                            className="h-56"
                          >
                            {/* Front of Card */}
                            <div
                              style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                              }}
                              className="absolute w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 flex flex-col justify-between text-white shadow-2xl"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-xs font-medium opacity-80 mb-1">NÚMERO DO CARTÃO</p>
                                  <p className="text-lg font-mono tracking-wider">
                                    {formatCardNumber(cardData.cardNumber) || '•••• •••• •••• ••••'}
                                  </p>
                                </div>
                                <CreditCard className="w-8 h-8" />
                              </div>
                              <div className="flex justify-between items-end">
                                <div>
                                  <p className="text-xs font-medium opacity-80 mb-1">TITULAR</p>
                                  <p className="text-sm font-semibold tracking-wide">
                                    {cardData.cardHolder.toUpperCase() || 'SEU NOME'}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs font-medium opacity-80 mb-1">VÁLIDO ATÉ</p>
                                  <p className="text-sm font-mono">{cardData.expiryDate || 'MM/AA'}</p>
                                </div>
                              </div>
                            </div>

                            {/* Back of Card */}
                            <div
                              style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                              }}
                              className="absolute w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col justify-center text-white shadow-2xl"
                            >
                              <div className="bg-gray-700 h-12 mb-4" />
                              <div className="flex justify-end">
                                <div className="bg-white text-gray-900 px-3 py-2 rounded font-mono font-bold text-sm">
                                  {cardData.cvv || 'CVV'}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                    </div>

                    {/* Card Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Número do Cartão
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formatCardNumber(cardData.cardNumber)}
                          onChange={e => handleCardChange('cardNumber', e.target.value)}
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nome do Titular
                        </label>
                        <input
                          type="text"
                          placeholder="João Silva"
                          value={cardData.cardHolder}
                          onChange={e => handleCardChange('cardHolder', e.target.value)}
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Validade
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            value={cardData.expiryDate}
                            onChange={e => handleCardChange('expiryDate', e.target.value)}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            value={cardData.cvv}
                            onChange={e => handleCardChange('cvv', e.target.value)}
                            onFocus={() => setCvvFocused(true)}
                            onBlur={() => setCvvFocused(false)}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pix-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* PIX Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          CPF do Pagador
                        </label>
                        <input
                          type="text"
                          placeholder="123.456.789-00"
                          value={pixData.cpf}
                          onChange={e => handlePixChange('cpf', e.target.value)}
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nome do Pagador
                        </label>
                        <input
                          type="text"
                          placeholder="João Silva"
                          value={pixData.name}
                          onChange={e => handlePixChange('name', e.target.value)}
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Order Summary - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-32 rounded-3xl border-2 border-border bg-card p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">Resumo do Pedido</h3>

                {/* Plan Details */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-elevation-1">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{plan.name}</h4>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>
                </div>

                {/* Period Info */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Período</span>
                    <Badge variant="secondary" className="capitalize">
                      {getPeriodLabel()}
                    </Badge>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Valor mensal</span>
                    <span className="text-foreground font-medium">R$ {Number(plan.monthlyPrice).toFixed(2)}</span>
                  </div>
                  {getDiscount() > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Desconto</span>
                      <span className="text-success font-medium">-{getDiscount()}%</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <div className="text-right">
                      <p className="text-3xl font-black text-primary">
                        R$ {calculateTotalPrice().toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">por {getPeriodLabel()}</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span className="text-muted-foreground">Pagamento 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Ativação imediata</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handlePayment}
                  disabled={processing}
                  className="w-full h-14 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {processing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <span>Confirmar Pagamento</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </>
                  )}
                </Button>

                {/* Cancellation Info */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Você pode cancelar a qualquer momento sem penalidades
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12 px-6 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tehkly. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SubscriptionCheckout;