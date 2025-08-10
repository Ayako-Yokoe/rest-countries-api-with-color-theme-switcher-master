import { ThemeProvider } from './theme-context';
import Navigation from './components/Navigation';
import List from './components/List'
import localData from './data.json';

function App() {

  // Fetch API Data
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let result  = await fetch('https://restcountries.com/v3.1/all');
  //       const fetchedData = await result.json();
  //       setData(fetchedData);
  //     } catch (err) {
  //       console.error('Failed to fetch data:', err);
  //       setError('Failed to fetch data');
  //     }
  //   }

  //   fetchData();
  // }, [])

  // if (error) {
  //   return (
  //     <p>{error}</p>
  //   )
  // }

  return (
    <ThemeProvider>
      <Navigation />
      <List data={localData} />
    </ThemeProvider>
  )
}

export default App
