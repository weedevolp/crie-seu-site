export default function BlogDemo() {
  const posts = [
    {
      title: "10 Tendências de Design para 2024",
      excerpt: "Descubra as principais tendências de design que vão dominar o próximo ano...",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      date: "10 Jan 2024",
      category: "Design",
      readTime: "5 min"
    },
    {
      title: "Como Melhorar a Performance do Seu Site",
      excerpt: "Dicas práticas para otimizar a velocidade e performance do seu website...",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      date: "8 Jan 2024",
      category: "Desenvolvimento",
      readTime: "8 min"
    },
    {
      title: "Guia de SEO para Iniciantes",
      excerpt: "Aprenda os fundamentos de SEO para melhorar o ranking do seu site...",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      date: "5 Jan 2024",
      category: "Marketing",
      readTime: "10 min"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold">Seu-Site Blog</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Categorias</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg')"
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative py-24 px-8 text-white text-center">
              <span className="inline-block bg-blue-600 text-sm px-3 py-1 rounded-full mb-4">
                Destaque
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                O Futuro do Desenvolvimento Web
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                Explore as tecnologias e tendências que estão moldando o futuro do desenvolvimento web.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span>Por João Silva</span>
                <span>•</span>
                <span>12 Jan 2024</span>
                <span>•</span>
                <span>15 min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Últimos Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Ler mais
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Design", count: 12 },
              { name: "Desenvolvimento", count: 24 },
              { name: "Marketing", count: 8 },
              { name: "Tecnologia", count: 15 }
            ].map((category, index) => (
              <a 
                key={index}
                href="#"
                className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <h3 className="font-semibold group-hover:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80">
                  {category.count} artigos
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Receba as últimas novidades e artigos diretamente no seu email.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Seu-Site Blog</h3>
              <p className="text-gray-400">
                Compartilhando conhecimento e experiências sobre tecnologia e desenvolvimento.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Design</a></li>
                <li><a href="#" className="hover:text-white">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Tecnologia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Seu-Site Blog. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
