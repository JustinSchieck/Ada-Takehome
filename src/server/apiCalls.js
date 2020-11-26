import axios from 'axios';

export const getNodes = () => {
  axios.get('http://localhost:5000/nodes').then((response)=>{
    console.log('get all nodes: ', response.data)
    return response.data;
  }).catch((error) => {
    console.log('Following error returning nodes: ', error)
  })
}

export const getNodesById = (id) => {
  axios.get(`http://localhost:5000/nodes/${id}`).then((response)=>{
    console.log('get node by id: ', response.data)
    return response.data;
  }).catch((error) => {
    console.log('Following error returning nodes by id: ', error)
  })
}


export const searchNodes = (query) => {
  axios.post('http://localhost:5000/nodes/search', {
   query
  }).then((response)=>{
    // console.log('search: ', response.data);
    return response.data;
  }).catch((error) => {
    console.log('Following error returning search: ', error)
  })
}

export const getVariables = () => {
  axios.get('http://localhost:5000/variables').then((response)=>{
    console.log('get all vars: ', response.data)
    return response.data;
  }).catch((error) => {
    console.log('Following error returning variables: ', error)
  })
}