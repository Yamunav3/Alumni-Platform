import axios from 'axios';
import react, { useState, useEffect } from 'react';

const hello : React.FC=()=>{
    const [message, setMessage] = useState<string>(''); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/hello/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching the message!', error);
            });
    }, []);
    return (
        <div className='text-center p-4 bg-accent/10'>
            <h1 className=''>{message}</h1>
        </div>
    );
}
export default hello;