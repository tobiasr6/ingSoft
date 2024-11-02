document.addEventListener("DOMContentLoaded",()=>{
    // se inicializa el doc
    let divContenido = document.getElementById('contenido');
    divContenido.style.display = 'none';
    let divFormCliente = document.getElementById('clienteNuevo');
    divFormCliente.style.display = "none";
    let btnDowloadPDF = document.getElementById('btnGenerar');
    btnDowloadPDF.disabled = true;
    btnDowloadPDF.style.cursor = "not-allowed";
    btnDowloadPDF.style.opacity = "0.6"; 

});

function limitarLongitud(input) {
    const maxLength = 9;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}


function actualizarMonto() {
    console.log("Actualizando monto...");
    actualizarTotal(); // Llama a la función que ya tienes para actualizar el total
}
document.getElementById("precioServicio").addEventListener("input", actualizarMonto);


function mostrarFormulario(){
    let divForm = document.getElementById('contenido');
    let boton= document.getElementById('btnMostrarForm')
    divForm.style.display= "block";
    boton.style.display = "none";
    mostrarCliente();
    mostrarPiezas();
}

function mostrarRegistroCliente(){
    console.log("cliente mostrado")
    let divRegistroCliente = document.getElementById('clienteNuevo');
    divRegistroCliente.style.display = 'block';
}

let ocultarRegistroCliente=()=>{
    let divRegistroCliente = document.getElementById('clienteNuevo');
    divRegistroCliente.style.display = 'none';
}

///LISTA DE CLIENTES
var clientes = [
        {
            id: 1,
            nombre: "Juan",
            apellido: "Perez",
            telefono: "132321312313131",
            direccion: "Calle 123",
            fechaNacimiento: "21/04/2005",
            mail: "juanperez@gmail.com",
            fechaRegistro: "10/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 2,
            nombre: "Maria",
            apellido: "Gomez",
            telefono: "13456789321345",
            direccion: "Avenida 45",
            fechaNacimiento: "15/02/1999",
            mail: "mariagomez@gmail.com",
            fechaRegistro: "11/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 3,
            nombre: "Carlos",
            apellido: "Lopez",
            telefono: "98765432100123",
            direccion: "Callejón 78",
            fechaNacimiento: "03/09/1988",
            mail: "carloslopez@gmail.com",
            fechaRegistro: "12/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 4,
            nombre: "Ana",
            apellido: "Martinez",
            telefono: "12345678901234",
            direccion: "Boulevard 32",
            fechaNacimiento: "25/12/1995",
            mail: "anamartinez@gmail.com",
            fechaRegistro: "13/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 5,
            nombre: "Pedro",
            apellido: "Ramirez",
            telefono: "78901234567890",
            direccion: "Plaza Mayor 10",
            fechaNacimiento: "07/07/1978",
            mail: "pedroramirez@gmail.com",
            fechaRegistro: "14/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 6,
            nombre: "Laura",
            apellido: "Fernandez",
            telefono: "45678901234567",
            direccion: "Calle 47 Sur",
            fechaNacimiento: "10/10/1985",
            mail: "laurafernandez@gmail.com",
            fechaRegistro: "15/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 7,
            nombre: "Luis",
            apellido: "Garcia",
            telefono: "23456789012345",
            direccion: "Avenida Central 22",
            fechaNacimiento: "17/05/2002",
            mail: "luisgarcia@gmail.com",
            fechaRegistro: "16/10/2023",
            fechaBaja: null, 
            estado: "activo"
        },
        {
            id: 8,
            nombre: "Elena",
            apellido: "Diaz",
            telefono: "09876543210098",
            direccion: "Callejón Norte 5",
            fechaNacimiento: "20/11/1992",
            mail: "elenadiaz@gmail.com",
            fechaRegistro: "17/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 9,
            nombre: "Ricardo",
            apellido: "Ortiz",
            telefono: "56789012345678",
            direccion: "Parque 9",
            fechaNacimiento: "04/04/1976",
            mail: "ricardoortiz@gmail.com",
            fechaRegistro: "18/10/2023",
            fechaBaja: null,
            estado: "activo"
        },
        {
            id: 10,
            nombre: "Sofia",
            apellido: "Ruiz",
            telefono: "34567890123456",
            direccion: "Avenida del Sol 13",
            fechaNacimiento: "30/06/1998",
            mail: "sofiaruiz@gmail.com",
            fechaRegistro: "19/10/2023",
            fechaBaja: null,
            estado: "activo"
        }
];

var clienteSelect = null;

// Mostrar lista de clientes
let mostrarCliente=()=> {
    let select = document.getElementById('selectClientes');
    
    // Limpiar las opciones existentes en el select antes de agregar nuevas
    select.innerHTML = '';
    // Agrega la opcion por defecto como seleccione un cliente asi no sale el primer cliente como seleccionado, se presta a confusion
    let opcionPredeterminada = document.createElement('option');
    opcionPredeterminada.value = ''; 
    opcionPredeterminada.innerHTML = 'Seleccione un cliente'; 
    opcionPredeterminada.disabled = true; // Deshabilitar la opción
    opcionPredeterminada.selected = true; // Hacerla seleccionada por defecto
    select.appendChild(opcionPredeterminada); 


    clientes.forEach((cliente) => {
        let opcion = document.createElement('option');
        opcion.value = cliente.id; // Establecer el valor del <option> al ID del cliente
        opcion.innerHTML = `${cliente.id} - ${cliente.nombre} ${cliente.apellido} - ${cliente.telefono}`;
        select.appendChild(opcion);
    });

    // Escucha el evento `change` en el <select> para guardar el cliente seleccionado
    // Escuchar el evento `change` en el <select> para guardar el cliente seleccionado
    select.addEventListener('change', () => {
        const clienteId = select.value; // Obtener el valor seleccionado
        if (clienteId) { // Asegurarse de que se seleccionó un cliente
            clienteSelect = clientes.find((client) => client.id == clienteId); // Buscar el cliente por ID
            console.log("Cliente seleccionado:", clienteSelect); // Muestra el cliente seleccionado en la consola
        } else {
            clienteSelect = null; // Reiniciar si no hay selección válida
            console.log("Ningún cliente seleccionado");
        }
    });
};


var piezas = [
    {
        id: 1,
        nombre: "Pantalla LCD",
        tipoEquipo: "Celular",
        descripcion: "Pantalla LCD de 5.5 pulgadas compatible con múltiples modelos.",
        precio: 50.00,
        stock: 10,
        cantidad: 0
    },
    {
        id: 2,
        nombre: "Batería de 3000 mAh",
        tipoEquipo: "Celular",
        descripcion: "Batería recargable de litio compatible con varios modelos de smartphones.",
        precio: 20.00,
        stock: 15,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "Fuente de Poder 500W",
        tipoEquipo: "PC",
        descripcion: "Fuente de poder para computadoras de escritorio con conectores SATA y PCIe.",
        precio: 45.00,
        stock: 8,
        cantidad: 0
    },
    {
        id: 4,
        nombre: "Disco Duro SSD 240GB",
        tipoEquipo: "PC",
        descripcion: "Unidad de estado sólido de 240GB para mejorar el rendimiento del sistema.",
        precio: 35.00,
        stock: 12,
        cantidad: 0
    },
    {
        id: 5,
        nombre: "Cartucho de Tinta Negra",
        tipoEquipo: "Impresora",
        descripcion: "Cartucho de tinta negra compatible con impresoras de inyección de tinta.",
        precio: 15.00,
        stock: 20,
        cantidad: 0
    },
    {
        id: 6,
        nombre: "Kit de Fusores",
        tipoEquipo: "Impresora",
        descripcion: "Kit de fusores compatible con impresoras láser para mejorar la calidad de impresión.",
        precio: 75.00,
        stock: 5,
        cantidad: 0
    },
    {
        id: 7,
        nombre: "Pantalla LED 24 pulgadas",
        tipoEquipo: "Pantalla",
        descripcion: "Pantalla de repuesto de 24 pulgadas compatible con varios monitores LED.",
        precio: 100.00,
        stock: 7,
        cantidad: 0
    },
    {
        id: 8,
        nombre: "Cable HDMI",
        tipoEquipo: "Pantalla",
        descripcion: "Cable HDMI de 1.5 metros de alta velocidad, compatible con televisores y monitores.",
        precio: 10.00,
        stock: 30,
        cantidad: 0
    },
    {
        id: 9,
        nombre: "Pantalla Táctil 7 pulgadas",
        tipoEquipo: "Tablet",
        descripcion: "Pantalla táctil de repuesto para tabletas de 7 pulgadas.",
        precio: 60.00,
        stock: 10,
        cantidad: 0
    },
    {
        id: 10,
        nombre: "Memoria RAM 8GB DDR4",
        tipoEquipo: "PC",
        descripcion: "Módulo de memoria RAM DDR4 de 8GB para mejorar el rendimiento de la PC.",
        precio: 40.00,
        stock: 14,
        cantidad: 0
    },
    {
        id: 11,
        nombre: "Altavoz Interno",
        tipoEquipo: "Celular",
        descripcion: "Altavoz de repuesto para mejorar la calidad de sonido en llamadas.",
        precio: 8.00,
        stock: 25,
        cantidad: 0
    },
    {
        id: 12,
        nombre: "Puerto de Carga Micro USB",
        tipoEquipo: "Celular",
        descripcion: "Puerto de carga de repuesto para dispositivos con entrada Micro USB.",
        precio: 5.00,
        stock: 50,
        cantidad: 0
    },
    {
        id: 13,
        nombre: "Cabezal de Impresión",
        tipoEquipo: "Impresora",
        descripcion: "Cabezal de impresión para impresoras de inyección de tinta.",
        precio: 25.00,
        stock: 6,
        cantidad: 0
    },
    {
        id: 14,
        nombre: "Teclado para Laptop",
        tipoEquipo: "PC",
        descripcion: "Teclado de repuesto compatible con varios modelos de laptops.",
        precio: 30.00,
        stock: 10,
        cantidad: 0
        
    },
    {
        id: 15,
        nombre: "Placa Madre",
        tipoEquipo: "PC",
        descripcion: "Placa base de repuesto para equipos de sobremesa con sockets LGA 1151.",
        precio: 120.00,
        stock: 3,
        cantidad: 0
    }
];

var piezasSeleccionadas =[];

function mostrarPiezas(){
    let divPiezasDisponibles = document.getElementById('piezasDisponibles');
    piezas.forEach((pieza,index) => {
        let piezaDiv = document.createElement('div');
        piezaDiv.innerHTML = `
            <strong>${pieza.nombre}</strong> - ${pieza.tipoEquipo}<br>
            Descripción: ${pieza.descripcion}<br>
            Stock: ${pieza.stock}<br>
            Precio: $${pieza.precio} <br>
            <button onclick="seleccionarPieza(${index})">Seleccionar</button>
            <hr>
        `; 
        divPiezasDisponibles.appendChild(piezaDiv);
    });
};

function seleccionarPieza(index) {
    let pieza = piezas[index];
    let piezaExistente = piezasSeleccionadas.find(p => p.id === pieza.id);

    if (piezaExistente) {
        if (piezaExistente.cantidad < pieza.stock) {
            piezaExistente.cantidad += 1; 
            console.log(`Cantidad actualizada para ${pieza.nombre}: ${piezaExistente.cantidad}`);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay más stock disponible para esta pieza.',
            });
        }
    } else {
        if (pieza.stock > 0) {
            piezasSeleccionadas.push({ ...pieza, cantidad: 1 }); 
        
            console.log("Pieza seleccionada:", pieza);
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay más stock disponible para esta pieza.',
            });
        }
    }

    console.log("Array de piezas seleccionadas:", piezasSeleccionadas);
    actualizarPiezas();
    actualizarTotal();
}

var montoReparacionFinal=0;

function actualizarTotal() {
    console.log("Entra en actualizarTotal()");

    // Calcular el monto total de reparación de las piezas seleccionadas
    const montoReparacionFinal = piezasSeleccionadas.reduce((total, pieza) => {
        return total + (pieza.precio * pieza.cantidad);
    }, 0);

    console.log("Monto total de reparación:", montoReparacionFinal);

    // Obtener el elemento del precio del servicio
    let totalServicioElement = document.getElementById('precioServicio');
    let totalServicio = parseFloat(totalServicioElement.value) || 0;

    // Validar el precio del servicio
    if (totalServicio < 0) {
        totalServicio = 0;
    }

    // Obtener el elemento del monto final
    let montoFinalElement = document.getElementById("montoFinal");
    
    // Calcular el total de las piezas seleccionadas y sumar el servicio
    let totalPrecio = montoReparacionFinal + totalServicio;

    // Actualizar el valor en el HTML
    montoFinalElement.innerHTML = totalPrecio.toFixed(2);
}


function actualizarPiezas(){
    let divPiezasSelect = document.getElementById('piezasNecesarias');
    divPiezasSelect.innerHTML = "";

    piezasSeleccionadas.map((pieza)=>{
        let divNuevaPieza = document.createElement('div');
        divNuevaPieza.innerHTML = `
            <strong>${pieza.nombre}</strong> - ${pieza.tipoEquipo}<br>
            Descripción: ${pieza.descripcion}<br>
            Precio: $${pieza.precio} <br>
            Cantidad: ${pieza.cantidad || 1}
            <button style="background-color: red; color: white;" onclick="eliminarPieza(${pieza.id})"><i class="fa-solid fa-minus"></i></button>
            <button style="background-color: red; color: white;" onclick="eliminarCompletoPieza(${pieza.id})"><i class="fa-solid fa-trash"></i></button>

            <hr>
            `;
            
        divPiezasSelect.appendChild(divNuevaPieza);
    })
}

// function validarCampos() {
//     let esValido = true;
//     let mensajeError = "";

//     // Aquí asume que hay campos con los IDs correspondientes
//     let precioServicio = document.getElementById("precioServicio").value;
//     let piezasSeleccionadas = document.getElementById("piezasNecesarias").children.length; // Número de piezas seleccionadas

//     // Verificar que el precio del servicio no esté vacío y sea un número positivo
//     if (precioServicio.trim() === "" || isNaN(precioServicio) || parseFloat(precioServicio) <= 0) {
//         esValido = false;
//         mensajeError += "El precio del servicio debe ser un número positivo.\n";
//     }

//     // Verificar que haya al menos una pieza seleccionada
//     if (piezasSeleccionadas === 0) {
//         esValido = false;
//         mensajeError += "Debes seleccionar al menos una pieza.\n";
//     }

//     // Mostrar el mensaje de error si no es válido
//     if (!esValido) {
//         alert(mensajeError); // Cambia esto por una alerta personalizada si lo prefieres
//     }

//     return esValido; // Devuelve true si todo es válido, false si hay errores
// }
function eliminarCompletoPieza(idPieza) {
    piezasSeleccionadas = piezasSeleccionadas.filter(pieza => pieza.id !== idPieza);

    actualizarTotal();
    actualizarPiezas();
}


function eliminarPieza(idPieza) {
    let piezaExistente = piezasSeleccionadas.find(pieza => pieza.id === idPieza);

    if (piezaExistente) {
        if (piezaExistente.cantidad > 1) {
            piezaExistente.cantidad -= 1; 
            console.log(`Cantidad reducida para ${piezaExistente.nombre}: ${piezaExistente.cantidad}`);
        } else {
            // Si la cantidad es 1, eliminarla del array
            piezasSeleccionadas = piezasSeleccionadas.filter(pieza => pieza.id !== idPieza);
            console.log(`Pieza eliminada: ${piezaExistente.nombre}`);
        }
    }

    actualizarTotal();
    actualizarPiezas();
}




// registrar nuevo cliente
function registrarCliente(event){
    event.preventDefault();
    //* OBTENGO LOS DATOS DEL CLIENTE
    const form = document.getElementById('clienteNuevoForm');
    const formData = new FormData(form);

    // Convertir FormData a un objeto
    const data = Object.fromEntries(formData.entries());


    // Verificar que todos los campos estén completos
    const allFieldsFilled = Object.values(data).every(value => value.trim() !== '');

    if (!allFieldsFilled) {
        alert("Por favor, completa todos los campos.");
        return 
    }

    // Verifico si el usuario ya existe
    let resultExist = validarExistenciaUser(data);

    console.log("Datos del formulario:", resultExist);
    if(resultExist){
        Swal.fire("Atencion", "Ya existe un Cliente registrado con el mail propocionado", "error");
        return 
    }
    
    let newCliente = {
            id: clientes.length+1,
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            direccion: data.direccion,
            fechaNacimiento: data.fechaNacimiento,
            mail: data.mail,
            fechaRegistro: new Date().toLocaleDateString(),
            fechaBaja: null,
            estado: "activo"
    };

    clientes.push(newCliente);
    Swal.fire("Exito", "Cliente Registrado con Existo");
    ocultarRegistroCliente();
}



let validarExistenciaUser=(data)=>{
    let exist = false;
    exist = clientes.some(user => user.mail === data.mail);
    return exist;
};

let confirmarPresupuesto = () => {
    // Función para validar los campos
    const validarCampos = () => {
        let esValido = true;
        let mensajeError = "";

        // Obtener el valor del precio del servicio
        let precioServicio = document.getElementById("precioServicio").value;
        let piezasSeleccionadas = document.getElementById("piezasNecesarias").children.length; // Número de piezas seleccionadas
        let clienteSeleccionado = document.getElementById("selectClientes").value; // ID del cliente seleccionado
        let descripcion = document.getElementById("descripcionServicio").value; // Descripción del presupuesto

        // Verificar que el precio del servicio no esté vacío
        if (precioServicio.trim() === "") {
            esValido = false;
            mensajeError += "El precio del servicio no puede estar vacío.\n";
        } else if (isNaN(precioServicio) || parseFloat(precioServicio) <= 0) {
            esValido = false;
            mensajeError += "El precio del servicio debe ser un número positivo.\n";
        }

        // Verificar que haya al menos una pieza seleccionada
        if (piezasSeleccionadas === 0) {
            esValido = false;
            mensajeError += "Debes seleccionar al menos una pieza.\n";
        }

        // Verificar que haya un cliente seleccionado
        if (!clienteSeleccionado) {
            esValido = false;
            mensajeError += "Debes seleccionar un cliente.\n";
        }

        // Verificar que la descripción tenga al menos 5 caracteres
        if (descripcion.trim().length < 5) {
            esValido = false;
            mensajeError += "La descripción debe tener al menos 5 caracteres.\n";
        }

        // Mostrar el mensaje de error si no es válido
        if (!esValido) {
            Swal.fire({
                title: "Error",
                text: mensajeError,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }

        return esValido; // Devuelve true si todo es válido, false si hay errores
    };

    // Llamar a la función de validación antes de mostrar la alerta de confirmación
    if (validarCampos()) {
        Swal.fire({
            title: "Finalizar Presupuesto",
            text: "¿Desea confirmar el presupuesto?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma
                console.log("Presupuesto confirmado");
                let btnDowloadPDF = document.getElementById('btnGenerar');
                btnDowloadPDF.disabled = false;
                btnDowloadPDF.style.cursor = "pointer";
                btnDowloadPDF.style.opacity = "1"; 
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Si el usuario cancela
                console.log("Presupuesto cancelado");
                // Puedes agregar cualquier acción si se cancela
            }
        });
    } else {
        console.log("No se puede confirmar el presupuesto, hay errores.");
    }
};


let cancelarPresupuesto = () => {
    Swal.fire({
        title: "Cancelar Presupuesto",
        text: "¿Está seguro de que desea cancelar el presupuesto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cancelar",
        cancelButtonText: "No, continuar",
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma la cancelación
            console.log("Presupuesto cancelado");
            clienteSelect = null;
            mostrarCliente();
            piezasSeleccionadas = [];
            mostrarPiezas();
            montoReparacionFinal = 0;
            ocultarRegistroCliente();

            // Ocultar el formulario de cliente y mostrar el contenido principal
            let divContenido = document.getElementById('contenido');
            divContenido.style.display = 'block';
            let divFormCliente = document.getElementById('clienteNuevo');
            divFormCliente.style.display = "none";

            // Deshabilitar el botón de generar PDF
            let btnDowloadPDF = document.getElementById('btnGenerar');
            btnDowloadPDF.disabled = true;
            btnDowloadPDF.style.cursor = "not-allowed";
            btnDowloadPDF.style.opacity = "0.6"; 

            // Recargar la página
            window.location.reload();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Si el usuario elige continuar y no cancelar
            console.log("Cancelación del presupuesto anulada");
            // Cualquier acción adicional si no se confirma la cancelación
        }
    });
};

async function generarPDF() {
   const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    let fechaEmision = new Date();
    let fechaVencimiento = new Date(fechaEmision); 
    fechaVencimiento.setDate(fechaEmision.getDate() + 15);
     console.log(fechaEmision)
    console.log(fechaVencimiento)
    let fechaEmisionFormateada = formatDate(fechaEmision);
    let fechaVencimientoFormateada = formatDate(fechaVencimiento);
    console.log(fechaEmisionFormateada)
    console.log(fechaVencimientoFormateada)

    // Nombre de la empresa con fondo negro y texto blanco
    doc.setFillColor(0, 0, 0); // Fondo negro
    doc.rect(15, 10, 180, 20, 'F'); // Dibuja el fondo negro
    doc.setTextColor(255, 255, 255); // Texto blanco
    doc.setFontSize(30);
    doc.text('Techint', 20, 25);

    // Título del presupuesto
    doc.setTextColor(0, 0, 0); // Cambia el texto a negro
    doc.setFontSize(22); // Más pequeño que el nombre de la empresa
    doc.setFont('Helvetica', 'bold');
    doc.text("Presupuesto de Reparación", 40, 40);

    // Fecha de emisión
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    doc.text(`Fecha de Emisión: ${fechaEmisionFormateada}`, 150, 40);

    // Información del cliente
    const startY = 50;
    const padding = 5;
    const sectionHeight = 35; // Altura del contenedor de información del cliente
    const paddingBottom = 5;
    const sectionY = startY + sectionHeight + paddingBottom;
    

    doc.setFillColor(200, 200, 200); // Fondo gris claro
    doc.rect(15, startY, 170, sectionHeight + paddingBottom, 'F'); // Dibuja el fondo gris claro

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(0, 0, 0); // Texto negro
    doc.text(`Cliente: ${clienteSelect.nombre} ${clienteSelect.apellido}`, 20, startY + 7);
    doc.text(`Teléfono: ${clienteSelect.telefono}`, 20, startY + 14);
    doc.text(`Correo: ${clienteSelect.mail}`, 20, startY + 21);
    doc.text(`Fecha de Emisión: ${fechaEmisionFormateada}`, 20, startY + 28);
    doc.text(`Fecha de Vencimiento: ${fechaVencimientoFormateada}`, 20, startY + 35);

    // Detalle de piezas
    const detalleY = sectionY + padding + 10;
    doc.setFontSize(14);
    doc.text("Detalle de Piezas:", 20, detalleY);
    const piezasHeight = 10 + piezasSeleccionadas.length * 10 + 10;
    // Dibuja borde para el detalle de piezas
    doc.rect(15, detalleY - 10, 180, piezasHeight, 'S'); // Dibuja el borde

    doc.setFontSize(12);
    piezasSeleccionadas.forEach((pieza, index) => {
        doc.text(`- ${pieza.nombre}: $${pieza.precio}`, 20, detalleY + 10 + index * 10);
    });

    // Encabezado de productos
    const headerY = detalleY + 10 + piezasSeleccionadas.length * 10 + 10;
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text("Producto              Precio      Cantidad    Total", 15, headerY);
    doc.line(15, headerY + 2, 195, headerY + 2); // Línea bajo encabezado

    // Lista de productos
    let productos = [
        // Simulación de productos
        { nombre: 'Producto A', precio: 100, cantidad: 1, total: 100 },
        { nombre: 'Producto B', precio: 50, cantidad: 2, total: 100 },
        // Puedes agregar más productos
    ];

    productos.forEach((producto, index) => {
        const productoY = headerY + 10 + index * 10;
        doc.text(`${producto.nombre}               $${producto.precio}          ${producto.cantidad}         $${producto.total}`, 15, productoY);
    });

    // Total y fecha de vencimiento
    const totalY = headerY + 10 + productos.length * 10 + 10;
    doc.setFont('Helvetica', 'bold');
    doc.text(`Subtotal: $${montoReparacionFinal}`, 15, totalY);
    doc.text(`Total: $${montoReparacionFinal}`, 15, totalY + 10);
    doc.text(`Fecha de Vencimiento: ${fechaVencimiento.toLocaleDateString()}`, 15, totalY + 20);

    // Guardar el PDF
                    // Abrir el PDF en una nueva ventana
    const pdfUrl = doc.output("bloburl");
    window.open(pdfUrl, '_blank');

    // doc.save(`presupuesto_reparacion_${fechaEmisionFormateada}.pdf`);


}