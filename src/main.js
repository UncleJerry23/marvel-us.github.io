import loadComicList from './comics/comic-list-components.js';
import loadHeader from './shared/header.js';


// open local host and you should be able to play with this

loadHeader();

// fetch('https://gateway.marvel.com:443/v1/public/comics?&apikey=698ecfea67de32ae8e6a3b78e74af2b3')
//     .then(response => response.json())
//     .then(results => {
//         console.log(results.data.results);
//         const comicList = results.data.results;
//         loadComicList(comicList);
//     });