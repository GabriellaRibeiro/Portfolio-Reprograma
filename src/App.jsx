import Footer from './componente/Footer/Footer'
import Cabecalho from './componente/Cabecalho/Cabecalho'
import Perfil from './componente/Perfil/Perfil'
import Projetos from './componente/Projetos/Projetos'
import Repositorios from './componente/Repositorio/Repositorio'
import Maravilhosa from './componente/Maravilhosa.png'
import TodoList from './componente/TodoList.png'
import Series from './componente/Series.png'
import Ghibli from './componente/StudioGhibli.png'

import './App.css'

function App() {

  return (
    <div className="App">
      <Cabecalho />
      <Perfil />
      <h1 className="proj-title">04 Projetos feitos na Reprograma</h1>
      <Projetos title="M de Maravilhosa" image={Maravilhosa} link="https://m-de-maravilhosa-gabriella-ribeiro.netlify.app/" target="_blank" rel="noreferrer" />
      <Projetos title="To Do List" image={TodoList} link="https://todolist-gabriella.netlify.app/" target="_blank" rel="noreferrer"  />
      <Projetos title="Reproflix" image={Series} link="https://reproflix.netlify.app/" target="_blank" rel="noreferrer" />      
      <Projetos title="API Studio Ghibli" image={Ghibli} link="https://api-studio-ghibli-js.netlify.app/" target="_blank" rel="noreferrer"  />
      <h1 className="proj-title">Outros projetos no Github</h1>
      <Repositorios className="repo-card"   />
      <Footer />
      

    </div>

  )
}

export default App