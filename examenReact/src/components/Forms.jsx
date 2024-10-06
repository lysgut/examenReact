import React, { useState } from 'react';

function Forms() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState(0);
    const [data, setData] = useState(''); // Para mostrar los datos en el h1

    // Función para manejar el cambio del input de nombre
    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    // Función para manejar el cambio del input de apellido
    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    // Función para manejar el cambio del input de edad
    const handleEdadChange = (e) => {
        setEdad(e.target.value);
    };

    // Función para manejar el clic en el botón y mostrar los datos
    const handleImprimir = () => {
        setData(`Acaba de ingresar al sistema ${apellido} ${nombre} de ${edad} años de edad`);
    };

    return (
        <>
            <div>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label htmlFor="">Apellido:</label>
                    <input type="text" value={apellido} onChange={handleApellidoChange} />
                </div>
                <div>
                    <label htmlFor="">Edad:</label>
                    <input type="number" value={edad} onChange={handleEdadChange} />
                </div>
                <button onClick={handleImprimir}>Imprimir</button>
                <h1>{data}</h1>
            </div>
        </>
    );
}

export default Forms;
