import Image from 'next/image'
import { Card } from "@/components/ui/card"

const services = [
  {
    title: 'Transferência de Propriedade',
    description: 'Realizamos todo o processo de transferência do seu veículo com segurança e agilidade. Cuidamos de toda a documentação necessária junto ao DETRAN-MG.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
  },
  {
    title: 'Licenciamento Anual',
    description: 'Facilitamos o processo de licenciamento anual do seu veículo, garantindo que toda a documentação esteja em ordem e atualizada conforme as exigências do DETRAN.',
    image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg'
  },
  {
    title: 'Primeiro Emplacamento',
    description: 'Auxiliamos em todo o processo de primeiro emplacamento do seu veículo novo, cuidando de toda a burocracia necessária.',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg'
  },
  {
    title: 'Regularização de Documentos',
    description: 'Ajudamos na regularização de documentos atrasados ou com pendências, resolvendo questões junto ao DETRAN-MG.',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg'
  },
  {
    title: 'Comunicação de Venda',
    description: 'Realizamos a comunicação de venda do seu veículo junto ao DETRAN, garantindo sua segurança jurídica após a negociação.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
  },
  {
    title: 'Consulta de Débitos',
    description: 'Verificamos todos os débitos existentes do seu veículo, incluindo multas, IPVA, licenciamento e seguro DPVAT.',
    image: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg'
  }
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-600">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades
            relacionadas a documentação veicular
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden bg-white">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="text-gray-600 mb-8">
            Entre em contato conosco para mais informações sobre nossos serviços
            ou para tirar qualquer dúvida.
          </p>
          <div className="inline-flex items-center justify-center space-x-4">
            <a 
              href="tel:+553199999999"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Ligar Agora
            </a>
            <a 
              href="https://wa.me/553199999999"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
