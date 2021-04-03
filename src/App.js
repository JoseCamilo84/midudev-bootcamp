import Mensaje from './mensaje.js'
import Description from './description.js'

const App = () => {
  return (
    <div>
      <Mensaje color='green' message='Estamos trabajando en un curso' />
      <Mensaje color='red' message='de React...' />
      <Description />
    </div>
  );
}

export default App;