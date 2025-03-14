import { Plus } from '@phosphor-icons/react'
import './App.css'
import { Tasks } from './features/tasks/tasks.view'

function App() {
  const handleAddTask = () => {

  }

  return (
    <section className='container'>
      <div className='search'>
        <div>
          <h1>Hi Samantha</h1>
          <p>Welcome back to the workspace, we missed You!</p>
          <input className='input' type="search" name="task" id="task" />
        </div>
        <div>

        </div>
      </div>
      <div className='content'>
        <Tasks />
        <button className='btn-add'><Plus size={22} /></button>
      </div>
    </section>
  )
}

export default App
