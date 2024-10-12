import { useEffect, useState, useRef } from 'react';

// Hook personalizado que detecta se um elemento está visível ao rolar a página e aplica uma animação
export const useScrollAnimation = () => {
  // Estado que guarda se o elemento está visível ou não na tela
  const [isVisible, setIsVisible] = useState(false);

  // useRef é usado para criar uma referência para o elemento DOM que será observado
  const elementRef = useRef(null);

  // useEffect é executado após a renderização do componente e configura o IntersectionObserver
  useEffect(() => {
    // Cria uma nova instância do IntersectionObserver para monitorar se o elemento entra ou sai da tela
    const observer = new IntersectionObserver(
      // Callback que recebe as entradas observadas e verifica se o elemento está visível
      ([entry]) => {
        // Se o elemento está visível (intersectando com a viewport)
        if (entry.isIntersecting) {
          setIsVisible(true); // Atualiza o estado para indicar que o elemento está visível
        }
      },
      // Configuração do observer, threshold indica que 10% do elemento precisa estar visível
      { threshold: 0.2},
    );

    // Verifica se a referência ao elemento DOM foi atribuída corretamente
    if (elementRef.current) {
      // Inicia a observação do elemento referenciado
      observer.observe(elementRef.current);
    }

    // Cleanup: Quando o componente é desmontado ou o efeito é reexecutado, desativa a observação
    return () => {
      if (elementRef.current) {
        // Para de observar o elemento quando ele sai de cena
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // O array vazio [] faz com que o useEffect seja executado apenas uma vez ao montar o componente

  // Retorna um objeto contendo o estado de visibilidade e a referência ao elemento DOM
  return { isVisible, elementRef };
};
