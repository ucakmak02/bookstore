import React from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'


export default function ViewPage() {
    const { key } = useParams();
    console.log('key:'+key)
    return (
        <div>
            <h1>View Page</h1>
            <Link to='/'>Go to Home</Link>
        </div>
    )
}
