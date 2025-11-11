'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Service, SubscriptionPlan } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft } from 'lucide-react';
import Api from '@/services/Api';

export default function EditSubscriptionPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [formData, setFormData] = useState({
    service: Service.CLOUD,
    name: '',
    description: '',
    monthlyPrice: '',
    quarterlyDiscount: '0',
    annualDiscount: '0',
    isActive: true,
    isPublic: true,
    // Cloud features
    storageGB: '',
    // Agende features
    maxAppointmentsPerMonth: '',
    maxOrganizations: '',
    maxPointsPerOrganization: '',
  });

  useEffect(() => {
    if (id) {
      fetchPlan();
    }
  }, [id]);

  const fetchPlan = async () => {
    try {
      setIsFetching(true);
      const response = await Api.getSubscriptionPlanById(id);

      if (!response || !response.data) {
        throw new Error('Erro ao carregar plano');
      }

      const plan: SubscriptionPlan = response.data;
      
      setFormData({
        service: plan.service,
        name: plan.name,
        description: plan.description || '',
        monthlyPrice: plan.monthlyPrice.toString(),
        quarterlyDiscount: plan.quarterlyDiscount.toString(),
        annualDiscount: plan.annualDiscount.toString(),
        isActive: plan.isActive,
        isPublic: plan.isPublic,
        storageGB: plan.cloudFeatures?.storageGB?.toString() || '',
        maxAppointmentsPerMonth: plan.agendeFeatures?.maxAppointmentsPerMonth?.toString() || '',
        maxOrganizations: plan.agendeFeatures?.maxOrganizations?.toString() || '',
        maxPointsPerOrganization: plan.agendeFeatures?.maxPointsPerOrganization?.toString() || '',
      });
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao carregar plano');
      router.push('/admin/subscription-plans');
    } finally {
      setIsFetching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload: any = {
        service: formData.service,
        name: formData.name,
        description: formData.description || undefined,
        monthlyPrice: parseFloat(formData.monthlyPrice),
        quarterlyDiscount: parseInt(formData.quarterlyDiscount),
        annualDiscount: parseInt(formData.annualDiscount),
        isActive: formData.isActive,
        isPublic: formData.isPublic,
      };

      // Adiciona features específicas do serviço
      if (formData.service === Service.CLOUD && formData.storageGB) {
        payload.cloudFeatures = {
          storageGB: parseInt(formData.storageGB),
        };
      } else if (formData.service === Service.AGENDE) {
        payload.agendeFeatures = {
          maxAppointmentsPerMonth: parseInt(formData.maxAppointmentsPerMonth),
          maxOrganizations: parseInt(formData.maxOrganizations),
          maxPointsPerOrganization: parseInt(formData.maxPointsPerOrganization),
        };
      } else if (formData.service === Service.FREELA) {
        payload.freelaFeatures = {};
      } else if (formData.service === Service.BUSINESS) {
        payload.businessFeatures = {};
      }

      await Api.updateSubscriptionPlan(id, payload);

      router.push('/admin/subscription-plans');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao atualizar plano');
    } finally {
      setIsLoading(false);
    }
  };

  const renderServiceFeatures = () => {
    switch (formData.service) {
      case Service.CLOUD:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features do Cloud</h3>
            <div>
              <Label htmlFor="storageGB">Armazenamento (GB)</Label>
              <Input
                id="storageGB"
                type="number"
                value={formData.storageGB}
                onChange={(e) => setFormData({ ...formData, storageGB: e.target.value })}
                required
                min="1"
              />
            </div>
          </div>
        );
      case Service.AGENDE:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features do Agende</h3>
            <div>
              <Label htmlFor="maxAppointments">Agendamentos por Mês</Label>
              <Input
                id="maxAppointments"
                type="number"
                value={formData.maxAppointmentsPerMonth}
                onChange={(e) => setFormData({ ...formData, maxAppointmentsPerMonth: e.target.value })}
                required
                min="1"
              />
            </div>
            <div>
              <Label htmlFor="maxOrganizations">Máximo de Organizações</Label>
              <Input
                id="maxOrganizations"
                type="number"
                value={formData.maxOrganizations}
                onChange={(e) => setFormData({ ...formData, maxOrganizations: e.target.value })}
                required
                min="1"
              />
            </div>
            <div>
              <Label htmlFor="maxPoints">Pontos por Organização</Label>
              <Input
                id="maxPoints"
                type="number"
                value={formData.maxPointsPerOrganization}
                onChange={(e) => setFormData({ ...formData, maxPointsPerOrganization: e.target.value })}
                required
                min="1"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Carregando plano...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Editar Plano de Assinatura</h1>
          <p className="text-muted-foreground">Atualize os dados do plano</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-foreground/10 bg-card/30 p-6 backdrop-blur-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="service">Serviço *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value as Service })}
              disabled
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Serviços</SelectLabel>
                  <SelectItem value={Service.CLOUD}>Cloud</SelectItem>
                  <SelectItem value={Service.AGENDE}>Agende</SelectItem>
                  <SelectItem value={Service.FREELA}>Freela</SelectItem>
                  <SelectItem value={Service.BUSINESS}>Business</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="mt-1 text-xs text-muted-foreground">O serviço não pode ser alterado</p>
          </div>

          <div>
            <Label htmlFor="name">Nome do Plano *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Básico, Pro, Enterprise"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descrição do plano..."
            rows={3}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Label htmlFor="monthlyPrice">Preço Mensal (R$) *</Label>
            <Input
              id="monthlyPrice"
              type="number"
              step="0.01"
              value={formData.monthlyPrice}
              onChange={(e) => setFormData({ ...formData, monthlyPrice: e.target.value })}
              placeholder="0.00"
              required
              min="0"
            />
          </div>

          <div>
            <Label htmlFor="quarterlyDiscount">Desconto Trimestral (%)</Label>
            <Input
              id="quarterlyDiscount"
              type="number"
              value={formData.quarterlyDiscount}
              onChange={(e) => setFormData({ ...formData, quarterlyDiscount: e.target.value })}
              placeholder="0"
              min="0"
              max="100"
            />
          </div>

          <div>
            <Label htmlFor="annualDiscount">Desconto Anual (%)</Label>
            <Input
              id="annualDiscount"
              type="number"
              value={formData.annualDiscount}
              onChange={(e) => setFormData({ ...formData, annualDiscount: e.target.value })}
              placeholder="0"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />
            <Label htmlFor="isActive">Plano Ativo</Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="isPublic"
              checked={formData.isPublic}
              onCheckedChange={(checked) => setFormData({ ...formData, isPublic: checked })}
            />
            <Label htmlFor="isPublic">Plano Público</Label>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          {renderServiceFeatures()}
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="secondary" onClick={() => router.back()} disabled={isLoading}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </div>
      </form>
    </div>
  );
}
