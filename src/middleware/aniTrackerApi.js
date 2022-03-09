import axios from 'axios';

var api = {}
const domain = 'https://localhost:5001/';

// **************************** Movie ***********************

// Get Movie by Id (for detail Modal?)
api.GetMovieById = (movieId) => {
    return axios.get(`${domain}api/Movies`, movieId)
    .then((data) => {
        console.log('data:', data);
    })
    .catch(err => {
        console.log(err);
        throw(err);
    })
}

// Save Movie
api.SaveMovie = (movie) => {
    return axios.post(`${domain}api/Movie`, movie)
    .then((data) => {
        return data;
    })
    .catch(err => {
        throw(err);
    })
}

// Update Movie

// Delete Movie

// **************************** Seasons ***********************

// Get Season by Id TODO: richtig machen
api.GetSeasonsById = (seasonId) => {
    return axios.get(`${domain}/api/Series`, seasonId)
    .then((data) => {
        console.log('data:', data);
    })
    .catch(err => {
        console.log(err);
        throw(err);
    })
}

// Save Season TODO: richtig machen
api.SaveSeason = (season) => {
    return axios.post(`${domain}/api/Series`, season)
    .then((data) => {
        console.log('data:', data);
    })
    .catch(err => {
        console.log(err);
        throw(err);
    })
}

// Update Season

// Delete Season

// **************************** Media ***********************

// GetAllByTag
api.GetAllbyTag = (tag) => {
    return axios.get(`${domain}api/Media/tag/${tag}`)
    .then((data) => {
        console.log('data:', data);
    })
    .catch(err => {
        console.log(err);
        throw(err);
    })
}

// GetAllByList
api.GetAllbyList = (list) => {
    return axios.get(`${domain}api/Media/list/${list}`) // TODO: change "/api/Movies" with the new Controller
    .then((data) => {
        console.log('data:', data);
        return data;
    })
    .catch(err => {
        console.log(err);
        throw(err);
    })
}

export default api;