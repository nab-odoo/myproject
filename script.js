document.addEventListener('DOMContentLoaded', function() {
   
    // HEADER ELEMENTS
  
    const rectangleBox = document.querySelector('.rectangle-box');
    const ovalBox = document.querySelector('.oval-box');
    
    rectangleBox.innerHTML = '<span style="font-weight: bold; color: #2e8b57; font-size: 18px;">ECO FASHION</span>';
    
    // Alternative image logo version
    const logo = document.createElement('img');
    logo.src = 'https://cdn-icons-png.flaticon.com/512/2913/2913103.png';
    logo.alt = 'Eco Fashion Logo';
    logo.className = 'logo';
    rectangleBox.appendChild(logo);
    
    // Add account icon
    const accountIcon = document.createElement('img');
    accountIcon.src = 'https://cdn-icons-png.flaticon.com/512/847/847969.png';
    accountIcon.alt = 'Account';
    accountIcon.className = 'account-icon';
    ovalBox.appendChild(accountIcon);

    // BANNER IMAGES
    
    const sustainableImages = [
        {
            url: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            alt: 'Organic cotton clothing'
        },
        {
            url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            alt: 'Eco-friendly fashion'
        },
        {
            url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            alt: 'Sustainable materials'
        }
    ];

    const imagesSection = document.querySelector('.images-section');
    sustainableImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.alt;
        imagesSection.appendChild(imgElement);
    });

    // ENHANCED CATEGORIES SECTION
    
    const sustainableCategories = [
        {
            name: "Organic T-Shirts",
            icon: "https://cdn-icons-png.flaticon.com/512/2270/2270613.png",
            description: "100% organic cotton t-shirts made with sustainable practices"
        },
        {
            name: "Eco Jeans",
            icon: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
            description: "Sustainable jeans made from recycled materials"
        },
        {
            name: "Bamboo T-Shirts",
            icon: "https://cdn-icons-png.flaticon.com/512/3081/3081527.png",
            description: "Breathable t-shirts made from bamboo fibers"
        },
        {
            name: "Denim Jackets",
            icon: "https://cdn-icons-png.flaticon.com/512/3081/3081488.png",
            description: "Upcycled denim jackets with vintage look"
        },
        {
            name: "Cork Wallets",
            icon: "https://cdn-icons-png.flaticon.com/512/3081/3081515.png",
            description: "Sustainable cork leather accessories"
        },
        {
            name: "Upcycled Scarves",
            icon: "https://cdn-icons-png.flaticon.com/512/3081/3081495.png",
            description: "Fashionable scarves made from recycled fabrics"
        }
    ];

    const categoriesContainer = document.querySelector('.categories');
    categoriesContainer.innerHTML = ''; // Clear placeholder categories
    
    sustainableCategories.forEach(category => {
        const categoryBox = document.createElement('div');
        categoryBox.className = 'category-box';
        categoryBox.innerHTML = `
            <img src="${category.icon}" alt="${category.name}" class="category-icon">
            <span class="category-name">${category.name}</span>
        `;
        
        categoryBox.addEventListener('click', () => {
            showCategoryPage(category);
        });
        
        categoriesContainer.appendChild(categoryBox);
    });

    function showCategoryPage(category) {
        const categoryPage = document.createElement('div');
        categoryPage.className = 'category-page';
        categoryPage.innerHTML = `
            <div class="category-header">
                <h2>${category.name}</h2>
                <button class="close-category">×</button>
            </div>
            <p class="category-description">${category.description}</p>
            <div class="category-products">
                ${getCategoryProducts(category.name)}
            </div>
        `;
        
        document.body.appendChild(categoryPage);
        categoryPage.style.display = 'block';
        
        
        categoryPage.querySelector('.close-category').addEventListener('click', () => {
            categoryPage.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => {
                categoryPage.remove();
            }, 300);
        });
    }

    function getCategoryProducts(categoryName) {

        const filteredProducts = sustainableProducts.filter(product => 
            product.name.toLowerCase().includes(categoryName.toLowerCase().split(' ')[0])
        );
        
        if (filteredProducts.length === 0) {
            return '<p class="no-products">No products found in this category.</p>';
        }
        
        return filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="₹{product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-title">₹{product.name}</div>
                    <div class="product-description">₹{product.description}</div>
                    <div class="product-price">₹{product.price}</div>
                    <div class="product-rating">₹{product.rating}</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }


    // PRODUCT LISTINGS

    const sustainableProducts = [
        {
            name: "Organic Cotton T-Shirt",
            description: "100% organic cotton, fair trade certified",
            price: "₹699",
            rating: "★★★★★",
            image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Cork Wallet",
            description: "Sustainable cork leather alternative",
            price: "₹899",      
            rating: "★★★☆☆",
            image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Recycled Denim Jacket",
            description: "Made from 80% recycled materials",
            price: "₹1799",        
            rating: "★★★★★",
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Upcycled Scarf",
            description: "Handmade from recycled fabric scraps",
            price: "₹2159",          
            rating: "★★★★☆",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Eco Jeans",
            description: "Sustainable jeans made from recycled materials",
            price: "₹1939", 
            rating: "★★★★☆",
            image:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Bamboo T-Shirts",
            description: "Breathable t-shirts made from bamboo fibers",
            price: "₹1179", 
            rating: "★★★★☆",
            image:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",

             
        },
        
    ];

    const productListings = document.querySelector('.product-listings');
    sustainableProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        productListings.appendChild(productCard);
    });

    // INTERACTIVE ELEMENTS

    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput.value.trim() === "") {
            alert("Please enter a search term");
        } else {
            alert(`Searching for sustainable: ${searchInput.value}`);
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('.product-title').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Visual feedback
            e.target.textContent = "Added!";
            e.target.style.backgroundColor = "#4CAF50";
            
            setTimeout(() => {
                e.target.textContent = "Add to Cart";
                e.target.style.backgroundColor = "#2e8b57";
            }, 2000);
            
            console.log(`Added ${productName} (${productPrice}) to cart`);
        }
    });
});
let cart = [];

function updateCartDisplay() {
  const totalItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-amount').textContent = totalAmount;
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('.product-title').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent.replace(/[₹,]/g, '');

    // Add item to cart
    cart.push({ name: productName, price: parseFloat(productPrice) });

    // Visual feedback
    e.target.textContent = "Added!";
    e.target.style.backgroundColor = "#4CAF50";
    setTimeout(() => {
      e.target.textContent = "Add to Cart";
      e.target.style.backgroundColor = "#2e8b57";
    }, 2000);

    // Update total
    updateCartDisplay();
  }
});
