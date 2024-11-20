

document.addEventListener('DOMContentLoaded', function() {
    let alojamientosData = [];

    fetch('js/alojamiento.json')
        .then(response => response.json())
        .then(data => {
            alojamientosData = data;
            mostrarAlojamientos(alojamientosData);
        })
        .catch(error => console.error('Error fetching the JSON:', error));

    function mostrarAlojamientos(alojamientos) {
        const container = document.getElementById('alo');
        container.innerHTML = '';

        alojamientos.forEach(e => {
            const alojamiento = e.alojamientos || e; // Maneja diferentes estructuras de JSON
            const article = document.createElement('article');
            article.classList.add('resto');

            article.innerHTML = `
                <div class="imagen-resto">
                    <img src="${alojamiento.imagen}" alt="${alojamiento.nombre}">
                </div>
                <h3 id="${alojamiento.id}">${alojamiento.nombre}</h3>
                
                <div class="iconos">
                    <div class="icon">
                        <div class="lado">
                            <h2 class="descrip">${alojamiento.descrip}</h2>
                        </div>
                        
                    </div>
                   
                </div>
                <div class="precio">$${alojamiento.precio}</div>
                `;
            
            container.appendChild(article);
        });
    }

    const searchInput = document.querySelector('.buscador input[type="search"]');
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredAlojamientos = alojamientosData.filter(e => {
            const alojamiento = e.alojamientos || e;
            return (
                alojamiento.nombre.toLowerCase().includes(query) ||
                alojamiento.lugar.toLowerCase().includes(query)
            );
        });
        mostrarAlojamientos(filteredAlojamientos);
    });
});
