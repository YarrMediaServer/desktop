const tvSeries = [
    {
        image: "https://image.tmdb.org/t/p/original/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg",
        name: "Breaking Bad",
        year: 2008,
        duration: 3240, // 54 minutes per episode
        episodes: 62,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/6kjRXIKF4fXZWoOkLf03IRnP1fW.jpg",
        name: "Stranger Things",
        year: 2016,
        duration: 3060, // 51 minutes per episode
        episodes: 34,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        name: "The Witcher",
        year: 2019,
        duration: 3600, // 1 hour per episode
        episodes: 16,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/yP0fTQ97GrD3hmpUfg8fTD17eZr.jpg",
        name: "The Mandalorian",
        year: 2019,
        duration: 2580, // 43 minutes per episode
        episodes: 24,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/eOslNzftJUgo1qUAwcMIKaPi5k4.jpg",
        name: "Game of Thrones",
        year: 2011,
        duration: 3540, // 59 minutes per episode
        episodes: 73,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/rgzLKA7Dt7gInwt4wBOZTEUlZYY.jpg",
        name: "Friends",
        year: 1994,
        duration: 1320, // 22 minutes per episode
        episodes: 236,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/fu5vEUHgxkAPmX26ISQXqHML2rQ.jpg",
        name: "The Office",
        year: 2005,
        duration: 1320, // 22 minutes per episode
        episodes: 201,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/klZ5wRYliHkXCOxP0z7PaZWBy9z.jpg",
        name: "The Crown",
        year: 2016,
        duration: 3300, // 55 minutes per episode
        episodes: 60,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/3yZUBFFsC6bA4wJcdP6uN22Fgsp.jpg",
        name: "Westworld",
        year: 2016,
        duration: 3540, // 59 minutes per episode
        episodes: 36,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg",
        name: "Sherlock",
        year: 2010,
        duration: 5400, // 1 hour 30 minutes per episode
        episodes: 13,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/jnfcx4kIDuRRoJvJk0n0fGgM6Mg.jpg",
        name: "The Big Bang Theory",
        year: 2007,
        duration: 1260, // 21 minutes per episode
        episodes: 279,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/1lAHnIgjY7CxksML1sKSvAv0owc.jpg",
        name: "The Boys",
        year: 2019,
        duration: 3600, // 1 hour per episode
        episodes: 24,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/cGugbvRjzw0NtkZ9GyUw6IXwIV.jpg",
        name: "Black Mirror",
        year: 2011,
        duration: 3600, // 1 hour per episode
        episodes: 22,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/zCeTDSPXhLIByz1OfDpRLi3fuHD.jpg",
        name: "House of Cards",
        year: 2013,
        duration: 3000, // 50 minutes per episode
        episodes: 73,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/u55nA5Gg5JbH3S1T0vuc8IvzUAs.jpg",
        name: "Ozark",
        year: 2017,
        duration: 3540, // 59 minutes per episode
        episodes: 44,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/h7EVhGR52jpYqsdBvOXZOORaMCO.jpg",
        name: "Better Call Saul",
        year: 2015,
        duration: 3480, // 58 minutes per episode
        episodes: 63,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/rHycM6ZZsC7jn05N7OYdGn7O3iZ.jpg",
        name: "Narcos",
        year: 2015,
        duration: 3480, // 58 minutes per episode
        episodes: 30,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/xN64aVRrZ2eE0MFt0Jmnzq8V11W.jpg",
        name: "The Haunting of Hill House",
        year: 2018,
        duration: 3600, // 1 hour per episode
        episodes: 10,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/9VIURlZvfnmFACs2mKBl6F5rSd4.jpg",
        name: "Dexter",
        year: 2006,
        duration: 3240, // 54 minutes per episode
        episodes: 96,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/9RZ7S5h7ofIutbz6Yyoz3EchMXu.jpg",
        name: "Lost",
        year: 2004,
        duration: 2580, // 43 minutes per episode
        episodes: 121,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/xahcSDMAsg7GJsXbJYNQGzj3fCh.jpg",
        name: "The Handmaid's Tale",
        year: 2017,
        duration: 3300, // 55 minutes per episode
        episodes: 46,
        watched: false
    },
    {
        image: "https://image.tmdb.org/t/p/original/roJ8b7EXh5z0hHwzOCqnxFyz3h3.jpg",
        name: "True Detective",
        year: 2014,
        duration: 3600, // 1 hour per episode
        episodes: 24,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/fqaR4H3sGr7PtR40zIkaQ2GjISv.jpg",
        name: "Peaky Blinders",
        year: 2013,
        duration: 3480, // 58 minutes per episode
        episodes: 36,
        watched: true
    },
    {
        image: "https://image.tmdb.org/t/p/original/ftc4BtiytXTpMmmzmFUKRIFpBe3.jpg",
        name: "Chernobyl",
        year: 2019,
        duration: 3900, // 1 hour 5 minutes per episode
        episodes: 5,
        watched: true
    }
];
