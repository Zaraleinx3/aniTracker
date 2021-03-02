import React, { Component } from 'react';

import BaseMovieCard from './cards/BaseMovieCard';
import List from './cards/buttonSets/List';
import Search from './cards/buttonSets/Search';

class Home extends Component {
    render() {
        return (
         <div>
            <h1>Home</h1>
            {/* Example for movieCards and button sets */}
            <BaseMovieCard 
                item={{
                    title: "Star Wars 1",
                    cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
                }}
                buttons={<List />}
            />
            <BaseMovieCard 
                item={{
                    title: "Star Wars 1",
                    cover: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"
                }}
                buttons={<Search />}
            />
        </div>
        );
    }
}

export default Home;