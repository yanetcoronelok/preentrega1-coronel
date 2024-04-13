const productosArray = [
  {
    id: "naturaleza-01",
    title: "Naturaleza-01",
    imagen: "./assets/images/naturaleza/vnaturaleza1.jpg",
    category: {
      name: "Nature",
      id: "Flowers",
    },
    price: 1000,
  },
  {
    id: "naturaleza-03",
    title: "Naturaleza-03",
    imagen: "./assets/images/naturaleza/vnaturaleza3.jpg",
    category: {
      name: "Nature",
      id: "Flowers",
    },
    price: 1000,
  },
  {
    id: "naturaleza-05",
    title: "Naturaleza-05",
    imagen: "./assets/images/naturaleza/vnaturaleza5.jpg",
    category: {
      name: "Nature",
      id: "Flowers",
    },
    price: 1000,
  },
  {
    id: "naturaleza-27",
    title: "Naturaleza-27",
    imagen: "./assets/images/naturaleza/vnaturaleza27.jpg",
    category: {
      name: "Nature",
      id: "Plants",
    },
    price: 1000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-add" id="${producto.id}">Add to my cart</button>
                    </div>
        `;
    contenedorProductos.append(div);
  });
}

cargarProductos();
