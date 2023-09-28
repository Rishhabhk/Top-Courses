import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import CardContainer from './components/CardContainer';
import {data,apiUrl} from './data';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(data[0].title)

  const fetch_data = async() => {
    setLoading(true);
    try{
        const result = await fetch(apiUrl);
        const output =  await result.json();
        setCourse(output.data);
        }
    catch(e)
    {
      toast.error("not fetched");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetch_data();

  },[])


  return (
    <div className="App">

      <Navbar></Navbar>

      <Filter data={data} category={category} setCategory={setCategory}></Filter>

      {
        loading ? (<Spinner></Spinner>) : (<CardContainer courses = {courses} category={category}></CardContainer>)
      }

    </div>
  );
}

export default App;
