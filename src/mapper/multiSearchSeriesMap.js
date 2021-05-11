var map = {
    "title": "name",
    "tmdbId": "id",
    "mediaType": "media_type",
    "cover": {
       "key": "poster_path",
       transform: function (poster_path){
           return "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path;
       }
    }
}

export default map;