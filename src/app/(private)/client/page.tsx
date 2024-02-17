'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
type Album = {
    userId: number;
    id: number;
    title: string;
};
const Client = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const token = "your_actual_token_value";
    localStorage.setItem('token', token);

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        getData();
    }, []);
    const getData = async () => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10');
          
            const data = await response.json();

            setAlbums(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
        <h1 className='m-8'>Client Page</h1>
        <hr />
        <ul>
            {/* Mapping through the fetched albums and displaying them in a list */}
            {albums.map((album) => (
                <>
             <Link className='cursor-pointer' href={`/album/${album.id}`} key={album.id}>{album.title}</Link>
     
                
                </>
               
            ))}
        </ul>
    </>
            );
        };

            export default Client;
