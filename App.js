import { StackNavigator,} from 'react-navigation';
import HomeScreen from './Homescreen'
import AddDeck from './AddDeck'

const App = StackNavigator({
    HomeScreen: {screen: HomeScreen},
    AddDeck: {screen: AddDeck},
});

export default App;

