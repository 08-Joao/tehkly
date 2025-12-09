"use client"

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { Menu, X, Sparkles } from 'lucide-react';
import { User, CreditCard, LogOut, Shield, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "../theme-toggle";
import { Avatar } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/contexts/AuthContext';


const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#projetos', label: 'Projetos' },
    { href: '/subscription-plans', label: 'Planos', badge: 'Novo' },
    { href: '#contato', label: 'Contato' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoggedIn, isCheckingAuth, isAdmin, userPhoto, signOut } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    // Define as URLs baseadas no ambiente
    const isProduction = process.env.NODE_ENV === 'production';
    const authBaseUrl = isProduction ? 'https://auth.tehkly.com' : 'http://localhost:3004';

    const signInUrl = `${authBaseUrl}/signin`;
    const signUpUrl = `${authBaseUrl}/signup`;

    const handleNavLink = (href: string) => {
        // Se o link é uma âncora
        if (href.startsWith('#')) {
            // Se estamos na home, apenas scroll para a âncora
            if (pathname === '/') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Se não estamos na home, redireciona para home com a âncora
                router.push(`/${href}`);
            }
        } else {
            // Se não é âncora, navega normalmente
            router.push(href);
        }
    };

    const handleSignInClick = () => {
        window.location.href = signInUrl;
    };

    const handleSignUpClick = () => {
        window.location.href = signUpUrl;
    };

    const handleSignOut = async () => {
        await signOut();
    };

    const handleProfileClick = () => {
        window.location.href = '/profile';
    };

    const handleSubscriptionsClick = () => {
        window.location.href = '/subscriptions';
    };

    return (
        <header>
            {/* Navbar para Desktop */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-background/80 border-b border-border/50 backdrop-blur-xl"
            >
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.button 
                            onClick={() => router.push('/')} 
                            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image 
                                src="/teh-rex_background.png" 
                                alt="Tehkly Logo" 
                                width={32} 
                                height={32}
                            />
                            <span className="text-xl font-bold text-foreground">
                                Tehkly
                            </span>
                        </motion.button>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-1">
                            {navLinks.map(link => (
                                <motion.button
                                    key={link.href}
                                    onClick={() => handleNavLink(link.href)}
                                    whileHover={{ y: -2 }}
                                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    <span className="flex items-center gap-2">
                                        {link.label}
                                        {link.badge && <Badge variant="secondary" className="text-xs">{link.badge}</Badge>}
                                    </span>
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            
                            {/* Auth Buttons */}
                            {isCheckingAuth ? (
                                <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                            ) : isLoggedIn ? (
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <motion.button 
                                            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"

                                        >
                                            <Avatar 
                                                src={userPhoto} 
                                                fallback="U" 
                                                alt="User avatar"
                                            />
                                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                        </motion.button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-56">
                                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={handleProfileClick}>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Perfil</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={handleSubscriptionsClick}>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Minhas assinaturas</span>
                                        </DropdownMenuItem>
                                        {isAdmin && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => window.location.href = '/admin/subscription-plans'}>
                                                    <Shield className="mr-2 h-4 w-4" />
                                                    <span>Painel Admin</span>
                                                </DropdownMenuItem>
                                            </>
                                        )}
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Sair</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Button 
                                        variant="ghost" 
                                        onClick={handleSignInClick}
                                        className="font-medium"
                                    >
                                        Entrar
                                    </Button>
                                    <Button 
                                        onClick={handleSignUpClick}
                                        className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        Começar
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Navbar para Mobile */}
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/80 border-b border-border/50 backdrop-blur-xl"
            >
                <div className="flex items-center justify-between px-6 h-16">
                    <motion.button 
                        onClick={() => router.push('/')} 
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image 
                            src="/teh-rex_background.png" 
                            alt="Tehkly Logo" 
                            width={28} 
                            height={28}
                        />
                        <span className="text-lg font-bold text-foreground">
                            Tehkly
                        </span>
                    </motion.button>
                    
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </motion.div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-background/95 md:hidden overflow-y-auto border-l border-border/50 backdrop-blur-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 h-16 border-b border-border/50">
                                <span className="text-lg font-bold text-foreground">
                                    Menu
                                </span>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Navigation Links */}
                                <div className="space-y-2">
                                    {navLinks.map(link => (
                                        <motion.button
                                            key={link.href}
                                            onClick={() => {
                                                handleNavLink(link.href);
                                                setIsMenuOpen(false);
                                            }}
                                            whileHover={{ x: 4 }}
                                            className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors rounded-lg flex items-center justify-between"
                                        >
                                            <span>{link.label}</span>
                                            {link.badge && <Badge variant="secondary" className="text-xs">{link.badge}</Badge>}
                                        </motion.button>
                                    ))}
                                </div>

                                <div className="h-px bg-border/50" />

                                {/* Auth Section */}
                                {isCheckingAuth ? (
                                    <div className="flex flex-col items-center gap-4 py-8">
                                        <div className="h-16 w-16 rounded-full bg-muted animate-pulse" />
                                    </div>
                                ) : isLoggedIn ? (
                                    <div className="space-y-4">
                                        {/* User Info */}
                                        <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                                            <Avatar 
                                                src={userPhoto} 
                                                fallback="U" 
                                                alt="User avatar" 
                                                className="h-12 w-12"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-foreground text-sm">
                                                    Minha Conta
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="space-y-2">
                                            <Button
                                                className="w-full justify-start"
                                                variant="ghost"
                                                onClick={() => {
                                                    handleProfileClick();
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <User className="mr-2 h-4 w-4" />
                                                Perfil
                                            </Button>
                                            <Button
                                                className="w-full justify-start"
                                                variant="ghost"
                                                onClick={() => {
                                                    handleSubscriptionsClick();
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <CreditCard className="mr-2 h-4 w-4" />
                                                Minhas assinaturas
                                            </Button>
                                            {isAdmin && (
                                                <Button
                                                    className="w-full justify-start"
                                                    variant="ghost"
                                                    onClick={() => {
                                                        window.location.href = '/admin/subscription-plans';
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <Shield className="mr-2 h-4 w-4" />
                                                    Painel Admin
                                                </Button>
                                            )}
                                        </div>

                                        <div className="h-px bg-border/50" />

                                        <Button
                                            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                                            variant="ghost"
                                            onClick={() => {
                                                handleSignOut();
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Sair
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <Button 
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                            onClick={() => {
                                                handleSignUpClick();
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            Começar
                                        </Button>
                                        <Button 
                                            className="w-full"
                                            variant="outline"
                                            onClick={() => {
                                                handleSignInClick();
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            Entrar
                                        </Button>
                                    </div>
                                )}

                                <div className="h-px bg-border/50" />

                                {/* Theme Toggle */}
                                <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50">
                                    <span className="font-medium text-foreground text-sm">
                                        Tema
                                    </span>
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};