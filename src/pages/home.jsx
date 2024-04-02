import React, { createRef, useEffect, useRef, useState } from 'react'
import useAxios from '../hooks/axio-client'
import axios from 'axios';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {

  const [answer,setAnswer]=useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const [c1,setC1]=useState([]);
    const [c2,setC2]=useState([]);
    const [value1,setValue1]=useState();
    const name1Ref=createRef();
    const name2Ref=createRef();
    const name3Ref=createRef();

    useEffect(()=>{

        axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_PQOMCLEthkosWyGYm4rYtLE4nsdfPOcHENHhVfBi')
        .then(({data})=>{
            console.log(Object.keys(data.data))
            setC1(Object.keys(data.data))
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])


    const onSubmit=(e)=>{

      

      e.preventDefault();

      const money1=name1Ref.current.value;
      const money2=name2Ref.current.value;
      const amount=parseFloat(name3Ref.current.value);

      

        axios.get(`https://api.currencyapi.com/v3/latest?apikey=cur_live_PQOMCLEthkosWyGYm4rYtLE4nsdfPOcHENHhVfBi&currencies=${money1}%2C${money2}`)
        .then(({data})=>{
            console.log(data.data[money1].value)

            const answer=(data.data[money2].value/data.data[money1].value)*amount;

            console.log(answer)

            setAnswer(answer);

            handleClickOpen();

            
        })
        .catch((err)=>{
            console.log(err)
        })

        
    }
  return (
    <div className=" mt-44 w-80 m-auto">
<form class="max-w-sm mx-auto" onSubmit={onSubmit} >

<div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
    <input type="text" ref={name3Ref} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
  </div>
  <div className='mb-5'>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FROM</label>
  <select ref={name1Ref}  id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   
    {c1.map((currency,index)=>(
      <option value={currency} key={index}>{currency}</option>
    ))}
  </select>
  </div>

  
  <div className='mb-5'>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">TO</label>
  <select ref={name2Ref} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   
    {c1.map((currency,index)=>(
      <option   value={currency} key={index}>{currency}</option>
    ))}
  </select>
  </div>
  

  <Button variant="contained" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</Button>
  
</form>



<React.Fragment>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Your currency value"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {answer}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>


        
      
    </div>
  )
}

