document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        { name: 'Jão', image: '.img/jao.jpg' },
        { name: 'AnaVitoria', image: '.img/anavitoria.jpg' },
        { name: 'Lagum', image: '.img/lagum.jpg' },
        { name: 'Rubel', image: '.img/rubel.jpg' },
        { name: 'Marina Senna', image: '.img/marinasena.jpg' },
        { name: 'Charlie Brown Jr', image: '.img/charliebrow.jpg' },
        { name: 'Tribalistas', image: '.img/tribalistas.jpg' }
    ];

    const albumData = [
        { name: 'Super', image: '.img/super.jpg', artist: 'Jão' },
        { name: 'Supernova', image: '.img/supernova.jpg', artist: 'Jão' },
        { name: 'As Cores, as Curvas e as Dores do Mundo', image: '.img/ascoresasdores.jpg', artist: 'Lagum' },
        { name: 'Claraboia', image: '.img/claraboia.jpg', artist: 'AnaVitoria' },
        { name: 'Jorge Vercilo ao vivo', image: '.img/jorgevercilo.jpg', artist: 'Jorge Vercilo' },
        { name: 'Do Cóccix até o Pescoço', image: '.img/elsasoares.jpg', artist: 'Elsa Soares' },
        { name: 'Alucinação', image: '.img/latinoamericano.jpg', artist: 'Belchior' }
    ];

    const artistGrid = document.querySelector('.artistas-grid');
    const albumsGrid = document.querySelector('.albuns');

    artistData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do artista ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `;

        artistGrid.appendChild(artistCard);
    });
    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do album ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;

        albumsGrid.appendChild(albumCard);
    });

});
