// src/pages/Scouting.jsx
import React,{useState} from 'react';
import {gsap} from 'gsap';
import ClimbImage from '../assets/img/art-1.png'

export default function Scouting() { // <--- A palavra-chave 'default' é obrigatória aqui

  // 🛑 1. O ESTADO DO FORMULÁRIO (State Object)
    // Em vez de criar um useState para cada campo (nome, email, altura...),
    // criamos um ÚNICO objeto para agrupar tudo. É mais limpo.
  const[formData, setFormData]=useState({
    fullName:'',
    email:'',
    instagram:'',
    height:'',
    age:'',
    message:''
  })
  // Estado para controlar se o formulário foi enviado (para mostrar msg de sucesso)
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 🛑 2. A MÁGICA DO 'HANDLE CHANGE'
    // Esta função serve para TODOS os inputs.
    const handleChange = (e) => {
        const { name, value } = e.target; // Pega o nome do campo (ex: "email") e o que foi digitado
        
        // Atualizamos o objeto mantendo o que já existia (...prev) e mudando só a chave atual ([name])
        setFormData(prev => ({
            ...prev,
            [name]: value 
        }));
    };

    // 🛑 3. O ENVIO (SUBMIT)
    const handleSubmit = (e) => {
        e.preventDefault(); // IMPORTANTE: Previne que a página recarregue (padrão do HTML)
        
        // Aqui você enviaria os dados para um Backend (API).
        // Como não temos backend, vamos simular um sucesso após 1 segundo.
        console.log("Dados enviados:", formData);
        
        setTimeout(() => {
            setIsSubmitted(true);
            // Opcional: Rolar a página para o topo ou mostrar animação
        }, 1000);
    };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-velvet-black">
            
            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                
                {/* COLUNA 1: Texto Inspiracional + Imagem */}
                <div className="hidden md:block space-y-8">
                    <h1 className="text-6xl font-display font-bold uppercase leading-tight">
                        Seja o Próximo <span className="text-transparent bg-clip-text bg-gradient-to-r from-velvet-white to-velvet-gray">Ícone.</span>
                    </h1>
                    <p className="text-xl text-velvet-gray leading-relaxed">
                        Estamos sempre à procura de novos rostos que desafiem os padrões e tragam autenticidade. 
                        Se você tem atitude, estilo e paixão, a Velvet é o seu lugar.
                    </p>
                    <div className="h-64 w-full rounded-lg overflow-hidden relative">
                         {/* Imagem decorativa (Unsplash direto para facilitar) */}
                        <img 
                            src={ClimbImage} 
                            alt="Scouting" 
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                </div>

                {/* COLUNA 2: O Formulário */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
                    
                    {isSubmitted ? (
                        // MENSAGEM DE SUCESSO (Renderização Condicional)
                        <div className="text-center py-20 space-y-4 animate-fade-in">
                            <h2 className="text-3xl font-display text-velvet-white">Inscrição Recebida!</h2>
                            <p className="text-velvet-gray">Nossa equipe entrará em contato caso seu perfil se encaixe em nossos projetos atuais.</p>
                            <button 
                                onClick={() => setIsSubmitted(false)} // Reseta para enviar outro
                                className="mt-4 text-sm underline hover:text-white"
                            >
                                Enviar outra inscrição
                            </button>
                        </div>
                    ) : (
                        // O FORMULÁRIO REAL
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-display uppercase tracking-widest mb-6 border-b border-gray-700 pb-2">Ficha de Inscrição</h2>
                            
                            {/* Input: Nome */}
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-wider text-velvet-gray">Nome Completo</label>
                                <input 
                                    type="text" 
                                    name="fullName" // O 'name' deve ser IGUAL à chave no useState
                                    value={formData.fullName} 
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors"
                                    placeholder="Ex: Maria Silva"
                                />
                            </div>

                            {/* Inputs: Email e Instagram (Grid) */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider text-velvet-gray">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider text-velvet-gray">Instagram</label>
                                    <input 
                                        type="text" 
                                        name="instagram" 
                                        value={formData.instagram} 
                                        onChange={handleChange}
                                        placeholder="@seu.perfil"
                                        className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Inputs: Altura e Idade */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider text-velvet-gray">Altura (cm)</label>
                                    <input 
                                        type="number" 
                                        name="height" 
                                        value={formData.height} 
                                        onChange={handleChange}
                                        placeholder="175"
                                        className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wider text-velvet-gray">Idade</label>
                                    <input 
                                        type="number" 
                                        name="age" 
                                        value={formData.age} 
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Textarea: Mensagem */}
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-wider text-velvet-gray">Sobre você</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors resize-none"
                                    placeholder="Conte-nos um pouco sobre sua experiência..."
                                ></textarea>
                            </div>

                            {/* Botão Submit */}
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-white text-velvet-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4"
                            >
                                Enviar Aplicação
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
  );
}