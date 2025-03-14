import { Plus } from '@phosphor-icons/react'
import './App.css'

function App() {

  const handleAddTask = () => {

  }

  return (
    <section className='container'>
      <div className='search'>
        <div>
          <h1>Hi Samantha</h1>
          <p>Welcome back to the workspace, we missed You!</p>
          <input type="search" name="task" id="task" />
        </div>
        <div>

        </div>
      </div>
      <div className='content'>
        Content
        <button className='btn-add'><Plus size={22} /></button>
      </div>
    </section>
  )
}

export default App
