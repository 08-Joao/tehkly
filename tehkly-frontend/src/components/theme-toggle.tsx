'use client'

import { Sun2, Monitor, MoonStars } from '@solar-icons/react/ssr'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Evita hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setIsAnimating(true)
    setTimeout(() => {
      setTheme(newTheme)
      setIsAnimating(false)
    }, 300)
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full text-secondary bg-card border border-border/20 shadow-lg backdrop-blur-xl"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <MoonStars className="w-5 h-5" />
      case 'light':
        return <Sun2 className="w-5 h-5" />
      default:
        return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <div
            style={{
              transform: isAnimating ? 'rotate(360deg) scale(0.8)' : 'rotate(0deg) scale(1)',
              opacity: isAnimating ? 0.4 : 1,
              transition: 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}
          >
            {getThemeIcon()}
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuLabel className="font-semibold">Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === 'light'}
          onCheckedChange={() => handleThemeChange('light')}
          className="cursor-pointer"
        >
          <Sun2 className="mr-2 h-4 w-4" />
          <span>Claro</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'dark'}
          onCheckedChange={() => handleThemeChange('dark')}
          className="cursor-pointer"
        >
          <MoonStars className="mr-2 h-4 w-4" />
          <span>Escuro</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === 'system'}
          onCheckedChange={() => handleThemeChange('system')}
          className="cursor-pointer"
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>Sistema</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
