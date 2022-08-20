import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CARD } from '../Components/Card/CardRoutes';

export const SelectOption = () => {
    const {title} = useParams();
    const [data , setData] = useState()

  useEffect(() =>{
    const data = CARD.filter((props) => props.title === title );
    console.log(data);
    setData(data)
  
  },[])
  
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}
