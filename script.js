document.getElementById('btnGenerar').addEventListener('click', () => {
    const contenedor = document.getElementById('contenedor-tablas');
    const limite = parseInt(document.getElementById('numUsuario').value);

    if (isNaN(limite) || limite <= 0) {
        alert("Por favor, ingresa un número positivo y entero.");
        return;
    }

    contenedor.innerHTML = '';

    for (let i = 1; i <= limite; i++) {
        const div = document.createElement('div');
        div.className = 'tabla-card';
        
        let html = `<h3>Tabla del ${i}</h3>`;

        for (let j = 1; j <= 10; j++) {
            html += `<p>${i} x ${j} = <strong>${i * j}</strong></p>`;
        }
        
        div.innerHTML = html;
        contenedor.appendChild(div);
    }
});