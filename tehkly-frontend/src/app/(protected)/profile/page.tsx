'use client';

import React from 'react'
import { GlassBackground } from '@/components/backgrounds/GlassBackground';

function Profile() {
  return (
    <GlassBackground variant="minimal" className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8">Perfil</h1>
        <p className="text-muted-foreground">Conteúdo do perfil em desenvolvimento...</p>
      </div>
    </GlassBackground>
  )
}

export default Profile
