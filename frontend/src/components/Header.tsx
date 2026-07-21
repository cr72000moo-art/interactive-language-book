interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
    </header>
  )
}

export default Header
