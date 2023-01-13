const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: '/trending/all/week?api_key=${API_KEY}&language=en-US',
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=28',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=35',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=27',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=10749',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=9648',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=878',
    },
    fetch: {
        title: 'Trending',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=37',
    },
    fetch: {
        title: 'Animation',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=16',
    },
    fetch: {
        title: 'TV Movie',
        url: '/discover/movie?api_key=${API_KEY}&with_genres=10770',
    },
};