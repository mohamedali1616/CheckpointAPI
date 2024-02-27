import axios from "axios"
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import '../App.css';
import Spinner from 'react-bootstrap/Spinner';

const UserList = ()=>{
    const [listOfUSer, setListOfUSer] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setListOfUSer(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div className="cardUser">
            {
                loading ?
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h1>Loading</h1><Spinner animation="border" variant="danger" />
                </div>
                
                :
                listOfUSer.map((el,i,t)=> <div >
                                                <Card border="danger" style={{ width: '18rem', height:'15rem', marginBottom:'20px' }}>
                                                    <Card.Header>User {i+1}</Card.Header>
                                                    <Card.Body>
                                                    <Card.Title>{el.name}</Card.Title>
                                                    <Card.Text>
                                                        {el.email}<br/>
                                                        {el.phone}<br/>
                                                        {el.company.name}<br/>
                                                        {el.company.catchPhrase}
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            {/* <h2>{el.name}</h2>
                                            <h4>{el.email}</h4> */}

                                          </div>)
            }
        </div>
    )
}
export default UserList