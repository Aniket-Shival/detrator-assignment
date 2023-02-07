import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavigationBar from './components/NavigationBar';


function App() {

 const[info,setInfo]=useState([])

 useEffect(() => {
   axios.get('https://dummyjson.com/posts').then(res=>{
     setInfo(res.data.posts)
   }).catch(err=>console.log(err))
 }, [])

  return (
   <>
   <NavigationBar/>
   <div style={{ display:'flex' , justifyContent:'center' , flexWrap:'wrap' }}>
      {info.map(x=>(
      <Card style={{boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.2)', marginTop:'3rem', marginBottom:'3rem', marginLeft:'1rem', marginRight:'1rem', position:'relative', backgroundColor:'whitesmoke',  height:'auto' }} key={x.id} sx={{ maxWidth: 345 , minHeight: 550 }}>
      <CardContent>
        <Typography style={{marginTop:'20px'}} gutterBottom variant="h5" component="div">
          {x.title}
        </Typography>
        <Typography style={{ marginTop:'30px' }} variant="body2" color="text.secondary">
         {x.body}
        </Typography>
        <Typography style={{ marginTop:'20px' }} variant="body2" color="text.secondary">
         By- {x.userId}
        </Typography>
        <Typography style={{ marginTop:'10px', marginBottom:'30px' }} variant="body2" color="text.secondary">
         Reactions- {x.reactions}
        </Typography>
     
      <div style={{  position:'absolute' ,  bottom:'10px' ,flexWrap:'wrap' }}>
      {x.tags.map(tag =>(
     <Button key={tag} style={{ backgroundColor:'white', color:'#3C2A21',  boxShadow: ' 0px 8px 8px rgba(0, 0, 0, 0.2)', marginTop:'15px', marginLeft:'5px',marginRight:'5px' }}>{tag}</Button>
     ))}
        </div>  
        </CardContent>
    </Card>
    ))}
   </div>
   </>
  );
}

export default App;
