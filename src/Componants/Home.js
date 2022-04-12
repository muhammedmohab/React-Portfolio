import Products from './Products';
import useFetch from '../Hooks/useFetch';

function Home(){
  const {loading, data, error} = useFetch('https://fakestoreapi.com/products');
  return (
    <div className='container'>
      {loading && <div>Loading...</div>}
      {error && <div>{Error}</div>}
      {data && <Products products={data}/>}
    </div>
  );
}
export default Home;