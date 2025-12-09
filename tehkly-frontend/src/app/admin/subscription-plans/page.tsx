'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { SubscriptionPlan, Service } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pencil, Trash2, Plus, Sparkles, AlertCircle } from 'lucide-react';
import Api from '@/services/Api';
import { GlassBackground } from '@/components/backgrounds/GlassBackground';
import Image from 'next/image';

const serviceLabels: Record<Service, string> = {
  [Service.CLOUD]: 'Cloud',
  [Service.AGENDE]: 'Agende',
  [Service.FREELA]: 'Freela',
  [Service.BUSINESS]: 'Business',
};

const serviceColors: Record<Service, string> = {
  [Service.CLOUD]: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  [Service.AGENDE]: 'bg-green-500/10 text-green-500 border-green-500/20',
  [Service.FREELA]: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  [Service.BUSINESS]: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
};

export default function SubscriptionsPage() {
  const router = useRouter();
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      const response = await Api.getAllSubscriptionPlans();

      if (!response || !response.data) {
        throw new Error('Erro ao carregar planos');
      }

      setPlans(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este plano?')) {
      return;
    }

    try {
      await Api.deleteSubscriptionPlan(id);
      fetchPlans();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao excluir plano');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Carregando planos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-destructive">Erro ao carregar planos</p>
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button onClick={fetchPlans} className="mt-4">
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <GlassBackground variant="minimal" className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-6 space-y-8 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Planos de Assinatura</h1>
            </div>
            <p className="text-lg text-muted-foreground">Gerencie os planos disponíveis para os usuários</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => router.push('/admin/subscription-plans/create')} 
              className="gap-2 text-base font-semibold h-12 px-6"
            >
              <Plus className="h-5 w-5" />
              Novo Plano
            </Button>
          </motion.div>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border-2 border-border bg-card/50 overflow-hidden backdrop-blur-lg"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/50 hover:bg-transparent">
                <TableHead className="font-bold text-foreground">Serviço</TableHead>
                <TableHead className="font-bold text-foreground">Nome</TableHead>
                <TableHead className="font-bold text-foreground">Preço Mensal</TableHead>
                <TableHead className="font-bold text-foreground">Desc. Trim.</TableHead>
                <TableHead className="font-bold text-foreground">Desc. Anual</TableHead>
                <TableHead className="font-bold text-foreground">Trial</TableHead>
                <TableHead className="font-bold text-foreground">Status</TableHead>
                <TableHead className="font-bold text-foreground">Visibilidade</TableHead>
                <TableHead className="text-right font-bold text-foreground">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.length === 0 ? (
                <TableRow className="border-0 hover:bg-transparent">
                  <TableCell colSpan={9} className="h-32 text-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Image
                        src="/No data-pana.svg"
                        alt="No data"
                        width={200}
                        height={200}
                      />
                      <p className="text-lg font-medium text-muted-foreground">Nenhum plano cadastrado</p>
                      <p className="text-sm text-muted-foreground">Clique em "Novo Plano" para começar</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                plans.map((plan, index) => (
                  <motion.tr
                    key={plan.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-border/50 hover:bg-primary/5 transition-colors"
                  >
                    <TableCell>
                      <Badge variant="outline" className={`${serviceColors[plan.service]} font-semibold`}>
                        {serviceLabels[plan.service]}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">{plan.name}</TableCell>
                    <TableCell className="font-medium">{formatPrice(plan.monthlyPrice)}</TableCell>
                    <TableCell className="text-center font-medium">{plan.quarterlyDiscount}%</TableCell>
                    <TableCell className="text-center font-medium">{plan.annualDiscount}%</TableCell>
                    <TableCell className="text-center font-medium">{plan.trialDays}d</TableCell>
                    <TableCell>
                      <Badge variant={plan.isActive ? 'default' : 'secondary'} className="font-semibold">
                        {plan.isActive ? '✓ Ativo' : '○ Inativo'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={plan.isPublic ? 'default' : 'secondary'} className="font-semibold">
                        {plan.isPublic ? '🌐 Público' : '🔒 Privado'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/subscription-plans/edit/${plan.id}`)}
                            className="text-primary hover:text-primary hover:bg-primary/10"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(plan.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))
              )}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </GlassBackground>
  );
}
