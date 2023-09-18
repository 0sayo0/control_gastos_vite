import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto valido');

            return;
        }

        setMensaje('');
        setIsValidPresupuesto(true);

    }

    const handleInputChange = (e) => { //Esta funcion sirve para que se pueda escribir libremenete en el campo de numero        
        const inputValue = parseFloat(e.target.value);

        if (!isNaN(inputValue)) {
            setPresupuesto(inputValue);
        } else {
            setPresupuesto(''); // O algún otro valor predeterminado en caso de NaN
        }

        if(inputValue === '' || inputValue <= 0) {
            setPresupuesto(0);
        } else {
            setPresupuesto(inputValue);
        }
    }

  return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form  orm onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={handleInputChange} /** e => setPresupuesto(Number(e.target.value)) */
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>
            <h2 className="created">Created by Jonathan Morales with React JS</h2>
        </div>
  )
}

export default NuevoPresupuesto;