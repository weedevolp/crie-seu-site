export default function LandingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Novo Lançamento
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforme suas Ideias em Realidade Digital
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Crie seu site profissional hoje mesmo e destaque-se no mercado digital. 
                Preços especiais por tempo limitado!
              </p>
              <div className="space-x-4">
                <a 
                  href="#precos" 
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Começar Agora
                </a>
                <a 
                  href="#demo" 
                  className="inline-block bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Ver Demo
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-blue-600">+1000</span> clientes satisfeitos
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg transform rotate-2"></div>
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dashboard Preview" 
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa</h2>
            <p className="text-xl text-gray-600">Funcionalidades pensadas para o seu sucesso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Design Moderno",
                description: "Templates profissionais e responsivos para todos os dispositivos."
              },
              {
                icon: "⚡",
                title: "Alta Performance",
                description: "Carregamento rápido e otimizado para melhor experiência."
              },
              {
                icon: "🎯",
                title: "SEO Otimizado",
                description: "Melhor posicionamento nos mecanismos de busca."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para o seu negócio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Básico",
                price: "R$ 97",
                features: ["5 páginas", "Domínio grátis", "SSL incluso", "Suporte básico"]
              },
              {
                name: "Profissional",
                price: "R$ 197",
                features: ["10 páginas", "Domínio grátis", "SSL incluso", "Suporte prioritário", "SEO básico"]
              },
              {
                name: "Enterprise",
                price: "R$ 497",
                features: ["20 páginas", "Domínio grátis", "SSL incluso", "Suporte VIP", "SEO avançado", "Analytics"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/mês</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comece hoje mesmo e ganhe 30 dias de suporte gratuito!
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Seu-Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
