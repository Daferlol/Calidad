// Función para alternar el menú hamburguesa en dispositivos móviles
function toggleMenu() {
  var menuDesplegable = document.getElementById('menuDesplegable');
  menuDesplegable.classList.toggle('active');

  // Event listener para cerrar el menú si se hace clic fuera de él
  document.body.addEventListener('click', function(event) {
      var target = event.target;
      var isMenuClick = target.closest('#menuDesplegable');
      var isHamburgerClick = target.closest('.hamburguesa');

      if (!isMenuClick && !isHamburgerClick) {
          menuDesplegable.classList.remove('active');
      }
  });
}

// Variable global para almacenar los productos en el carrito
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    var producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    mostrarCarrito();
    calcularTotal();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    var carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = ''; // Limpiar la lista actual
    carrito.forEach(function(producto, index) {
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        
        // Crear botón de eliminación
        var eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = function() {
            eliminarDelCarrito(index); // Pasar el índice del producto a eliminar
        };
        
        // Añadir el botón de eliminación al elemento de lista
        li.appendChild(eliminarBtn);
        carritoLista.appendChild(li);
    });
}

// Función para calcular el total del carrito
function calcularTotal() {
    var total = 0;
    carrito.forEach(function(producto) {
        total += producto.precio;
    });
    document.getElementById('total').textContent = total;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
    calcularTotal();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto en la posición del índice
    mostrarCarrito();
    calcularTotal();
}

// Función para manejar el pago (añade lógica aquí si es necesario)
function pagar() {
    // Agrega la lógica para procesar el pago
    alert('Proceso de pago no implementado.');
}



// Obtener elementos para la mini ventana "Acerca de Nosotros"
var modal = document.getElementById("modal");
var link = document.getElementById("nosotrosLink");
var span = document.getElementsByClassName("close")[0]; // Esto se refiere al primer elemento con clase "close"

// Obtener elementos para la mini ventana de contacto
var contactModal = document.getElementById("contactModal");
var contactLink = document.querySelector('a[href="#contacto"]');
var contactClose = document.getElementById("contactClose");

// Función para abrir una mini ventana
function openModal(modal) {
    modal.style.display = "block";
}

// Función para cerrar una mini ventana
function closeModal(modal) {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en el enlace "Acerca de Nosotros", se abre la mini ventana correspondiente
link.onclick = function(event) {
    event.preventDefault(); // Evitar el desplazamiento hacia el ancla
    openModal(modal);
}

// Cuando el usuario hace clic en el botón de cerrar de "Acerca de Nosotros", se cierra la mini ventana
span.onclick = function() {
    closeModal(modal);
}

// Cuando el usuario hace clic en el enlace de contacto, se abre la mini ventana correspondiente
contactLink.onclick = function(event) {
    event.preventDefault(); // Evitar el desplazamiento hacia el ancla
    openModal(contactModal);
}

// Cuando el usuario hace clic en el botón de cerrar de contacto, se cierra la mini ventana
contactClose.onclick = function() {
    closeModal(contactModal);
}

// Cuando el usuario hace clic fuera de la mini ventana, se cierra la mini ventana correspondiente
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal(modal);
    } else if (event.target == contactModal) {
        closeModal(contactModal);
    }
}

// Función para mostrar/ocultar el carrito
function toggleCarrito() {
  var carrito = document.getElementById('carrito');
  var carritoIcon = document.getElementById('carrito-icon');
  
  // Alternar visibilidad del carrito
  if (carrito.style.display === 'none' || carrito.style.display === '') {
      carrito.style.display = 'block';
      carritoIcon.style.display = 'none'; // Ocultar el icono cuando el carrito está visible
  } else {
      carrito.style.display = 'none';
      carritoIcon.style.display = 'flex'; // Mostrar el icono cuando el carrito está oculto
  }
}


// Función para actualizar el número de productos en el icono del carrito
function actualizarCantidadCarrito() {
  var cantidad = carrito.length;
  document.getElementById('carrito-cantidad').textContent = cantidad;
}

// Ejemplo de función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Elimina el producto del carrito en la posición 'indice'
    mostrarCarrito(); // Actualiza la visualización del carrito
    calcularTotal(); // Recalcula el total
    actualizarCantidadCarrito(); // Actualiza la cantidad en el icono del carrito
  }


// Asegúrate de llamar a actualizarCantidadCarrito cada vez que cambies el carrito
function agregarAlCarrito(nombre, precio) {
  var producto = {
      nombre: nombre,
      precio: precio
  };
  carrito.push(producto);
  mostrarCarrito();
  calcularTotal();
  actualizarCantidadCarrito(); // Actualiza la cantidad en el icono del carrito
}


// Función para mostrar el formulario de pago
// Función que se ejecuta al intentar pagar
function pagar() {
    var carritoLista = document.getElementById("carrito-lista");
    var items = carritoLista.getElementsByTagName("li");

    // Verificar si el carrito está vacío
    if (items.length === 0) {
        // Mostrar el modal de carrito vacío
        document.getElementById('cartEmptyModal').style.display = 'block';
    } else {
        // Mostrar el formulario de pago
        document.getElementById('formularioPago').style.display = 'block';
    }
}

// Función para cerrar cualquier modal
function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Asignar eventos a los botones de cerrar
document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    }
});

// Cerrar los modales al hacer clic fuera del contenido
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}


// Función para cerrar el formulario de pago
document.getElementById('formularioClose').onclick = function() {
    document.getElementById('formularioPago').style.display = 'none';
}



