import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));




// Movies data (for your movie API)
let movies = [
  {
    "id":1,
    "title": "Game Of Thrones",
    "year": 2011,
    "rank": 15,
    "rankChange": "▲ -1",
    "rating": 96,
    "imdbRating": 9.2,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/10043150/s1440/game-of-thrones.webp/game-of-thrones.webp",
    "posterImage": "https://images.justwatch.com/poster/297859466/s166/game-of-thrones.webp",
    "duration": "58min",
    "highestRank": 1,
    "top10Days": 2113,
    "top100Days": 3180,
    "top1000Days": 3191,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"

  },
 

  {
    "id":2,
    "title": "TERMINATOR ZERO",
    "year": 2024,
    "rank": 52,
    "rankChange": "▲ +30",
    "rating": 76,
    "imdbRating": 7,
    "imdbVotes": "7.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/319782457/s1440/terminator-zero.webp/terminator-zero.webp",
    "posterImage": "https://images.justwatch.com/poster/319782454/s166/terminator-zero.webp",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 22,
    "top1000Days": 42 ,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "10k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":3,
    "title": "KILL",
    "year": 2024,
    "rank": 3,
    "rankChange": "▲ +1",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "27k",
    "backdropImage": "https://images.justwatch.com/backdrop/320515994/s1440/kill-2024.webp/kill-2024.webp",
    "posterImage": "https://images.justwatch.com/poster/317138629/s166/kill-2024.webp",
    "duration": "1h 45min",
    "highestRank": 1,
    "top10Days": 81,
    "top100Days": 86,
    "top1000Days": 92,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "3k",
    "dislikes": "400",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },
 


  {
    "id":4,
    "title": "SHOGUN",
    "year": 2024,
    "rank":25,
    "rankChange": "▲ -4",
    "rating": 74,
    "imdbRating": 8.6,
    "imdbVotes": "174k",
    "backdropImage": "https://images.justwatch.com/backdrop/309349707/s1440/shogun-2024.webp/shogun-2024.webp",
    "posterImage": "https://images.justwatch.com/poster/309349704/s166/shogun-2024.webp",
    "duration": "59min",
    "highestRank": 1,
    "top10Days": 125,
    "top100Days": 230,
    "top1000Days": 255,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "15k",
    "dislikes": "959",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":5,
    "title": "STREE 2:SARKATE KA AATANK",
    "year": 2024,
    "rank":79,
    "rankChange": "-",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "24k",
    "backdropImage": "https://images.justwatch.com/backdrop/319090905/s1440/stree-2.webp/stree-2.webp",
    "posterImage": "https://images.justwatch.com/poster/319603130/s166/stree-2.webp",
    "duration": "  2h 27min",
    "highestRank": 1,
    "top10Days": 125,
    "top100Days": 230,
    "top1000Days": 255,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "200k",
    "dislikes": "100",
    "watchlistText": "Watchist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":6,
    "title": "MIRZAPUR",
    "year": 2018,
    "rank": 25,
    "rankChange": "▲ +33",
    "rating": 80,
    "imdbRating": 9.0,
    "imdbVotes": "97k",
    "backdropImage": "https://images.justwatch.com/backdrop/302477284/s1440/mirzapur.webp/mirzapur.webp",
    "posterImage": "https://images.justwatch.com/poster/98979565/s166/mirzapur.webp",
    "duration": "35min",
    "highestRank": 1,
    "top10Days": 292,
    "top100Days": 702,
    "top1000Days": 852,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4k",
    "dislikes": "555",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },



  {
    "id":7,
    "title": "HOUSE OF THE DRAGON",
    "year": 2022,
    "rank":19,
    "rankChange": "+11",
    "rating": 95,
    "imdbRating": 8.4,
    "imdbVotes": "446k",
    "backdropImage": "https://images.justwatch.com/backdrop/317367735/s1440/house-of-the-dragon.webp/house-of-the-dragon.webp",
    "posterImage": "https://images.justwatch.com/poster/301444667/s166/house-of-the-dragon.webp",
    "duration": "  1h 3min",
    "highestRank": 1,
    "top10Days": 154,
    "top100Days": 546,
    "top1000Days": 913,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "44k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },
 

  {
    "id":8,
    "title": "The Lord of the Rings: The Rings of Power",
    "year": 2022,
    "rank":18,
    "rankChange": "+13",
    "rating": 88,
    "imdbRating": 6.9,
    "imdbVotes": "380k",
    "backdropImage": "https://images.justwatch.com/backdrop/320045052/s1440/the-lord-of-the-rings-the-rings-of-power.webp/the-lord-of-the-rings-the-rings-of-power.webp",
    "posterImage": "https://images.justwatch.com/poster/260075695/s166/the-lord-of-the-rings-the-rings-of-power.webp",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },
 
  {
    "id":9,
    "title": "Harold and the Purple Crayon",
    "year": 2024,
    "rank":18,
    "rankChange": "+13",
    "rating": 72,
    "imdbRating": 5.7,
    "imdbVotes": "3.7k",
    "backdropImage": "https://images.justwatch.com/backdrop/320023808/s1440/harold-and-the-purple-crayon-2024.webp/harold-and-the-purple-crayon-2024.webp",
    "posterImage": "https://images.justwatch.com/poster/316496135/s166/harold-and-the-purple-crayon-2024.webp",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "10",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":10,
    "title": "PANCHAYAT",
    "year": 2020,
    "rank": 3,
    "rankChange": "▲ +2",
    "rating": 79,
    "imdbRating": 8.4,
    "imdbVotes": "87k",
    "backdropImage": "https://images.justwatch.com/backdrop/306672231/s1440/panchayat.webp/panchayat.webp",
    "posterImage": "https://images.justwatch.com/poster/316699631/s166/panchayat.webp",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 1003,
    "top100Days": 1877,
    "top1000Days": 2141,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.3k",
    "dislikes": "200",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":11,
    "title": "AFRAID",
    "year": 2024,
    "rank":18,
    "rankChange": "+13",
    "rating": 56,
    "imdbRating": 5.1,
    "imdbVotes": "4.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/320204860/s1440/they-listen.webp/they-listen.webp",
    "posterImage": "https://images.justwatch.com/poster/318949087/s166/they-listen.webp",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "23",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":12,
    "title": "Gyaarah Gyaarah ",
    "year": 2024,
    "rank":13,
    "rankChange": "-6",
    "rating": 84,
    "imdbRating": 8.2,
    "imdbVotes": "4.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319735385/s1440/gyaarah-gyaarah.webp/gyaarah-gyaarah.webp",
    "posterImage": "https://images.justwatch.com/poster/320432932/s166/gyaarah-gyaarah.webp",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 44,
    "top100Days": 48,
    "top1000Days": 52,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100",
    "dislikes": "12k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":13,
    "title": "Shekhar Home",
    "year": 2024,
    "rank":46,
    "rankChange": "+96",
    "rating": 77,
    "imdbRating": 8.2,
    "imdbVotes": "10k",
    "backdropImage": "https://images.justwatch.com/backdrop/320002670/s1440/shekhar-home.webp/shekhar-home.webp",
    "posterImage": "https://images.justwatch.com/poster/319810199/s166/shekhar-home.webp",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 21,
    "top100Days": 39,
    "top1000Days": 46,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "52",
    "dislikes": "7",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":14,
    "title": "TOUCH",
    "year": 2024,
    "rank":66,
    "rankChange": "-3",
    "rating": 75,
    "imdbRating": 2.5,
    "imdbVotes": "10k",
    "backdropImage": "https://images.justwatch.com/backdrop/316456492/s1440/touch-0.webp/touch-0.webp",
    "posterImage": "https://images.justwatch.com/poster/314498863/s166/touch-0.webp",
    "duration": "  2h 1min",
    
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "36",
    "dislikes": "9",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":15,
    "title": "Watchmen",
    "year": 2009,
    "rank":618,
    "rankChange": "+300",
    "rating": 92,
    "imdbRating": 7.6,
    "imdbVotes": "589k",
    "backdropImage": "https://images.justwatch.com/backdrop/179879377/s1440/watchmen.webp/watchmen.webp",
    "posterImage": "https://images.justwatch.com/poster/211398541/s166/watchmen.webp",
    "duration": "  2h 42min",
    "highestRank": 3,
    "top10Days": 8,
    "top100Days": 105,
    "top1000Days": 2242,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "17k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":16,
    "title": "Dìdi (弟弟)",
    "year": 2024,
    "rank":81,
    "rankChange": "-1",
    "rating": 81,
    "imdbRating": 7.5,
    "imdbVotes": "4.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/320517305/s1440/didi-di-di.webp/didi-di-di.webp",
    "posterImage": "https://images.justwatch.com/poster/320858544/s166/didi-di-di.webp",
    "duration": "  1h 34min",
   
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "64",
    "dislikes": "8",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

 
  {
    "id":17,
    "title": "Horizon: An American Saga - Chapter 1", 
    "year": 2024,
    "rank":79,
    "rankChange": "+300",
    "rating": 6.7,
    "imdbRating": 7.6,
    "imdbVotes": "26k",
    "backdropImage": "https://images.justwatch.com/backdrop/318955943/s1440/horizon-an-american-saga-chapter-1.webp/horizon-an-american-saga-chapter-1.webp",
    "posterImage": "https://images.justwatch.com/poster/317958898/s166/horizon-an-american-saga-chapter-1.webp",
    "duration": "3h 1min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "544",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":18,
    "title": "Despicable Me 4",
    "year": 2024,
    "rank":83,
    "rankChange": "+300",
    "rating": 83,
    "imdbRating": 6.2,
    "imdbVotes": "42k",
    "backdropImage": "https://images.justwatch.com/backdrop/311602034/s1440/despicable-me-4-2024.webp/despicable-me-4-2024.webp",
    "posterImage": "https://images.justwatch.com/poster/317954832/s166/despicable-me-4-2024.webp",
    "duration": "  1h 34min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "28k",
    "dislikes": "140",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":19,
    "title": "Twisters",
    "year": 2024,
    "rank":89,
    "rankChange": "+2950",
    "rating": 89,
    "imdbRating": 6.6,
    "imdbVotes": "102k",
    "backdropImage": "https://images.justwatch.com/backdrop/311705103/s1440/twisters.webp/twisters.webp",
    "posterImage": "https://images.justwatch.com/poster/315736719/s166/twisters.webp",
    "duration": "  2h 2min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.9k",
    "dislikes": "310",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":20,
    "title": "Trap",
    "year": 2024,
    "rank":78,
    "rankChange": "+300",
    "rating": 78,
    "imdbRating": 6.0,
    "imdbVotes": "66k",
    "backdropImage": "https://images.justwatch.com/backdrop/319859355/s1440/trap-2024.webp/trap-2024.webp",
    "posterImage": "https://images.justwatch.com/poster/319859347/s166/trap-2024.webp",
    "duration": " 1h 45min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "913",
    "dislikes": "221",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":21,
    "title": "Inside Out",
    "year": 2015,
    "rank":134,
    "rankChange": "-26",
    "rating": 97,
    "imdbRating": 8.1,
    "imdbVotes": "829k",
    "backdropImage": "https://images.justwatch.com/backdrop/178301399/s1440/inside-out.webp/inside-out.webp",
    "posterImage": "https://images.justwatch.com/poster/178301392/s166/inside-out.webp",
    "duration": "  1h 35min",
    "highestRank": 3,
    "top10Days": 18,
    "top100Days": 220,
    "top1000Days": 2559,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "35k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":22,
    "title": "Kinds of Kindness",
    "year": 2024,
    "rank":23,
    "rankChange": "+43",
    "rating": 70,
    "imdbRating": 6.6,
    "imdbVotes": "36k",
    "backdropImage": "https://images.justwatch.com/backdrop/319989886/s1440/kinds-of-kindness.webp/kinds-of-kindness.webp",
    "posterImage": "https://images.justwatch.com/poster/316333916/s166/kinds-of-kindness.webp",
    "duration": "  2h 44min",
    "highestRank": 10,
    "top10Days": 1,
    "top100Days": 32,
    "top1000Days": 136,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "700",
    "dislikes": "300",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":23,
    "title": "The Bikeriders",
    "year": 2024,
    "rank":23,
    "rankChange": "+43",
    "rating": 82,
    "imdbRating": 6.7,
    "imdbVotes": "46k",
    "backdropImage": "https://images.justwatch.com/backdrop/318653942/s1440/the-bikeriders.webp/the-bikeriders.webp",
    "posterImage": "https://images.justwatch.com/poster/318653937/s166/the-bikeriders.webp",
    "duration": "  1h 46min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "801",
    "dislikes": "151",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":24,
    "title": "Watchers 1: UFOs are Real, Burgeoning, and Not Going Away",
    "year": 2010,
    "rank":20,
    "rankChange": "+430",
    "imdbRating": 7.2,
    "imdbVotes": "34k",
    "backdropImage": "https://images.justwatch.com/backdrop/270361552/s1440/.webp.webp",
    "posterImage": "https://images.justwatch.com/poster/270361550/s166/.webp",
    "duration": "  2h 44min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20",
    "dislikes": "20k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":25,
    "title": "You Gotta Believe",
    "year": 2024,
    "rank":21,
    "rankChange": "+53",
    "imdbRating": 5.4,
    "imdbVotes": "350k",
    "backdropImage": "https://images.justwatch.com/backdrop/320911483/s1440/you-gotta-believe.webp/you-gotta-believe.webp",
    "posterImage": "https://images.justwatch.com/poster/320060716/s166/you-gotta-believe.webp",
    "duration": "  1h 44min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "500",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

 

  
  {
    "id":26,
    "title": "Batman: The Dark Knight Returns, Part 1",
    "year": 2012,
    "rank":1,
    "rankChange": "+1",
    "rating": 88,
    "backdropImage": "https://images.justwatch.com/backdrop/320550333/s1440/batman-the-dark-knight-returns-part-1.webp/batman-the-dark-knight-returns-part-1.webp",
    "posterImage": "https://images.justwatch.com/poster/144994120/s166/batman-the-dark-knight-returns-part-1.webp",
    "duration": "  1h 16min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.9k",
    "dislikes": "235",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":27,
    "title": "The Fast and the Furious",
    "year": 2001,
    "rank":729,
    "rankChange": "+314",
    "rating": 92,
    "imdbRating": 6.8,
    "imdbVotes": "426k",
    "backdropImage": "https://images.justwatch.com/backdrop/39788434/s1440/the-fast-and-the-furious.webp/the-fast-and-the-furious.webp",
    "posterImage": "https://images.justwatch.com/poster/216020619/s166/the-fast-and-the-furious.webp",
    "duration": "  1h 46min",
    "highestRank": 25,
    "top10Days": 0,
    "top100Days": 51,
    "top1000Days": 1109,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":28,
    "title": "Extraction",
    "year": 2020,
    "rank":724,
    "rankChange": "+337",
    "rating": 94,
    "imdbRating": 6.8,
    "imdbVotes": "270k",
    "backdropImage": "https://images.justwatch.com/backdrop/177559132/s1440/extraction-2020.webp/extraction-2020.webp",
    "posterImage": "https://images.justwatch.com/poster/176320403/s166/extraction-2020.webp",
    "duration": "  1h 56min",
    "highestRank": 1,
    "top10Days": 5,
    "top100Days": 39,
    "top1000Days": 614,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "12k",
    "dislikes": "648",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":29,
    "title": "MULAN",
    "year": 2020,
    "rank":722,
    "rankChange": "+594",
    "rating": 74,
    "imdbRating": 5.8,
    "imdbVotes": "160k",
    "backdropImage": "https://images.justwatch.com/backdrop/199842629/s1440/mulan-2020.webp/mulan-2020.webp",
    "posterImage": "https://images.justwatch.com/poster/166091963/s166/mulan-2020.webp",
    "duration": "  1h 55min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 39,
    "top1000Days": 454,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.2k",
    "dislikes": "2.8k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":30,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "rank":768,
    "rankChange": "+353",
    "rating": 96,
    "imdbRating": 6.9,
    "imdbVotes": "910k",
    "backdropImage": "https://images.justwatch.com/backdrop/198981995/s1440/captain-america-the-first-avenger.webp/captain-america-the-first-avenger.webp",
    "posterImage": "https://images.justwatch.com/poster/8646724/s166/captain-america-the-first-avenger.webp",
    "duration": "  2h 4min",
    "highestRank": 4,
    "top10Days": 4,
    "top100Days": 192,
    "top1000Days": 2391,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "21k",
    "dislikes": "729",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":31,
    "title": "Deadpool 2",
    "year": 2018,
    "rank":411,
    "rankChange": "+295",
    "rating": 96,
    "imdbRating": 7.6,
    "imdbVotes": "683k",
    "backdropImage": "https://images.justwatch.com/backdrop/55613628/s1440/deadpool-2.webp/deadpool-2.webp",
    "posterImage": "https://images.justwatch.com/poster/61870323/s166/deadpool-2.webp",
    "duration": "  1h 59min",
    "highestRank": 4,
    "top10Days": 19,
    "top100Days": 289,
    "top1000Days": 2214,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "33k",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  
  {
    "id":32,
    "title": "Deadpool & Wolverine",
    "year": 2024,
     "rank":4,
    "rankChange": "+295",
    "rating": 95,
    "imdbRating": 8.0,
    "imdbVotes": "288k",
    "backdropImage": "https://images.justwatch.com/backdrop/319139252/s1440/deadpool-3.webp/deadpool",
    "posterImage": "https://images.justwatch.com/poster/318387357/s166/deadpool-3.webp",
    "duration": "  2h 8min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "5.3k",
    "dislikes": "196k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":33,
    "title": "The Marvels",
    "year": 2023,
    "rank":3046,
    "rankChange": "+2311",
    "rating": 69,
    "imdbRating": 5.5,
    "imdbVotes": "133k",
    "backdropImage": "https://images.justwatch.com/backdrop/319480621/s1440/the-marvels.webp/the-marvels.webp",
    "posterImage": "https://images.justwatch.com/poster/244761547/s166/the-marvels.webp",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.4k",
    "dislikes": "1.9k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":34,
    "title": "The Guardians of the Galaxy Holiday Special",
    "year": 2022,
    "rank":964,
    "rankChange": "+445",
    "rating": 90,
    "imdbRating": 6.9,
    "imdbVotes": "97k",
    "backdropImage": "https://images.justwatch.com/backdrop/301916630/s1440/the-guardians-of-the-galaxy-holiday-special.webp/the-guardians-of-the-galaxy-holiday-special.webp",
    "posterImage": "https://images.justwatch.com/poster/301774755/s166/the-guardians-of-the-galaxy-holiday-special.webp",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.1k",
    "dislikes": "876",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

   
  {
    "id":35,
    "title": "Ant-Man and the Wasp: Quantumania",
    "year": 2023,
    "rank":2819,
    "rankChange": "+2115",
    "rating": 73,
    "imdbRating": 6.0,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/303438481/s1440/ant-man-3.webp/ant-man-3.webp",
    "posterImage": "https://images.justwatch.com/poster/302408188/s166/ant-man-3.webp",
    "duration": "  2h 5min",
    "highestRank": 1,
    "top10Days": 33,
    "top100Days": 113,
    "top1000Days": 349,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":36,
    "title": "Thor: Love and Thunder",
    "year": 2022,
    "rank":903,
    "rankChange": "+537",
    "rating": 77,
    "imdbRating": 6.2,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/300409455/s1440/thor-love-and-thunder.webp/thor-love-and-thunder.webp",
    "posterImage": "https://images.justwatch.com/poster/300706764/s166/thor-love-and-thunder.webp",
    "duration": "  1h 59min",
    "highestRank": 1,
    "top10Days": 77,
    "top100Days": 160,
    "top1000Days": 473,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  {
    "id":37,
    "title": "Avengers: Endgame",
    "year": 2019,
    "rank":535,
    "rankChange": "+247",
    "rating": 97,
    "imdbRating": 8.4,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp",
    "posterImage": "https://images.justwatch.com/poster/118339636/s166/avengers-endgame.webp",
    "duration": "  3h 1min",
    "highestRank": 1,
    "top10Days": 52,
    "top100Days": 555,
    "top1000Days": 1963,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "98k",
    "dislikes": "1.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

 
  {
    "id":38,
    "title": "Venom",
    "year": 2018,
    "rank":343,
    "rankChange": "+270",
    "rating": 88,
    "imdbRating": 6.6,
    "imdbVotes": "550k",
    "backdropImage": "https://images.justwatch.com/backdrop/83182674/s1440/venom-2018.webp/venom-2018.webp",
    "posterImage": "https://images.justwatch.com/poster/57745763/s166/venom-2018.webp",
    "duration": "  1h 52min",
    "highestRank": 1,
    "top10Days": 88,
    "top100Days": 436,
    "top1000Days": 2049,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":39,
    "title": "Logan",
    "year": 2017,
    "rank":330,
    "rankChange": "+292",
    "rating": 96,
    "imdbRating": 8.1,
    "imdbVotes": "861k",
    "backdropImage": "https://images.justwatch.com/backdrop/10573557/s1440/logan.webp/logan.webp",
    "posterImage": "https://images.justwatch.com/poster/76832017/s166/logan.webp",
    "duration": "  2h 17min",
    "highestRank": 6,
    "top10Days": 11,
    "top100Days": 365,
    "top1000Days": 2445,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "31k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":40,
    "title": "The Amazing Spider-Man",
    "year": 2012,
    "rank":406,
    "rankChange": "+113",
    "rating": 92,
    "imdbRating": 6.9,
    "imdbVotes": "714k",
    "backdropImage": "https://images.justwatch.com/backdrop/204659694/s1440/the-amazing-spider-man.webp/the-amazing-spider-man.webp",
    "posterImage": "https://images.justwatch.com/poster/300565238/s166/the-amazing-spider-man.webp",
    "duration": "  2h 16min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days": 335,
    "top1000Days": 2145,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":41,
    "title": "Ravanasura",
    "year": 2023,
    "rank":605,
    "rankChange": "+467",
    "rating": 40,
    "imdbRating": 5.7,
    "imdbVotes": "2.6k",
    "backdropImage": "https://images.justwatch.com/backdrop/304258843/s1440/ravanasura.webp/ravanasura.webp",
    "posterImage": "https://images.justwatch.com/poster/316652935/s166/ravanasura.webp",
    "duration": "  2h 22min",
    "highestRank": 1,
    "top10Days": 4,
    "top100Days": 24,
    "top1000Days": 167,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "77",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  
  {
    "id":42,
    "title": "Bholaa",
    "year": 2024,
    "rank":3262,
    "rankChange": "+2513",
    "rating": 53,
    "backdropImage": "https://images.justwatch.com/backdrop/304668096/s1440/bholaa-2022.webp/bholaa-2022.webp",
    "posterImage": "https://images.justwatch.com/poster/309164504/s166/bholaa-2022.webp",
    "duration": "  2h 24min",
    "highestRank": 1,
    "top10Days": 13,
    "top100Days": 85,
    "top1000Days": 259,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "159K",
    "dislikes": "112",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  
  
  {
    "id":43,
    "title": "DEVARA PART 1",
    "year": 2024,
    "rank":1,
    "rankChange": "+250",
    "backdropImage": "https://images.justwatch.com/backdrop/320975332/s1440/ntr-30.webp/ntr-30.webp",
    "posterImage": "https://images.justwatch.com/backdrop/320975332/s1440/ntr-30.webp/ntr-30.webp",
    "duration": "  2h 50min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "78k",
    "dislikes": "3.2k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":44,
    "title": "Nosferatu the Vampyre ",
    "year": 1979,
    "rating": 81,
    "imdbRating": 7.4,
    "imdbVotes": "4.1k",
    "backdropImage": "https://images.justwatch.com/backdrop/305921926/s1440/nosferatu-the-vampyre.webp/nosferatu-the-vampyre.webp",
    "posterImage": "https://images.justwatch.com/poster/202949568/s166/nosferatu-the-vampyre.webp",
    "duration": "  2h 5min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "691",
    "dislikes": "135",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":45,
    "title": "The Umbrella Academy",
    "year": 2019,
    "rank":143,
    "rankChange": "+7",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/286521525/s1440/the-umbrella-academy.webp/the-umbrella-academy.webp",
    "posterImage": "https://images.justwatch.com/poster/286305959/s166/the-umbrella-academy.webp",
    "duration": "  2h 5min",
    "highestRank": 2,
    "top10Days": 14,
    "top100Days":237,
    "top1000Days": 1871,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "2.4k",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  


  {
    "id":46,
    "title": "Gladiator II",
    "year": 2024,
    "rating": 85,
    "rank":500,
    "rankChange": "+4300",
    "imdbRating": 6.3,
    "imdbVotes": "593k",
    "backdropImage": "https://images.justwatch.com/backdrop/318611814/s1440/gladiator-2.webp/gladiator-2.webp",
    "posterImage": "https://images.justwatch.com/poster/318611809/s166/gladiator-2.webp",
    "duration": "  2h 30min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "79",
    "dislikes": "6",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  {
    "id":47,
    "title": "Thunderbolts*",
    "year": 2025,
    "rank":123,
    "rankChange": "+78",
    "rating": 95,
    "imdbRating": 8.8,
    "imdbVotes": "490k",
    "backdropImage": "https://images.justwatch.com/backdrop/300660467/s1440/thunderbolts.webp/thunderbolts.webp",
    "posterImage": "https://images.justwatch.com/poster/313902806/s166/thunderbolts.webp",
    "duration": "  2h 0min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":48,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "rank":123,
    "rankChange": "+148",
    "rating": 96,
    "imdbRating": 8.9,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/301567989/s1440/the-lord-of-the-rings-the-fellowship-of-the-ring.webp/the-lord-of-the-rings-the-fellowship-of-the-ring.webp",
    "posterImage": "https://images.justwatch.com/poster/8731868/s166/the-lord-of-the-rings-the-fellowship-of-the-ring.webp",
    "duration": "  2h 58min",
    "highestRank": 5,
    "top10Days": 2,
    "top100Days":532,
    "top1000Days": 2983,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },

  {
    "id":49,
    "title": "Mr. Crocket",
    "year": 2024,
    "rank":1430,
    "rankChange": "+7900",
    "rating": 53,
    "imdbRating": 4.8,
    "imdbVotes": "2930k",
    "backdropImage": "https://images.justwatch.com/backdrop/320870614/s1440/mr-crocket.webp/mr-crocket.webp",
    "posterImage": "https://images.justwatch.com/poster/320870611/s166/mr-crocket.webp",
    "duration": "  1h 28min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  },


  
  {
    "id":50,
    "title": "MAGPIE",
    "year": 2024,
    "rank":143,
    "rankChange": "+7",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/311632079/s1440/.webp.webp",
    "posterImage": "https://images.justwatch.com/poster/311632078/s166/.webp",
    "duration": "  1h 30min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist"
  }

];

app.get('/api/New-movies', (req, res) => {
  const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;

  if (titleQuery) {
    // Search movie by title
    const movieByTitle = movies.find(movie => movie.title.toLowerCase() === titleQuery);
    if (movieByTitle) {
      return res.json(movieByTitle);
    } else {
      return res.status(404).json({ message: 'Movie not found by title' });
    }
  } else {

    res.json(movies);
  }
});

// Endpoint to get a single movie by ID
app.get('/api/New-movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found by id' });
  }
  res.json(movie);
});

// Endpoint to add a new movie
app.post('/api/movies', (req, res) => {
  const newMovie = { ...req.body, id: movies.length + 1 }; // Simple ID generation
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Listen to server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
