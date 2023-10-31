import './App.css'

function App() {
  const handleSubmit = ( event ) => {
    event.preventDefault()
  }
  return (
    <main>
      <aside>
        <h1>Test IDX</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
          <label>
            Elemento a introducir:
            <input
              name="item"
              required
              type="text"
              placeholder="Videojuegos 🎮"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
    </main>
  )
}

export default App
