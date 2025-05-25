const films = [
  {
    title: "Back to the Future",
    image: "assets/backtofuture.webp",
    trailer: "https://www.youtube.com/embed/qvsgGtivCgs?si=oKuH40Y9bSCGixA0",
    description: "1985 yapımı Geleceğe Dönüş, yönetmenliğini Robert Zemeckis’in yaptığı, bilim kurgu ve macera türündeki kült bir filmdir. Hikâye, 17 yaşındaki lise öğrencisi Marty McFly’ın eksantrik bilim insanı Dr. Emmett “Doc” Brown ile olan dostluğu etrafında şekillenir.",
    cast: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, Thomas F. Wilson",
    year: "1985",
    director: "Robert Zemeckis",
    type: "Adventure, Comedy, Sci-Fi",
    imdb: "8.5",
    duration: "01:56:00"
  },

  {
    title: "Interstellar",
    image: "assets/interstellar.webp",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    description: "Interstellar (Yıldızlararası), Christopher Nolan’ın yönettiği, insanlığın hayatta kalma mücadelesini konu alan epik bir bilim kurgu filmidir. Yakın gelecekte geçen hikâyede, dünya kuraklık ve kıtlıkla boğuşmaktadır.",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine",
    year: "2014",
    director: "Christopher Nolan",
    type: "Adventure, Drama, Sci-Fi",
    imdb: "8.6",
    duration: "02:49:00"
  },
  {
    title: "The Dark Knight",
    image: "assets/thedarkknight.webp",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine, Maggie Gyllenhaal, Gary Oldman, Morgan Freeman",
    year: "2008",
    director: "Christopher Nolan",
    type: "Action, Crime, Drama",
    imdb: "9.0",
    duration: "02:32:00"
  },
  {
    title: "Top Gun: Maverick",
    image: "assets/topgun.jpg",
    trailer: "https://www.youtube.com/embed/xa_z57UatDY?si=6qZlVBJ61G9AoKRC",
    description: "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs.",
    cast: "Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris, Val Kilmer",
    year: "2022",
    director: "Joseph Kosinski",
    type: "Action, Drama",
    imdb: "8.3",
    duration: "02:10:00"
  },
  {
    title: "Fast And Furious 3: Tokyo Drift",
    image: "assets/tokyodrift.jpg",
    trailer: "https://www.youtube.com/embed/p8HQ2JLlc4E",
    description: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo.",
    cast: "Lucas Black, Bow Wow, Nathalie Kelley, Sung Kang, Brian Tee, Brian Goodman",
    year: "2006",
    director: "Justin Lin",
    type: "Action, Crime, Thriller",
    imdb: "6.0",
    duration: "01:44:00"
  },
  {
    title: "Now You See Me",
    image: "assets/nowyouseeme.jpg",
    trailer: "https://www.youtube.com/embed/4OtM9j2lcUA",
    description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances.",
    cast: "Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Mélanie Laurent, Isla Fisher, Dave Franco, Michael Caine, Morgan Freeman",
    year: "2013",
    director: "Louis Leterrier",
    type: "Crime, Mystery, Thriller",
    imdb: "7.2",
    duration: "01:55:00"
  },
  {
    title: "Arog",
    image: "assets/arog.jpg",
    trailer: "https://www.youtube.com/embed/s_jGIs9Vs-I",
    description: "A man travels back in time to the prehistoric era, where he must adapt to survive and find a way back home.",
    cast: "Cem Yılmaz, Özge Özberk, Özkan Uğur, Nil Karaibrahimgil, Zafer Algöz, Ozan Güven, Hasan Kaçan",
    year: "2008",
    director: "Ali Taner Baltacı, Cem Yılmaz",
    type: "Comedy, Sci-Fi",
    imdb: "7.3",
    duration: "02:08:00"
  },
  {
    title: "John Wick",
    image: "assets/johnwick.jpg",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
    description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Dean Winters, Adrianne Palicki",
    year: "2014",
    director: "Chad Stahelski",
    type: "Action, Thriller, Crime",
    imdb: "7.4",
    duration: "01:41:00"
  },

  {
    title: "The Godfather",
    image: "assets/godfather.webp",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    cast: "Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Diane Keaton",
    year: "1972",
    director: "Francis Ford Coppola",
    type: "Crime, Drama",
    imdb: "9.2",
    duration: "02:55:00"
  },
  {
    title: "Fight Club",
    image: "assets/fightclub.webp",
    trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    cast: "Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf, Jared Leto",
    year: "1999",
    director: "David Fincher",
    type: "Drama",
    imdb: "8.8",
    duration: "02:19:00"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    image: "assets/harrypotter.jpg",
    trailer: "https://www.youtube.com/embed/mNgwNXKBEW0?si=kqyupujp5L1a9T56",
    description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
    cast: "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Harris, Maggie Smith, Alan Rickman",
    year: "2001",
    director: "Chris Columbus",
    type: "Fantasy, Adventure, Family",
    imdb: "7.6",
    duration: "02:32:00"
  },

  {
    title: "The Matrix",
    image: "assets/matrix.jpg",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Joe Pantoliano",
    year: "1999",
    director: "Lana Wachowski, Lilly Wachowski",
    type: "Action, Sci-Fi",
    imdb: "8.7",
    duration: "02:16:00"
  },
  {
    title: "Baby Driver",
    image: "assets/babydriver.jpg",
    trailer: "https://www.youtube.com/embed/z2z857RSfhk",
    description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    cast: "Ansel Elgort, Lily James, Kevin Spacey, Jon Hamm, Jamie Foxx, Eiza González",
    year: "2017",
    director: "Edgar Wright",
    type: "Action, Crime, Music",
    imdb: "7.6",
    duration: "01:53:00"
  },

  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: "assets/lotr.webp",
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
    description: "A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.",
    cast: "Elijah Wood, Ian McKellen, Orlando Bloom, Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Billy Boyd, Dominic Monaghan, Christopher Lee, Hugo Weaving, Sean Bean, Ian Holm, Andy Serkis",
    year: "2001",
    director: "Peter Jackson",
    type: "Action, Adventure, Drama",
    imdb: "8.8",
    duration: "02:58:00"
  },
  {
    title: "G.O.R.A.",
    image: "assets/gora.jpg",
    trailer: "https://www.youtube.com/embed/NVUVqS2r6B8",
    description: "Dünyayı dolaşan halı satıcısı Arif, uzaylılar tarafından kaçırılır ve kendini G.O.R.A. adlı gezegende bulur. Burada komik olaylar zinciriyle hem gezegeni hem de kendini kurtarmaya çalışır.",
    cast: "Cem Yılmaz, Ozan Güven, Özge Özberk, Rasim Öztekin, Safak Sezer",
    year: "2004",
    director: "Ömer Faruk Sorak",
    type: "Komedi, Bilim Kurgu",
    imdb: "8.0",
    duration: "02:07:00"
  },

  {
    title: "Avengers: Endgame",
    image: "assets/endgame.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    description: "After the devastating events of Infinity War, the remaining Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner",
    year: "2019",
    director: "Anthony Russo, Joe Russo",
    type: "Action, Adventure, Sci-Fi",
    imdb: "8.4",
    duration: "03:01:00"
  },

  {
    title: "The Amazing Spider-Man",
    image: "assets/spiderman.jpg",
    trailer: "https://www.youtube.com/embed/-tnxzJ0SSOw",
    description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound spider-like powers and ventures out to solve the mystery of his parents' deaths.",
    cast: "Andrew Garfield, Emma Stone, Rhys Ifans, Denis Leary, Martin Sheen, Sally Field",
    year: "2012",
    director: "Marc Webb",
    type: "Action, Adventure, Sci-Fi",
    imdb: "6.9",
    duration: "02:16:00"
  },

  {
    title: "Joker",
    image: "assets/joker.webp",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen",
    year: "2019",
    director: "Todd Phillips",
    type: "Crime, Drama, Thriller",
    imdb: "8.4",
    duration: "02:02:00"
  }
];
