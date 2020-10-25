import { View } from 'components';
import { React } from 'libraries';


const BaseHeader = () => (
  <header>
    <View classNames="row">
      <h1>test</h1>
    </View>
  </header>
);

const Home = () => (
  <React.Fragment>
    <View className="container">
      <BaseHeader />
      <View className="main-apps">
        <h1>Home</h1>
      </View>
    </View>
  </React.Fragment>
)


export default Home;
