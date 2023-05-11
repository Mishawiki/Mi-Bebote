class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        edad: null,
        genero: null,
        temporada: null,
        ropa: null,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      const { edad, genero, temporada } = this.state;
      const response = await fetch(`/ropa?edad=${edad}&genero=${genero}&temporada=${temporada}`);
      const ropa = await response.json();
      this.setState({ ropa });
    }
  
    render() {
      const { edad,genero, temporada, ropa } = this.state;
      return (
      <div>
      <h1>Ropa de bebé según la temporada</h1>
      <form onSubmit={this.handleSubmit}>
      <label>
      Edad del bebé:
      <input type="number" name="edad" value={edad} onChange={this.handleChange} required />
      </label>
      <br />
      <label>
      Género:
      <input type="radio" name="genero" value="masculino" checked={genero === 'masculino'} onChange={this.handleChange} required /> Masculino
      <input type="radio" name="genero" value="femenino" checked={genero === 'femenino'} onChange={this.handleChange} required /> Femenino
      </label>
      <br />
      <label>
      Época del año:
      <select name="temporada" value={temporada} onChange={this.handleChange} required>
      <option value="">Selecciona una opción</option>
      <option value="primavera">Primavera</option>
      <option value="verano">Verano</option>
      <option value="otoño">Otoño</option>
      <option value="invierno">Invierno</option>
      </select>
      </label>
      <br />
      <button type="submit">Buscar</button>
      </form>
      {ropa && (
      <div>
      <h2>Ropa para bebés de {edad} meses en {temporada}</h2>
      <ul>
      {ropa.map((item) => (
      <li key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <p>{item.nombre}</p>
      <p>{item.descripcion}</p>
      <p>${item.precio}</p>
      </li>
      ))}
      </ul>
      </div>
      )}
      </div>
      );
      }
      }
      
      ReactDOM.render(<App />, document.getElementById('root'));
  