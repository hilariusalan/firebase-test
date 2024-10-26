import cong from './configuration';
import {useEffect, useState} from 'react'
import { Database, ref, onValue, getDatabase } from 'firebase/database';

function App() {
const [data, setData] = useState([])

useEffect(() => {
  const database = getDatabase(cong)
  const colectionRef = ref(database, "my_location")
  const fetchdata = () => {
    onValue(colectionRef, (snapshot) => {
      const dataItem = snapshot.val()
    
      if(dataItem){
        const displayItem = Object.values(dataItem)
        setData(displayItem)
      }
    })
  }

  fetchdata()
},[])

  return (
    <div>
      <h1>Data From Database</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
