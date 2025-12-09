'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Service } from '@/types/subscription';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Api from '@/services/Api';
import { GlassBackground } from '@/components/backgrounds/GlassBackground';

const serviceLabels: Record<Service, string> = {
  [Service.CLOUD]: 'Cloud',
  [Service.AGENDE]: 'Agende',
  [Service.FREELA]: 'Freela',
  [Service.BUSINESS]: 'Business',
};

export default function CreateSubscriptionPlanPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | ''>('');

  const [formData, setFormData] = useState({
    service: '',
    name: '',
    description: '',
    monthlyPrice: '',
    quarterlyDiscount: '0',
    annualDiscount: '0',
    trialDays: '0',
    isActive: true,
    isPublic: true,
  });

  const [cloudFeatures, setCloudFeatures] = useState({
    storageGB: '',
    maxUsers: '1',
    maxFileSize: '',
    maxBandwidthGB: '0',
    allowPublicSharing: false,
    allowCustomDomain: false,
    supportLevel: 'BASIC',
  });

  const [agendeFeatures, setAgendeFeatures] = useState({
    maxAppointmentsPerMonth: '',
    maxOrganizations: '',
    maxPointsPerOrganization: '',
    allowCustomBranding: false,
    allowWhitelabel: false,
    supportLevel: 'BASIC',
  });

  const [freelaFeatures, setFreelajFeatures] = useState({
    maxProjects: '',
    maxClients: '',
    allowInvoicing: false,
    allowTimeTracking: true,
    supportLevel: 'BASIC',
  });

  const [businessFeatures, setBusinessFeatures] = useState({
    supportLevel: 'BASIC',
  });

  const handleServiceChange = (value: string) => {
    setSelectedService(value as Service);
    setFormData({ ...formData, service: value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleCloudFeaturesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setCloudFeatures({
      ...cloudFeatures,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleAgendeFeaturesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setAgendeFeatures({
      ...agendeFeatures,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleFreelajFeaturesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFreelajFeatures({
      ...freelaFeatures,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleBusinessFeaturesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBusinessFeatures({
      ...businessFeatures,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.service) {
      setError('Selecione um serviço');
      return;
    }

    if (!formData.name) {
      setError('Nome do plano é obrigatório');
      return;
    }

    if (!formData.monthlyPrice) {
      setError('Preço mensal é obrigatório');
      return;
    }

    try {
      setIsLoading(true);

      const payload: any = {
        service: formData.service,
        name: formData.name,
        description: formData.description || undefined,
        monthlyPrice: formData.monthlyPrice,
        quarterlyDiscount: parseInt(formData.quarterlyDiscount),
        annualDiscount: parseInt(formData.annualDiscount),
        trialDays: parseInt(formData.trialDays),
        isActive: formData.isActive,
        isPublic: formData.isPublic,
      };

      if (formData.service === Service.CLOUD) {
        if (!cloudFeatures.storageGB || !cloudFeatures.maxFileSize) {
          setError('Preencha todos os campos obrigatórios do Cloud');
          return;
        }
        payload.cloudFeatures = {
          storageGB: parseInt(cloudFeatures.storageGB),
          maxUsers: parseInt(cloudFeatures.maxUsers),
          maxFileSize: parseInt(cloudFeatures.maxFileSize),
          maxBandwidthGB: parseInt(cloudFeatures.maxBandwidthGB),
          allowPublicSharing: cloudFeatures.allowPublicSharing,
          allowCustomDomain: cloudFeatures.allowCustomDomain,
          supportLevel: cloudFeatures.supportLevel,
        };
      } else if (formData.service === Service.AGENDE) {
        if (!agendeFeatures.maxAppointmentsPerMonth || !agendeFeatures.maxOrganizations || !agendeFeatures.maxPointsPerOrganization) {
          setError('Preencha todos os campos obrigatórios do Agende');
          return;
        }
        payload.agendeFeatures = {
          maxAppointmentsPerMonth: parseInt(agendeFeatures.maxAppointmentsPerMonth),
          maxOrganizations: parseInt(agendeFeatures.maxOrganizations),
          maxPointsPerOrganization: parseInt(agendeFeatures.maxPointsPerOrganization),
          allowCustomBranding: agendeFeatures.allowCustomBranding,
          allowWhitelabel: agendeFeatures.allowWhitelabel,
          supportLevel: agendeFeatures.supportLevel,
        };
      } else if (formData.service === Service.FREELA) {
        if (!freelaFeatures.maxProjects || !freelaFeatures.maxClients) {
          setError('Preencha todos os campos obrigatórios do Freela');
          return;
        }
        payload.freelaFeatures = {
          maxProjects: parseInt(freelaFeatures.maxProjects),
          maxClients: parseInt(freelaFeatures.maxClients),
          allowInvoicing: freelaFeatures.allowInvoicing,
          allowTimeTracking: freelaFeatures.allowTimeTracking,
          supportLevel: freelaFeatures.supportLevel,
        };
      } else if (formData.service === Service.BUSINESS) {
        payload.businessFeatures = {
          supportLevel: businessFeatures.supportLevel,
        };
      }

      await Api.createSubscriptionPlan(payload);
      router.push('/admin/subscription-plans');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar plano');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlassBackground variant="minimal" className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-6 space-y-8 pt-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Criar Novo Plano</h1>
            </div>
            <p className="text-lg text-muted-foreground">Adicione um novo plano de assinatura</p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-lg bg-destructive/10 p-4 text-destructive border border-destructive/20">
            {error}
          </div>
        )}

        {/* Informações Básicas */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>Dados principais do plano</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service">Serviço *</Label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(serviceLabels).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Nome do Plano *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Ex: Cloud Básico"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                placeholder="Descrição do plano"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Preços e Descontos */}
        <Card>
          <CardHeader>
            <CardTitle>Preços e Descontos</CardTitle>
            <CardDescription>Configure os valores do plano</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyPrice">Preço Mensal (R$) *</Label>
                <Input
                  id="monthlyPrice"
                  name="monthlyPrice"
                  type="number"
                  step="0.01"
                  value={formData.monthlyPrice}
                  onChange={handleFormChange}
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trialDays">Dias de Trial</Label>
                <Input
                  id="trialDays"
                  name="trialDays"
                  type="number"
                  min="0"
                  value={formData.trialDays}
                  onChange={handleFormChange}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quarterlyDiscount">Desconto Trimestral (%)</Label>
                <Input
                  id="quarterlyDiscount"
                  name="quarterlyDiscount"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.quarterlyDiscount}
                  onChange={handleFormChange}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualDiscount">Desconto Anual (%)</Label>
                <Input
                  id="annualDiscount"
                  name="annualDiscount"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.annualDiscount}
                  onChange={handleFormChange}
                  placeholder="0"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features específicas por serviço */}
        {selectedService === Service.CLOUD && (
          <Card>
            <CardHeader>
              <CardTitle>Features Cloud</CardTitle>
              <CardDescription>Configure as features específicas do Cloud</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storageGB">Armazenamento (GB) *</Label>
                  <Input
                    id="storageGB"
                    name="storageGB"
                    type="number"
                    value={cloudFeatures.storageGB}
                    onChange={handleCloudFeaturesChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxUsers">Máximo de Usuários</Label>
                  <Input
                    id="maxUsers"
                    name="maxUsers"
                    type="number"
                    min="1"
                    value={cloudFeatures.maxUsers}
                    onChange={handleCloudFeaturesChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxFileSize">Tamanho Máximo de Arquivo (MB) *</Label>
                  <Input
                    id="maxFileSize"
                    name="maxFileSize"
                    type="number"
                    value={cloudFeatures.maxFileSize}
                    onChange={handleCloudFeaturesChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxBandwidthGB">Banda Máxima (GB) - 0 = Ilimitado</Label>
                  <Input
                    id="maxBandwidthGB"
                    name="maxBandwidthGB"
                    type="number"
                    min="0"
                    value={cloudFeatures.maxBandwidthGB}
                    onChange={handleCloudFeaturesChange}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowPublicSharing"
                    name="allowPublicSharing"
                    checked={cloudFeatures.allowPublicSharing}
                    onCheckedChange={(checked) =>
                      setCloudFeatures({ ...cloudFeatures, allowPublicSharing: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowPublicSharing" className="font-normal cursor-pointer">
                    Permitir Compartilhamento Público
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowCustomDomain"
                    name="allowCustomDomain"
                    checked={cloudFeatures.allowCustomDomain}
                    onCheckedChange={(checked) =>
                      setCloudFeatures({ ...cloudFeatures, allowCustomDomain: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowCustomDomain" className="font-normal cursor-pointer">
                    Permitir Domínio Customizado
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supportLevel">Nível de Suporte</Label>
                <Select value={cloudFeatures.supportLevel} onValueChange={(value) =>
                  setCloudFeatures({ ...cloudFeatures, supportLevel: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BASIC">Básico</SelectItem>
                    <SelectItem value="PRIORITY">Prioritário</SelectItem>
                    <SelectItem value="PREMIUM">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedService === Service.AGENDE && (
          <Card>
            <CardHeader>
              <CardTitle>Features Agende</CardTitle>
              <CardDescription>Configure as features específicas do Agende</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxAppointmentsPerMonth">Máximo de Agendamentos/Mês *</Label>
                  <Input
                    id="maxAppointmentsPerMonth"
                    name="maxAppointmentsPerMonth"
                    type="number"
                    value={agendeFeatures.maxAppointmentsPerMonth}
                    onChange={handleAgendeFeaturesChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxOrganizations">Máximo de Organizações *</Label>
                  <Input
                    id="maxOrganizations"
                    name="maxOrganizations"
                    type="number"
                    value={agendeFeatures.maxOrganizations}
                    onChange={handleAgendeFeaturesChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxPointsPerOrganization">Máximo de Pontos/Organização *</Label>
                  <Input
                    id="maxPointsPerOrganization"
                    name="maxPointsPerOrganization"
                    type="number"
                    value={agendeFeatures.maxPointsPerOrganization}
                    onChange={handleAgendeFeaturesChange}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowCustomBranding"
                    name="allowCustomBranding"
                    checked={agendeFeatures.allowCustomBranding}
                    onCheckedChange={(checked) =>
                      setAgendeFeatures({ ...agendeFeatures, allowCustomBranding: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowCustomBranding" className="font-normal cursor-pointer">
                    Permitir Branding Customizado
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowWhitelabel"
                    name="allowWhitelabel"
                    checked={agendeFeatures.allowWhitelabel}
                    onCheckedChange={(checked) =>
                      setAgendeFeatures({ ...agendeFeatures, allowWhitelabel: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowWhitelabel" className="font-normal cursor-pointer">
                    Permitir Whitelabel
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supportLevel">Nível de Suporte</Label>
                <Select value={agendeFeatures.supportLevel} onValueChange={(value) =>
                  setAgendeFeatures({ ...agendeFeatures, supportLevel: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BASIC">Básico</SelectItem>
                    <SelectItem value="PRIORITY">Prioritário</SelectItem>
                    <SelectItem value="PREMIUM">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedService === Service.FREELA && (
          <Card>
            <CardHeader>
              <CardTitle>Features Freela</CardTitle>
              <CardDescription>Configure as features específicas do Freela</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxProjects">Máximo de Projetos *</Label>
                  <Input
                    id="maxProjects"
                    name="maxProjects"
                    type="number"
                    value={freelaFeatures.maxProjects}
                    onChange={handleFreelajFeaturesChange}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxClients">Máximo de Clientes *</Label>
                  <Input
                    id="maxClients"
                    name="maxClients"
                    type="number"
                    value={freelaFeatures.maxClients}
                    onChange={handleFreelajFeaturesChange}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowInvoicing"
                    name="allowInvoicing"
                    checked={freelaFeatures.allowInvoicing}
                    onCheckedChange={(checked) =>
                      setFreelajFeatures({ ...freelaFeatures, allowInvoicing: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowInvoicing" className="font-normal cursor-pointer">
                    Permitir Faturamento
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowTimeTracking"
                    name="allowTimeTracking"
                    checked={freelaFeatures.allowTimeTracking}
                    onCheckedChange={(checked) =>
                      setFreelajFeatures({ ...freelaFeatures, allowTimeTracking: checked as boolean })
                    }
                  />
                  <Label htmlFor="allowTimeTracking" className="font-normal cursor-pointer">
                    Permitir Rastreamento de Tempo
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supportLevel">Nível de Suporte</Label>
                <Select value={freelaFeatures.supportLevel} onValueChange={(value) =>
                  setFreelajFeatures({ ...freelaFeatures, supportLevel: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BASIC">Básico</SelectItem>
                    <SelectItem value="PRIORITY">Prioritário</SelectItem>
                    <SelectItem value="PREMIUM">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedService === Service.BUSINESS && (
          <Card>
            <CardHeader>
              <CardTitle>Features Business</CardTitle>
              <CardDescription>Configure as features específicas do Business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supportLevel">Nível de Suporte</Label>
                <Select value={businessFeatures.supportLevel} onValueChange={(value) =>
                  setBusinessFeatures({ ...businessFeatures, supportLevel: value })
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BASIC">Básico</SelectItem>
                    <SelectItem value="PRIORITY">Prioritário</SelectItem>
                    <SelectItem value="PREMIUM">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
            <CardDescription>Configurações de visibilidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isActive: checked as boolean })
                }
              />
              <Label htmlFor="isActive" className="font-normal cursor-pointer">
                Plano Ativo
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isPublic"
                name="isPublic"
                checked={formData.isPublic}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isPublic: checked as boolean })
                }
              />
              <Label htmlFor="isPublic" className="font-normal cursor-pointer">
                Plano Público
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 pt-4"
        >
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="text-base font-semibold h-11"
          >
            Cancelar
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading}
            className="text-base font-semibold h-11 px-8"
          >
            {isLoading ? 'Criando...' : 'Criar Plano'}
          </Button>
        </motion.div>
      </form>
      </div>
    </GlassBackground>
  );
}
