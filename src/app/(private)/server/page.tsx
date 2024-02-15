import React from 'react';

type Album = {
    userId: number;
    id: number;
    title: string;
};

export const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums'); 
        console.log('response', response);
         const data = await response.json(); 
         console.log('data', data); return data;
    } catch (error) { console.error(error); }
};
const Server = async () => {
        const albums = await getData()
    return      <>
    <h1 className='m-8'>Server Page</h1>
    <hr />
    <ul>
        {/* Mapping through the fetched albums and displaying them in a list */}
        {albums && albums.map((album: Album) => (
            <li key={album.id}>{album.title}</li>
        ))}
    </ul>
</>;

};

export default Server;
