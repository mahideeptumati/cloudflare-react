
import axios from 'axios'
import { Router } from "@reach/router";


function Post(){

    function fetchPosts(){
        fetch('https://serverless-api.signalnerve.workers.dev/api/posts').
        then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
        })
    }
    return (<div>

        <button onClick={fetchPosts}>click</button>

    </div>)
}

export default Post