document.addEventListener('DOMContentLoaded', function() {
    fetch('js/viajes.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('options');
            container.innerHTML = ''; // Limpia el contenedor antes de agregar los datos

            data.forEach(e => {
                const article = document.createElement('article');
                article.classList.add('lugar');
                
                article.innerHTML = `
                    <div class="imagen">
                        <img src="${e.imagen}" alt="">
                    </div>
                    <h3><a href="lugares.html" data-id="${e.id}">${e.lugar}</a></h3>
                    <h4>$${e.precio}</h4>
                `;
                
                container.appendChild(article);
            });

            // Añadir el manejador de eventos para los enlaces después de cargarlos
            document.querySelectorAll('a[data-id]').forEach(link => {
                link.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    localStorage.setItem('selectedPlaceId', id);
                });
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});


document.addEventListener('DOMContentLoaded', function() {
    fetch('js/viajes.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('op');
            container.innerHTML = ''; // Limpia el contenedor antes de agregar los datos

            data.forEach(e => {
                const article = document.createElement('article');
                article.classList.add('aventu');
                
                article.innerHTML = `
                    <div class="imagen">
                        <img src="${e.aventura.imagen}" alt="">
                    </div>
                    <h3><a href="aventura.html" data-id="${e.id}">${e.aventura.aventura}</a></h3>
                    <h4>$${e.precio}</h4>
                `;
                
                container.appendChild(article);
            });

            // Añadir el manejador de eventos para los enlaces después de cargarlos
            document.querySelectorAll('a[data-id]').forEach(link => {
                link.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    localStorage.setItem('selectedPlaceId', id);
                });
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});
