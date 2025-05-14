export default function SistemaDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Sistema Web</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Clientes</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Relatórios</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Configurações</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-500 text-sm mb-2">Total de Clientes</div>
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-green-600 text-sm mt-2">↑ 12% este mês</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-500 text-sm mb-2">Vendas Mensais</div>
            <div className="text-3xl font-bold">R$ 45.678</div>
            <div className="text-green-600 text-sm mt-2">↑ 8% este mês</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-500 text-sm mb-2">Tickets Abertos</div>
            <div className="text-3xl font-bold">27</div>
            <div className="text-red-600 text-sm mt-2">↑ 3% este mês</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-500 text-sm mb-2">Taxa de Conversão</div>
            <div className="text-3xl font-bold">2.4%</div>
            <div className="text-green-600 text-sm mt-2">↑ 4% este mês</div>
          </div>
        </div>

        {/* Recent Activity & Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              {[
                { action: "Novo cliente cadastrado", time: "Há 5 minutos", user: "João Silva" },
                { action: "Venda finalizada", time: "Há 12 minutos", user: "Maria Santos" },
                { action: "Ticket respondido", time: "Há 25 minutos", user: "Pedro Oliveira" },
                { action: "Relatório gerado", time: "Há 1 hora", user: "Ana Costa" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">
                      {activity.time} • por {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Tarefas Pendentes</h2>
            <div className="space-y-4">
              {[
                { task: "Revisar relatório mensal", priority: "Alta", due: "Hoje" },
                { task: "Reunião com cliente", priority: "Média", due: "Amanhã" },
                { task: "Atualizar documentação", priority: "Baixa", due: "Em 3 dias" },
                { task: "Preparar apresentação", priority: "Alta", due: "Em 2 dias" }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>{task.task}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full ${
                      task.priority === "Alta" ? "bg-red-100 text-red-600" :
                      task.priority === "Média" ? "bg-yellow-100 text-yellow-600" :
                      "bg-green-100 text-green-600"
                    }`}>
                      {task.priority}
                    </span>
                    <span className="text-gray-500">{task.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
