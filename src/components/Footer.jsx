// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react'; // Ícones Sociais
                                   
export default function Footer() {
    return (
        // Footer com borda sutil no topo e padding amplo
        <footer className="bg-velvet-black border-t border-velvet-gray/30 mt-20 py-12 md:py-20">
            <div className="container mx-auto px-4">
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-velvet-gray">
                    
                    {/* Coluna 1: Logo e Copyright */}
                    <div>
                        <Link to="/" className="text-3xl font-display font-semibold tracking-wider text-velvet-white hover:text-velvet-gray transition-colors">
                            VELVET
                        </Link>
                        <p className="mt-4 text-sm">
                            &copy; {new Date().getFullYear()} Velvet Models.
                            <br />
                            Todos os direitos reservados.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-bold text-velvet-white mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/models" className="hover:text-velvet-white transition-colors">Casting Completo</Link></li>
                            <li><Link to="/join" className="hover:text-velvet-white transition-colors">Torne-se Modelo</Link></li>
                            {/* Um link fictício para Serviços (para fins de estrutura) */}
                            <li><Link to="/services" className="hover:text-velvet-white transition-colors">Serviços</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h3 className="text-lg font-bold text-velvet-white mb-4">Contato</h3>
                        <p>
                            Avenida da Moda, 123
                            <br />
                            São Paulo, Brasil
                        </p>
                        <p className="mt-2 hover:text-velvet-white transition-colors">
                            <a href="mailto:contato@velvet.com">contato@velvet.com</a>
                        </p>
                    </div>

                    {/* Coluna 4: Redes Sociais */}
                    <div>
                        <h3 className="text-lg font-bold text-velvet-white mb-4">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-velvet-white transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-velvet-white transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="mailto:info@velvet.com" aria-label="Email" className="hover:text-velvet-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}