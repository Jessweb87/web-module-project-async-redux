import React from 'react';

export default function CharacterCard({character}) {
    // console.log(character);
    const { name, allies, enemies, films, tvShows, image } = character;
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <img src={image} alt={name}/>
            </div>
            <p>TvShows: {tvShows.name}</p>
            <p>Films: {films.name}</p>
            <p>Enemies: {enemies.name}</p>
            <p>Allies: {allies.name}</p>
        </div>
    )
}
