import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyles } from './components/shared/GlobalStyles/GlobalStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Cards />
			<Footer />
		</>
	);
}

export default App;
