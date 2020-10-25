import { 
  BrowserRouter, 
  Switch, 
  Route
} from "libraries";
import { routes } from 'routes';


const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((val,i) => (
        <Route 
          key={i} 
          path={val.path} 
          exact={val.exact} 
          name={val.name} 
          component={val.component} 
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default App;
