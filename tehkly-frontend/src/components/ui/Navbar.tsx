import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { MenuDots } from '@solar-icons/react/ssr'; 
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";


const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Define a URL de sign-in baseada no ambiente
    const signInUrl = process.env.NODE_ENV === 'production' 
      ? 'https://auth.tehkly.com/sign' 
      : 'http://localhost:3004/signin';

    const handleSignInClick = () => {
        window.location.href = signInUrl;
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
                <a href="#" className="flex items-center gap-2 text-2xl font-bold text-foreground">
                    <Image src="/teh-rex_background.png" alt="Tehkly Logo" width={32} height={32} />
                    <span>Tehkly</span>
                </a>
                <div className="h-6 w-px bg-foreground/10"></div>
                <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">{link.label}</a>
                    ))}
                </div>
                <div className="h-6 w-px bg-foreground/10"></div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    {/* Botão de Sign In para Desktop */}
                    <Button onClick={handleSignInClick}>Sign In</Button>
                </div>
            </motion.nav>

            {/* Navbar para Mobile */}
            <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-foreground/10 bg-background/80 p-4 backdrop-blur-lg md:hidden">
                <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <Image src="/teh-rex_background.png" alt="Tehkly Logo" width={28} height={28} />
                    <span>Tehkly</span>
                </a>
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
                                    <a key={link.href} href={link.href} className="transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                                        {link.label}
                                    </a>
                                ))}
                                <div className="my-4 h-px w-full bg-foreground/10"></div>
                                {/* Botão de Sign In para Mobile */}
                                <Button className="w-full" onClick={handleSignInClick}>Sign In</Button>
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