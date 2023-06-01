// TMDB API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTUxODJiZDFkNWYxNzZhZmVhYzJjZmNiODBkNTc4MSIsInN1YiI6IjY0NzUzYmViYzI4MjNhMDEyNzY5NjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FV2ihU3BtS7aorHWt1rb-4_jwoZW8_6C6nTNZsoxcSo'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7a5182bd1d5f176afeac2cfcb80d5781', options)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieListElement = document.querySelector('.movie-cards-list');

    // 영화 카드
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';

      // 이미지 삽입
      const movieImage = document.createElement('img')
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

      // 영화 제목
      const movieTitle = document.createElement('h3');
      movieTitle.className = 'title';
      movieTitle.textContent = movie.title;

      // 영화 개봉일
      const movieYear = document.createElement('p');
      movieYear.className = 'year';
      movieYear.textContent = movie.release_date;

      // 평점
      const movieAverage = document.createElement('p');
      movieAverage.className = 'average';
      movieAverage.textContent = movie.vote_average;

      // 코멘트
      const movieComment = document.createElement('p');
      movieComment.className = 'comment';
      movieComment.textContent = movie.overview;


      movieCard.appendChild(movieImage);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieYear);
      movieCard.appendChild(movieAverage);
      movieCard.appendChild(movieComment);

      // 영화 카드 클릭시 id alert창 출력
      movieCard.addEventListener('click', () => {
        alert(`영화 ID : ${movie.id}`);
      });

      movieListElement.appendChild(movieCard);

    });
  })
  .catch(err => console.error(err));

// 검색 기능 구현하기
function search() {
  const inputElement = document.querySelector("#search")
  const inputValue = inputElement.value;
  const lower = inputValue.toLowerCase();

  const movieList = document.querySelectorAll(".movie-card");
  movieList.forEach(function(movie){
    const movieTitle = movie.querySelector(".title").innerText.toLowerCase()
    if(movieTitle.indexOf(lower) !== -1) {
      movie.style.display = "block"
    }else {
      movie.style.display = "none"
    }
  })
}