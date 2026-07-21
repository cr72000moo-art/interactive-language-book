import { useState } from 'react'
import { ReactNode } from 'react'

interface Tool {
  id: string
  label: string
  icon: ReactNode
}

interface ToolBarProps {
  tools: Tool[]
}

function ToolBar({ tools }: ToolBarProps) {
  const [activeTool, setActiveTool] = useState<string | null>(null)

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">الأدوات</h3>
      <div className="grid grid-cols-3 gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
            className={`flex flex-col items-center gap-1 p-3 rounded-lg transition ${
              activeTool === tool.id
                ? 'bg-primary text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tool.icon}
            <span className="text-xs">{tool.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ToolBar
