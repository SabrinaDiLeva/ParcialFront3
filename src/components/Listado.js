import React from 'react';
import Item from './Item';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

//LISTO
import data from './data.json'
const items=JSON.parse(JSON.stringify(data));

export default function Listado(props) {
  
    return (
      <div className='container'>
        {items.map((item)=>
          <Item id={item.id} nombre={item.producto.nombre} descripcion={item.producto.descripcion}
          stock={item.stock} agregarAlCarrito={props.agregarAlCarrito}/>
        )}
      </div>
    )
  }

