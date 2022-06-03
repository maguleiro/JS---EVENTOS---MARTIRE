class Producto{
	constructor(id,nombre,precio)
	{
		this.id=id;
		this.nombre=nombre;
		this.precio=precio;
	}
}

const producto1 = new Producto(1, "Fernet", "$500");
const producto2 = new Producto(2, "Jaggermeister", "$850");
const producto3 = new Producto(3, "Gin","$450");
const producto4 = new Producto(4, "Birra","$250");
const producto5 = new Producto(5, "Vodka","$1500");

const productos = [producto1,producto2,producto3,producto4,producto5];
console.log("INICIAL:", productos);

function crearTitulo()
{
	const titulo = document.createElement("h1");
	titulo.innerHTML="PRODUCTOS";
	document.body.appendChild(titulo);
}

crearTitulo();
crearMenu();

function crearMenu()
{
	let opciones = ["Lista de Productos", "Agregar Producto", "Buscar Producto"]

	opciones.forEach((opcion)=>{

	const boton = document.createElement("button");

	if(opcion === "Lista de Productos")
	{
		boton.addEventListener("click", ()=>{
			listarProductos();
		})
	}
	else if(opcion === "Agregar Producto")
	{
		boton.addEventListener("click", ()=>{
			agregarProducto();
			console.log(productos);
			listarProductos();
		})
	}

	boton.innerHTML=opcion;
	document.body.appendChild(boton);
});

}

function listarProductos()
{
	let miLista = document.querySelector("#listaProductos");
	if(!miLista)
		{
			miLista = document.createElement("ul");
			miLista.setAttribute("id","listaProductos");
		}
		miLista.innerHTML="";

		productos.forEach((producto)=>{
			const nodoLi= document.createElement("li");
			nodoLi.innerHTML=`${producto.nombre} ${producto.precio}`;
			miLista.appendChild(nodoLi);
		});
		document.body.appendChild(miLista);
}

function agregarProducto()
{
	let id=1;
	if(productos.lenght>0)
	{
		id=productos[productos.lenght-1].id+1;
	}

let nombre=prompt("Que producto desea añadir?");
let precio=prompt("Ingrese valor:")
let producto = new Producto(id, nombre, precio);

productos.push(producto);
}

const boton1 = document.getElementById("boton1");
boton1.addEventListener("mousedown",()=>{
	const boton3 = document.getElementById("boton3");
	boton3.setAttribute("style", "display:show")
	const boton4 = document.getElementById("boton4");
	boton4.setAttribute("style", "display:show")
})

const boton2 = document.getElementById("boton2");

boton2.addEventListener("mousedown",()=>{
	const boton2 = document.getElementById("boton2");
	boton3.setAttribute("style", "display:none")
	boton4.setAttribute("style", "display:none")
})



const boton3 = document.getElementById("boton3");
boton3.setAttribute("style", "display:none")
boton3.addEventListener("mouseover", ()=>{
	boton3.innerHTML="CAMBIAR FONDO A GRIS";
});

boton3.addEventListener("mouseout",()=>{
	document.body.setAttribute("style","background-color:slategrey","cursor:pointer");
	console.log("FONDO CAMBIADO")
});

const boton4 = document.getElementById("boton4");
boton4.setAttribute("style", "display:none")
boton4.addEventListener("mouseover", ()=>{
	boton3.innerHTML="CAMBIAR FONDO A BLANCO";
});

boton4.addEventListener("mouseout",()=>{
	document.body.setAttribute("style","background-color:white","cursor:pointer");
	console.log("FONDO CAMBIADO")
});