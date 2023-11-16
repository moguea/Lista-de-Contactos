let contactos = [];
let contactoEditando = null;

function agregarContacto() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  if (nombre && email && telefono) {
    if (contactoEditando !== null) {
      contactos[contactoEditando] = { nombre, email, telefono };
      contactoEditando = null;
    } else {
      const contacto = { nombre, email, telefono };
      contactos.push(contacto);
    }

    mostrarContactos();
    limpiarFormulario();
  } else {
    alert('Completa todos los campos antes de agregar/editar un contacto.');
  }
}

function mostrarContactos() {
  const listaContactos = document.getElementById('listaContactos');
  listaContactos.innerHTML = '';

  contactos.forEach((contacto, index) => {
    const li = document.createElement('li');
    li.classList.add('contact-item');
    li.innerHTML = `
      <span>${contacto.nombre}, ${contacto.email}, ${contacto.telefono}</span>
      <span class="icon" onclick="editarContacto(${index})"><i class="fas fa-edit"></i></span>
      <span class="icon" onclick="eliminarContacto(${index})"><i class="fas fa-trash-alt"></i></span>
    `;
    listaContactos.appendChild(li);
  });
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
}

function editarContacto(index) {
  const contacto = contactos[index];
  document.getElementById('nombre').value = contacto.nombre;
  document.getElementById('email').value = contacto.email;
  document.getElementById('telefono').value = contacto.telefono;
  contactoEditando = index;
}

function eliminarContacto(index) {
  contactos.splice(index, 1);
  mostrarContactos();
}
