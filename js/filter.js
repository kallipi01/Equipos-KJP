// Función para filtrar productos según la categoría seleccionada
function filterProjects(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all') {
            product.classList.remove('hidden');
        } else {
            if (product.classList.contains(category)) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        }
    });
}

// Opcional: Para añadir o quitar la clase activa a los botones
document.querySelectorAll('.nav-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.nav-buttons button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
