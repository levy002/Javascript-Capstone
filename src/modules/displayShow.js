import getshow from './getShows.js';

const allShows = document.querySelector('.allShows');

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);

  Shows.map((show) => {
    const showInfo = document.createElement('li');
    showInfo.id = show.id;
    showInfo.className = 'show';
    showInfo.innerHTML = `
  <img id="show-img" src=${show.image.medium} alt="show Image">
  <div id="like-show">
    <h2 id="show-title">${show.name}</h2>
    <i class="fa fa-heart-o" id="like-icon" aria-hidden="true"></i>
  </div>
  <p id="likes">0 likes</p>
  <button type="button" id="comment-btn" value="abc">Comments</button>
  `;
    allShows.appendChild(showInfo);
    return show;
  });
};

export default displayShows;