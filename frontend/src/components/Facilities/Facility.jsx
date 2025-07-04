import React,{useEffect,useState} from 'react'
import './Facility.css'
import axios from 'axios';
const Facility = (props) => {
   const [data,setData] = useState([]);
   const fetchData = async()=>{
    props.showLoader();
    await axios.get("http://localhost:4000/api/facility/get").then((response)=>{
      // console.log(response)
      setData(response.data.facility)
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{
      props.hideLoader();
    })
   }
   useEffect(()=>{
      fetchData();
   },[])

  return (
    <div className='facility'>
        <div className='facility-header'>
        List of facilities available at "MNNIT HEALTH CARE CENTRE":
      </div>
    <div className='facility-lists'>

      {
        data.map((item,index)=>{
          return(
          <div className='facility-list'>
          <div className='facility-list-header'>{item.title} </div>
          <p className='facility-list-value'>{item.description}</p>
          </div>
          );
        })
      }
     
    </div>
    </div>
  )
}

export default Facility