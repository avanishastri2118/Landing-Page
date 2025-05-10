// Example: Toggle sidebar on small screens
const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  };
  
  // Example: Filter products by category
  const filterProducts = (category) => {
    const products = document.querySelectorAll('.product-card');
    products.forEach((product) => {
      if (product.dataset.category === category || category === 'all') {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  };
  
  // Event listeners can be added here
  