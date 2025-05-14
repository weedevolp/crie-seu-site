import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Vamos Criar Seu Site?</h1>
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-gray-600">
            Preencha o formulário abaixo e conversaremos sobre seu projeto via WhatsApp.
            Estou pronto para transformar sua ideia em realidade!
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
