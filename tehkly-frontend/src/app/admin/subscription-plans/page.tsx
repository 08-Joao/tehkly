'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubscriptionPlan, Service } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Api from '@/services/Api';
import { GlassBackground } from '@/components/backgrounds/GlassBackground';

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
      <div className="container mx-auto py-8 px-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Planos de Assinatura</h1>
            <p className="text-muted-foreground">Gerencie os planos disponíveis para os usuários</p>
          </div>
          <Button onClick={() => router.push('/admin/subscription-plans/create')} className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Plano
          </Button>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-card/30 backdrop-blur-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serviço</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Preço Mensal</TableHead>
                <TableHead>Desconto Trimestral</TableHead>
                <TableHead>Desconto Anual</TableHead>
                <TableHead>Trial (dias)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visibilidade</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    <p className="text-muted-foreground">Nenhum plano cadastrado</p>
                  </TableCell>
                </TableRow>
              ) : (
                plans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell>
                      <Badge variant="outline" className={serviceColors[plan.service]}>
                        {serviceLabels[plan.service]}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{plan.name}</TableCell>
                    <TableCell>{formatPrice(plan.monthlyPrice)}</TableCell>
                    <TableCell>{plan.quarterlyDiscount}%</TableCell>
                    <TableCell>{plan.annualDiscount}%</TableCell>
                    <TableCell>{plan.trialDays}</TableCell>
                    <TableCell>
                      <Badge variant={plan.isActive ? 'default' : 'secondary'}>
                        {plan.isActive ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={plan.isPublic ? 'default' : 'secondary'}>
                        {plan.isPublic ? 'Público' : 'Privado'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push(`/admin/subscription-plans/edit/${plan.id}`)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(plan.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </GlassBackground>
  );
}
