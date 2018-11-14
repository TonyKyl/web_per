


function haku () {

  const hakuteksti = document.getElementById('hakuteksti').value;
  fetch(`https://api.tvmaze.com/search/shows?q=${hakuteksti}`).
      then(tulos => tulos.json()).
      then(leffat => {
        console.log(leffat);
        const hakutulos = document.getElementById('hakutulos');
        hakutulos.innerHTML = leffat.map(({show}) => `
            ${show.image ? `<img src="${show.image.medium}">` : ''}
               
               <br>
               <h2 >${show.name}</h2>
                    <h7>${show.url}</h7>
                    <br>
                    <h7>${show.genres}</h7>
                    <h7>${show.summary}</h7>
             `).join('');
      })
}

const hakunappi = document.getElementById('hakunappi');
hakunappi.addEventListener('click',haku);