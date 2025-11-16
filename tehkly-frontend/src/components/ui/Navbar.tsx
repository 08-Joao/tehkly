"use client"

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { MenuDots } from '@solar-icons/react/ssr';
import { User, CreditCard, LogOut, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
    { href: '/subscription-plans', label: 'Planos' },
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
                className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-6 rounded-2xl border border-foreground/10 bg-card/50 px-8 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:flex"
            >
                <button onClick={() => router.push('/')} className="flex items-center gap-2 text-2xl font-bold text-foreground cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src="/teh-rex_background.png" alt="Tehkly Logo" width={32} height={32} />
                    <span>Tehkly</span>
                </button>
                <div className="h-6 w-px bg-foreground/10"></div>
                <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    {navLinks.map(link => (
                        <button
                            key={link.href}
                            onClick={() => handleNavLink(link.href)}
                            className="transition-colors hover:text-foreground cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <div className="h-6 w-px bg-foreground/10"></div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    {/* Botões de autenticação para Desktop */}
                    {isCheckingAuth ? (
                        // Skeleton loading state - circular avatar
                        <div className="h-10 w-10 rounded-full bg-foreground/10 animate-pulse"></div>
                    ) : isLoggedIn ? (
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <Avatar src={userPhoto} fallback="U" alt="User avatar" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
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
                                        <DropdownMenuItem onClick={() => {
                                            console.log('Navigating to admin panel');
                                            window.location.href = '/admin/subscription-plans';
                                        }}>
                                            <Shield className="mr-2 h-4 w-4" />
                                            <span>Painel de administração</span>
                                        </DropdownMenuItem>
                                    </>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleSignOut} variant="destructive">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Sair</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Button variant="outline" onClick={handleSignUpClick}>Sign Up</Button>
                            <Button onClick={handleSignInClick}>Sign In</Button>
                        </>
                    )}
                </div>
            </motion.nav>

            {/* Navbar para Mobile */}
            <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-foreground/10 bg-background/80 p-4 backdrop-blur-lg md:hidden">
                <button onClick={() => router.push('/')} className="flex items-center gap-2 text-xl font-bold text-foreground cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src="/teh-rex_background.png" alt="Tehkly Logo" width={28} height={28} />
                    <span>Tehkly</span>
                </button>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuDots />
                </Button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 left-0 w-full bg-background p-4 pt-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col items-center gap-6 text-lg text-muted-foreground">
                                {navLinks.map(link => (
                                    <button
                                        key={link.href}
                                        onClick={() => {
                                            handleNavLink(link.href);
                                            setIsMenuOpen(false);
                                        }}
                                        className="transition-colors hover:text-foreground cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <div className="my-4 h-px w-full bg-foreground/10"></div>

                                {/* Botões de autenticação para Mobile */}
                                {isCheckingAuth ? (
                                    // Skeleton loading state for mobile - just avatar
                                    <div className="h-16 w-16 rounded-full bg-foreground/10 animate-pulse"></div>
                                ) : isLoggedIn ? (
                                    <>
                                        <div className="flex flex-col items-center gap-4 w-full">
                                            <Avatar src={userPhoto} fallback="U" alt="User avatar" className="h-16 w-16" />
                                            <Button
                                                className="w-full"
                                                variant="outline"
                                                onClick={() => {
                                                    handleProfileClick();
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <User className="mr-2 h-4 w-4" />
                                                Perfil
                                            </Button>
                                            <Button
                                                className="w-full"
                                                variant="outline"
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
                                                    className="w-full"
                                                    variant="outline"
                                                    onClick={() => {
                                                        window.location.href = '/admin/subscription-plans';
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <Shield className="mr-2 h-4 w-4" />
                                                    Painel de administração
                                                </Button>
                                            )}
                                            <Button
                                                className="w-full"
                                                variant="destructive"
                                                onClick={() => {
                                                    handleSignOut();
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Sign Out
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Button className="w-full" variant="outline" onClick={handleSignUpClick}>Sign Up</Button>
                                        <Button className="w-full" onClick={handleSignInClick}>Sign In</Button>
                                    </>
                                )}

                                {/* Componente ThemeToggle reutilizado para consistência */}
                                <div className="w-full">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};