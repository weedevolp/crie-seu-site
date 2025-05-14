'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface Process {
  id: string
  placa: string
  status: string
  lastUpdate: string
  description: string
  nextStep: string
}

// Simulated processes data
const mockProcesses: Process[] = [
  {
    id: '1',
    placa: 'ABC1234',
    status: 'Em andamento',
    lastUpdate: '2024-01-15',
    description: 'Documentação em análise pelo DETRAN',
    nextStep: 'Aguardando aprovação final'
  },
  {
    id: '2',
    placa: 'XYZ5678',
    status: 'Concluído',
    lastUpdate: '2024-01-14',
    description: 'Processo finalizado com sucesso',
    nextStep: 'Retirar documentação na loja'
  }
]

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [processes, setProcesses] = useState<Process[]>(mockProcesses)
  const [selectedProcess, setSelectedProcess] = useState<Process | null>(null)
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password verification (in a real app, use proper authentication)
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Senha incorreta')
    }
  }

  const handleUpdateProcess = (process: Process) => {
    setSelectedProcess(process)
    setIsUpdateDialogOpen(true)
  }

  const handleSaveUpdate = (updatedProcess: Process) => {
    setProcesses(processes.map(p => 
      p.id === updatedProcess.id ? updatedProcess : p
    ))
    setIsUpdateDialogOpen(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Área Administrativa</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gerenciamento de Processos</h1>
          <Button 
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
          >
            Sair
          </Button>
        </div>

        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Placa</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Próximo Passo</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processes.map((process) => (
                <TableRow key={process.id}>
                  <TableCell className="font-medium">{process.placa}</TableCell>
                  <TableCell>{process.status}</TableCell>
                  <TableCell>{process.lastUpdate}</TableCell>
                  <TableCell>{process.description}</TableCell>
                  <TableCell>{process.nextStep}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleUpdateProcess(process)}
                    >
                      Atualizar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Atualizar Processo</DialogTitle>
            </DialogHeader>
            {selectedProcess && (
              <div className="space-y-4 py-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <Input
                    value={selectedProcess.status}
                    onChange={(e) => setSelectedProcess({
                      ...selectedProcess,
                      status: e.target.value
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <Textarea
                    value={selectedProcess.description}
                    onChange={(e) => setSelectedProcess({
                      ...selectedProcess,
                      description: e.target.value
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Próximo Passo
                  </label>
                  <Input
                    value={selectedProcess.nextStep}
                    onChange={(e) => setSelectedProcess({
                      ...selectedProcess,
                      nextStep: e.target.value
                    })}
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setIsUpdateDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => handleSaveUpdate(selectedProcess)}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
