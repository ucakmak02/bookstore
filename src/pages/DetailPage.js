import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
    const { key } = useParams();
    console.log('key:'+key)
    return (
        <div>

        </div>
    )
}
