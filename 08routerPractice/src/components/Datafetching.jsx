import { useState, useEffect } from "react";
import axios from "axios"

export function Datafetching(){
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [fetchOnButtonClicked, setFetchOnButtonClicked ] = useState(1)

    const Fetchnow = () => {
        setFetchOnButtonClicked(id)
    }

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchOnButtonClicked}`)
        .then(res => {
            console.log(res); 
            setPost(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [fetchOnButtonClicked])

    return(
        <>
        <input type="number" value={id} onChange={e => setId(e.target.value)} className="text-black" />
        <button type='button' onClick={Fetchnow}>Fetch post</button>
        <div>{post.id}:{post.title}</div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        </>
    )
}