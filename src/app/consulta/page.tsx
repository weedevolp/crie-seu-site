'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

// Define the process info type
interface ProcessInfo {
  status: string
  lastUpdate: string
  description: string
  nextStep: string
}

// Define the processes type
type Processes = {
  [key: string]: ProcessInfo
}

// Simulated process data (in a real app, this would come from a database)
const mockProcesses: Processes = {
  'ABC1234': {
    status: 'Em andamento',
    lastUpdate: '2024-01-15',
    description: 'Documentação em análise pelo DETRAN',
    nextStep: 'Aguardando aprovação final'
  },
  'XYZ5678': {
    status: 'Concluído',
    lastUpdate: '2024-01-14',
    description: 'Processo finalizado com sucesso',
    nextStep: 'Retirar documentação na loja'
  }
}

export default function ConsultaPage() {
  const [placa, setPlaca] = useState('')
  const [processInfo, setProcessInfo] = useState<ProcessInfo | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleConsulta = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setProcessInfo(null)
    setIsLoading(true)

    // Validate license plate format (simplified validation)
    const placaRegex = /^[A-Z]{3}[0-9]{4}$/
    if (!placaRegex.test(placa)) {
      setError('Por favor, insira uma placa válida no formato ABC1234')
      setIsLoading(false)
      return
    }

    // Simulate API call delay
    setTimeout(() => {
      const process = mockProcesses[placa]
      if (process) {
        setProcessInfo(process)
      } else {
        setError('Processo não encontrado para esta placa')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Consulta de Processo</h1>
          <p className="text-xl text-gray-600">
            Digite a placa do seu veículo para consultar o andamento do processo
          </p>
        </div>

        {/* Search Form */}
        <Card className="p-6 mb-8">
          <form onSubmit={handleConsulta} className="space-y-4">
            <div>
              <label htmlFor="placa" className="block text-sm font-medium text-gray-700 mb-2">
                Placa do Veículo
              </label>
              <Input
                id="placa"
                type="text"
                placeholder="Digite a placa (ex: ABC1234)"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                maxLength={7}
                className="uppercase"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Consultando...' : 'Consultar'}
            </Button>
          </form>
        </Card>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertTitle>Erro na consulta</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Process Information */}
        {processInfo && (
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Informações do Processo</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="mt-1 text-lg">{processInfo.status}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Última Atualização</h3>
                <p className="mt-1 text-lg">{processInfo.lastUpdate}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Descrição</h3>
                <p className="mt-1 text-lg">{processInfo.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Próximo Passo</h3>
                <p className="mt-1 text-lg">{processInfo.nextStep}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procurava ou precisa de ajuda?
          </p>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <a href="tel:+553199999999">Ligar para Suporte</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/553199999999">WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
