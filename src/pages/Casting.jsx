// src/pages/Casting.jsx (Exemplo)
import React, { useState } from "react";
import ModelCard from "../components/ModelCard";

//simulando dadosd de 12modelos
const allModels = [
  { id: 1, name: "Ava", tag: "Editorial", gender: "F", image: "url_ava" },
  { id: 2, name: "Liam", tag: "Passarela", gender: "M", image: "url_liam" },
  { id: 3, name: "Zara", tag: "Comercial", gender: "F", image: "url_zara" },
  { id: 4, name: "Caius", tag: "Fitness", gender: "M", image: "url_caius" },
  { id: 5, name: "Sofia", tag: "Editorial", gender: "F", image: "url_sofia" },
  { id: 6, name: "Lanny", tag: "Comercial", gender: "F", image: "url_lanny" },
  { id: 7, name: "Chloe", tag: "Passarela", gender: "F", image: "url_chloe" },
  { id: 8, name: "Sara", tag: "Comercial", gender: "F", image: "url_sara" },
  { id: 9, name: "Mia", tag: "Editorial", gender: "F", image: "url_mia" },
  { id: 10, name: "Lucas", tag: "Comercial", gender: "M", image: "url_lucas" },
  { id: 11, name: "Ella", tag: "Passarela", gender: "F", image: "url_ella" },
  { id: 12, name: "Sora", tag: "Editorial", gender: "F", image: "url_sora" },
];

export default function Casting() {
  //estate gerencia os modelos qu etão sendo exiibdos
  const [models, setModels] = useState(allModels);

  // Estado para o filtro ativo, para dar um estilo de "ativo" ao botão
  const [activeFilter, setActiveFilter] = useState("Todos");

  // 🛑 FUNÇÃO PRINCIPAL DE FILTRO
  const handleFilter = (filterTerm) => {
    // 1. Atualiza o estado do filtro ativo (para o estilo do botão)
    setActiveFilter(filterTerm);

    // 2. Lógica de Filtragem
    if (filterTerm === "Todos") {
      // Se for "Todos", exibe a lista original completa
      setModels(allModels);
      return;
    }

    // Determina o termo de comparação (Gênero ou Tag)
    let filteredList = allModels;

    if (genderTags.includes(filterTerm)) {
      // Filtro por Gênero: 'Feminino' -> 'F', 'Masculino' -> 'M'
      const genderCode = filterTerm === "Feminino" ? "F" : "M";

      // Usa o .filter() para criar uma NOVA lista (Imutabilidade!)
      filteredList = allModels.filter((model) => model.gender === genderCode);
    } else if (uniqueTags.includes(filterTerm)) {
      // Filtro por Tag (Editorial, Passarela, etc.)

      // Usa o .filter() para criar uma NOVA lista
      filteredList = allModels.filter((model) => model.tag === filterTerm);
    }

    // 3. Atualiza o estado dos modelos visíveis (re-renderiza o componente)
    setModels(filteredList);
  };

  // Funcao auxiliar para estilos (dar destaque ao filtro ativo)
  const getButtonClass = (term) =>
    `py-2 px-4 uppercase text-sm tracking-widest transition-all ${
      activeFilter === term
        ? "text-velvet-white border-b-2 border-velvet-white" // Estilo Ativo
        : "text-velvet-gray hover:text-velvet-white/80" // Estilo Inativo
    }`;
  //lista de tags para filtros
  const uniqueTags = [...new Set(allModels.map((model) => model.tag))];

  const genderTags = ["Feminino", "Masculino"];
  return (
    <div className="pt-8 pb-20 md:pt-16 md:pb-32 container mx-auto px-4">
      <h1 className="text-6xl md:text-8xl font-display font-bold text-center uppercase mb-16">
        Nosso Casting
      </h1>
      {/*Bara de filtros */}
  {/* BARRA DE FILTROS */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-12 border-b border-velvet-gray/50 pb-4">
                
                {/* Botão "Todos" */}
                <button 
                    onClick={() => handleFilter('Todos')}
                    className={getButtonClass('Todos')}
                >
                    Todos
                </button>
                
                {/* Filtros por Gênero */}
                {genderTags.map(term => (
                    <button 
                        key={term}
                        onClick={() => handleFilter(term)} // Ao clicar, passa o termo para a função
                        className={getButtonClass(term)}
                    >
                        {term}
                    </button>
                ))}

                {/* Filtros por Tag de Estilo */}
                {uniqueTags.map(term => (
                    <button 
                        key={term}
                        onClick={() => handleFilter(term)} // Ao clicar, passa o termo para a função
                        className={getButtonClass(term)}
                    >
                        {term}
                    </button>
                ))}
            </div>
      {/* Aqui entrará a lógica de .map() para tags e gênero */}
      {/* GRID DE MODELOS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            modelName={model.name}
            tag={model.tag}
            image={model.image} // Usaremos a imagem padrão do ModelCard por enquanto
          />
        ))}
      </div>

      {/* Se o Array 'models' estiver vazio após a filtragem */}
      {models.length === 0 && (
        <p className="text-center text-xl mt-12">
          Nenhum modelo encontrado com esses filtros.
        </p>
      )}
    </div>
  );
}
