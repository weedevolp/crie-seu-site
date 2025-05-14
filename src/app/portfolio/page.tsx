import { Card } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Tipos de Sites que Desenvolvemos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Site Institucional */}
          <a href="/demos/institucional" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Site Institucional</h3>
                <p className="text-gray-600">
                  Apresente sua empresa de forma profissional e atraia mais clientes com um site moderno e responsivo.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>

          {/* E-commerce */}
          <a href="/demos/loja" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Loja Virtual</h3>
                <p className="text-gray-600">
                  Venda seus produtos online com uma loja virtual completa e fácil de gerenciar.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>

          {/* Landing Page */}
          <a href="/demos/landing" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
                <p className="text-gray-600">
                  Converta visitantes em clientes com páginas otimizadas para conversão.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>

          {/* Blog */}
          <a href="/demos/blog" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Blog</h3>
                <p className="text-gray-600">
                  Compartilhe conteúdo de qualidade e estabeleça autoridade no seu nicho.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>

          {/* Portfolio */}
          <a href="/demos/portfolio" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfólio</h3>
                <p className="text-gray-600">
                  Mostre seu trabalho de forma elegante e profissional.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>

          {/* Sistema Web */}
          <a href="/demos/sistema" target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistema Web</h3>
                <p className="text-gray-600">
                  Automatize processos com sistemas web personalizados para seu negócio.
                </p>
                <div className="mt-4 text-blue-600 hover:text-blue-700">
                  Ver demonstração →
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>
    </div>
  )
}
