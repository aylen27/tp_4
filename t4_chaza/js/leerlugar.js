document.addEventListener('DOMContentLoaded', function() {
    const id = localStorage.getItem('selectedPlaceId');

    if (id) {
        fetch('js/viajes.json')
            .then(response => response.json())
            .then(data => {
                const item = data.find(m => m.id === id);
                if (item) {
                    document.querySelector('.restaurantes').innerHTML = `
                        <div class="imagen">
                            <img src="${item.imagen}" alt="">
                        </div>
                        <h3 id="${item.id}">${item.lugar}</h3>
                        <h4>Overview</h4>
                        <br><br><br>
                        <div class="icons_resto">
                            <div class="iconos">
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                        <h2>${item.ranking}</h2>
                                    </div>
                                    <h5>Rating</h5>
                                </div>
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-cloud" style="color: #74C0FC;"></i>
                                        <h2>${item.grados}°C</h2>
                                    </div>
                                    <h5>Temperature</h5>
                                </div>
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-regular fa-clock"></i>
                                        <h2>${item.duracion} hrs</h2>
                                    </div>
                                    <h5>Duration</h5>
                                </div>
                            </div>
                        </div>
                        <div class="descri">
                            <p>${item.descripcion}</p>
                        </div>
                        <div class="final">
                        <br>
                            <p>Total price: </p>
                            <h1>$${item.precio}</h1>
                        </div>
                    `;
                } else {
                    document.querySelector('.restaurantes').innerHTML = 'No se encontró el lugar.';
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    } else {
        document.querySelector('.restaurantes').innerHTML = 'No se ha seleccionado ningún lugar.';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const id = localStorage.getItem('selectedPlaceId');

    if (id) {
        fetch('js/viajes.json')
            .then(response => response.json())
            .then(data => {
                const item = data.find(m => m.id === id);
                if (item) {
                    document.querySelector('.aventuras').innerHTML = `
                        <div class="imagen">
                            <img src="${item.aventura.imagen}" alt="">
                        </div>
                        <h3 id="${item.aventura.id}">${item.aventura.aventura}</h3>
                        <h4>Overview</h4>
                        <br><br><br>
                        <div class="icons_resto">
                            <div class="iconos">
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                        <h2>${item.ranking}</h2>
                                    </div>
                                    <h5>Rating</h5>
                                </div>
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-cloud" style="color: #74C0FC;"></i>
                                        <h2>${item.aventura.dificultad}</h2>
                                    </div>
                                    <h5>Dificultad</h5>
                                </div>
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-regular fa-clock"></i>
                                        <h2>${item.aventura.duracion} hrs</h2>
                                    </div>
                                    <h5>Duration</h5>
                                </div>
                            </div>
                        </div>
                        <div class="descri">
                            <p>${item.aventura.descripcion}</p>
                        </div>
                        <div class="final">
                            <br><br>
                            <p>Total price: </p>
                            <h1>$${item.aventura.precio}</h1>
                        </div>
                    `;
                } else {
                    document.querySelector('.aventuras').innerHTML = 'No se encontró el lugar.';
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    } else {
        document.querySelector('.aventuras').innerHTML = 'No se ha seleccionado ningún lugar.';
    }
});


