'use client';

import React from 'react';
import { useState, useEffect } from 'react';
type Album = {
    userId: number;
    id: number;
    title: string;
};
const Client = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            console.log('response', response);
            const data = await response.json();
            console.log('data', data);
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
                <li key={album.id}>{album.title}</li>
            ))}
        </ul>
    </>
            );
        };

            export default Client;
