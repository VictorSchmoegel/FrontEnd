import { useState } from 'react'
import './App.css'

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0)

  const handleClickNext = () => {
    if (index === toolKit.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const handleClickPrevius = () => {
    if (index === 0) {
      setIndex(toolKit.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{ toolKit[index] }</h2>
      <button onClick={handleClickNext}>Próximo</button>
      <button onClick={handleClickPrevius}>Anterior</button>
    </div>
  )
}

export default App
