// @ts-nocheck
const search = document.getElementById('search');
const searchBtn = document.getElementById('search-button');

search.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchBtn.click();
  }
});

searchBtn.addEventListener('click', () => {
  if (search.value) {
    const searchType = document.querySelector("input[name='search-type']:checked").value;
    console.log(search.value, searchType);
    doSearch(search.value, searchType);
  }
});

const doSearch = (searchTerm, searchType) => {
  const searchEngine = 'https://www.google.com/search?q=';
  let keywords = ' -inurl:(htm|html|php|pls|txt) intitle:index.of (mp4|mkv|avi)';

  switch (searchType) {
    case 'Books':
      keywords = ' +(pdf|epub|txt|) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
      console.log(`It's book ${searchEngine + searchTerm + keywords}`);
      window.open(searchEngine + searchTerm + keywords, '_blank');
      break;
    case 'Audio':
      keywords = ' +(mp3|wav|aac|) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
      console.log(`It's Audio ${searchEngine + searchTerm + keywords}`);
      window.open(searchEngine + searchTerm + keywords, '_blank');
      break;
    default:
      console.log(`It's Video ${searchEngine + searchTerm + keywords}`);
      window.open(searchEngine + searchTerm + keywords, '_blank');
  }
};
