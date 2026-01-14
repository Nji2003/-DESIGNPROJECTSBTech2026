// COMPLETE PRODUCT DATA - 36 Products across 6 categories
const products = [
    // ELECTRONICS (6 products)
    {
        id: 1,
        name: "Wireless Bluetooth Headphones - Noise Cancelling",
        description: "High-quality wireless headphones with active noise cancellation, 20-hour battery life, and premium sound quality.",
        price: 12500,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "10 pieces",
        supplier: "AudioTech Ltd",
        rating: 4.5,
        stock: 150,
        tags: ["wireless", "bluetooth", "headphones"]
    },
    {
        id: 2,
        name: "Smartphone Android 12 - 128GB + 8GB RAM",
        description: "Latest Android smartphone with 128GB storage, 8GB RAM, 6.5-inch display, and triple camera system.",
        price: 89500,
        originalPrice: 99900,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "5 pieces",
        supplier: "Mobile World",
        rating: 4.3,
        stock: 75,
        tags: ["smartphone", "android", "mobile"]
    },
    {
        id: 3,
        name: "Portable Solar Power Bank 20000mAh",
        description: "20000mAh solar charger with dual USB ports, waterproof and durable design. Charges with sunlight or USB.",
        price: 18500,
        originalPrice: 22000,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "10 pieces",
        supplier: "Green Energy Solutions",
        rating: 4.4,
        stock: 120,
        tags: ["solar", "power bank", "portable"]
    },
    {
        id: 4,
        name: "LED Smart TV 55-inch 4K UHD",
        description: "55-inch 4K UHD Smart TV with HDR, built-in streaming apps, and voice control.",
        price: 285000,
        originalPrice: 320000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "3 pieces",
        supplier: "ElectroMart",
        rating: 4.6,
        stock: 30,
        tags: ["tv", "smart", "4k"]
    },
    {
        id: 5,
        name: "Laptop Dell Inspiron 15 - Intel i5",
        description: "15.6-inch laptop with Intel Core i5 processor, 8GB RAM, 512GB SSD, and Windows 11.",
        price: 345000,
        originalPrice: 380000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "5 pieces",
        supplier: "Tech Solutions",
        rating: 4.5,
        stock: 45,
        tags: ["laptop", "dell", "computer"]
    },
    {
        id: 6,
        name: "Smart Watch Fitness Tracker",
        description: "Smart watch with heart rate monitor, sleep tracking, GPS, and 7-day battery life.",
        price: 25000,
        originalPrice: 30000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics",
        minOrder: "20 pieces",
        supplier: "Wearable Tech",
        rating: 4.2,
        stock: 200,
        tags: ["smartwatch", "fitness", "tracker"]
    },

    // FASHION (6 products)
    {
        id: 7,
        name: "African Wax Print Fabric - Premium Quality",
        description: "Authentic African wax print fabric, 100% cotton, vibrant colors in traditional patterns.",
        price: 8500,
        originalPrice: 10000,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "50 yards",
        supplier: "Textile Africa",
        rating: 4.7,
        stock: 500,
        tags: ["fabric", "african", "wax"]
    },
    {
        id: 8,
        name: "African Handcrafted Beaded Jewelry Set",
        description: "Beautiful handmade jewelry set made with traditional beads and materials.",
        price: 12500,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "25 sets",
        supplier: "Artisan Crafts",
        rating: 4.9,
        stock: 80,
        tags: ["jewelry", "handmade", "beaded"]
    },
    {
        id: 9,
        name: "Leather Handbag - Designer Collection",
        description: "Premium leather handbag with multiple compartments and elegant design.",
        price: 35000,
        originalPrice: 42000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "15 pieces",
        supplier: "Leather Goods Co",
        rating: 4.6,
        stock: 60,
        tags: ["handbag", "leather", "bag"]
    },
    {
        id: 10,
        name: "Men's Traditional Dashiki Shirt",
        description: "Colorful traditional dashiki shirt made from premium cotton fabric.",
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "30 pieces",
        supplier: "African Wear",
        rating: 4.4,
        stock: 150,
        tags: ["dashiki", "shirt", "traditional"]
    },
    {
        id: 11,
        name: "Women's Kente Cloth Dress",
        description: "Elegant dress made from authentic Ghanaian Kente cloth, handmade.",
        price: 28000,
        originalPrice: 35000,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "20 pieces",
        supplier: "Kente Designs",
        rating: 4.8,
        stock: 40,
        tags: ["dress", "kente", "african"]
    },
    {
        id: 12,
        name: "Leather Sandals - Handmade",
        description: "Comfortable leather sandals handmade by local artisans.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion",
        minOrder: "50 pairs",
        supplier: "Footwear Masters",
        rating: 4.3,
        stock: 300,
        tags: ["sandals", "footwear", "leather"]
    },

    // HOME & GARDEN (6 products)
    {
        id: 13,
        name: "Traditional African Wooden Mask Collection",
        description: "Authentic hand-carved wooden masks from various African tribes.",
        price: 25000,
        originalPrice: 30000,
        image: "https://images.unsplash.com/photo-1574323347402-f3e8d9171518?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "10 pieces",
        supplier: "Cultural Heritage",
        rating: 4.7,
        stock: 25,
        tags: ["masks", "traditional", "wooden"]
    },
    {
        id: 14,
        name: "Industrial Blender 5L - Commercial Grade",
        description: "Commercial grade blender for restaurants and food processing.",
        price: 45000,
        image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "2 pieces",
        supplier: "Kitchen Equipment Ltd",
        rating: 4.6,
        stock: 40,
        tags: ["blender", "industrial", "kitchen"]
    },
    {
        id: 15,
        name: "Ceramic Dinner Set - 16 Pieces",
        description: "Elegant ceramic dinner set includes plates, bowls, cups, and saucers.",
        price: 32000,
        originalPrice: 38000,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "25 sets",
        supplier: "Home Essentials",
        rating: 4.5,
        stock: 100,
        tags: ["dinner set", "ceramic", "kitchenware"]
    },
    {
        id: 16,
        name: "Handwoven Bamboo Furniture Set",
        description: "Eco-friendly furniture set made from sustainable bamboo.",
        price: 75000,
        originalPrice: 90000,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "5 sets",
        supplier: "Eco Furniture",
        rating: 4.8,
        stock: 30,
        tags: ["furniture", "bamboo", "eco-friendly"]
    },
    {
        id: 17,
        name: "Indoor Plants Collection - Set of 5",
        description: "Set of 5 indoor plants including snake plant, peace lily, and more.",
        price: 18000,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "10 sets",
        supplier: "Green Thumb",
        rating: 4.7,
        stock: 80,
        tags: ["plants", "indoor", "garden"]
    },
    {
        id: 18,
        name: "African Print Throw Pillows - Set of 4",
        description: "Set of 4 decorative throw pillows with authentic African patterns.",
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1579656599210-42554b59b0f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home",
        minOrder: "20 sets",
        supplier: "Home Decor Africa",
        rating: 4.4,
        stock: 200,
        tags: ["pillows", "decor", "african"]
    },

    // BEAUTY & HEALTH (6 products)
    {
        id: 19,
        name: "Organic Shea Butter - Raw & Unrefined",
        description: "100% pure organic shea butter, excellent for skin and hair care.",
        price: 6500,
        image: "https://images.unsplash.com/photo-1594736797933-d0e64d3b1d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "20 kg",
        supplier: "Natural Beauty",
        rating: 4.8,
        stock: 300,
        tags: ["shea butter", "organic", "skincare"]
    },
    {
        id: 20,
        name: "Yoga Mat - Eco-Friendly Material",
        description: "Eco-friendly yoga mat made from natural rubber with non-slip surface.",
        price: 7500,
        originalPrice: 9000,
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "30 pieces",
        supplier: "Fitness Gear",
        rating: 4.3,
        stock: 200,
        tags: ["yoga", "fitness", "eco-friendly"]
    },
    {
        id: 21,
        name: "Essential Oils Set - 6 Varieties",
        description: "Set of 6 pure essential oils including lavender and peppermint.",
        price: 12000,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1543858759-7c6e48cff1e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "15 sets",
        supplier: "Natural Wellness",
        rating: 4.6,
        stock: 120,
        tags: ["essential oils", "aromatherapy", "natural"]
    },
    {
        id: 22,
        name: "Black Soap - Traditional African Recipe",
        description: "Traditional African black soap made from natural ingredients.",
        price: 4500,
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d4588?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "50 pieces",
        supplier: "Herbal Soaps",
        rating: 4.7,
        stock: 400,
        tags: ["black soap", "natural", "skincare"]
    },
    {
        id: 23,
        name: "Hair Growth Oil - Natural Formula",
        description: "Natural hair growth oil with ingredients like castor oil and rosemary.",
        price: 8500,
        originalPrice: 10000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "25 bottles",
        supplier: "Hair Care Africa",
        rating: 4.5,
        stock: 180,
        tags: ["hair oil", "hair growth", "natural"]
    },
    {
        id: 24,
        name: "Bamboo Toothbrush Set - Eco-Friendly",
        description: "Set of 4 bamboo toothbrushes with charcoal-infused bristles.",
        price: 5000,
        image: "https://images.unsplash.com/photo-1585435557343-3b0920313c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "beauty",
        minOrder: "100 sets",
        supplier: "Eco Products",
        rating: 4.4,
        stock: 500,
        tags: ["toothbrush", "bamboo", "eco-friendly"]
    },

    // MACHINERY (6 products)
    {
        id: 25,
        name: "Portable Generator 3000W - Silent",
        description: "3000W portable generator with silent operation for backup power.",
        price: 185000,
        originalPrice: 210000,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "1 piece",
        supplier: "Power Solutions",
        rating: 4.4,
        stock: 15,
        tags: ["generator", "portable", "power"]
    },
    {
        id: 26,
        name: "Welding Machine - Industrial Grade",
        description: "Industrial welding machine suitable for metal fabrication.",
        price: 125000,
        originalPrice: 150000,
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "3 pieces",
        supplier: "Industrial Tools",
        rating: 4.6,
        stock: 25,
        tags: ["welding", "machine", "industrial"]
    },
    {
        id: 27,
        name: "Electric Drill Set - 20 Pieces",
        description: "Complete electric drill set with 20 accessories.",
        price: 35000,
        originalPrice: 42000,
        image: "https://images.unsplash.com/photo-1581235720700-2f0b0b2b35f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "10 sets",
        supplier: "Tool Masters",
        rating: 4.3,
        stock: 80,
        tags: ["drill", "tools", "electric"]
    },
    {
        id: 28,
        name: "Air Compressor - 50L Capacity",
        description: "50L air compressor for painting and pneumatic tools.",
        price: 85000,
        originalPrice: 100000,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "5 pieces",
        supplier: "Air Tools Ltd",
        rating: 4.5,
        stock: 30,
        tags: ["compressor", "air", "tools"]
    },
    {
        id: 29,
        name: "Circular Saw - Professional Grade",
        description: "Professional circular saw with laser guide and safety features.",
        price: 45000,
        image: "https://images.unsplash.com/photo-1581235720700-2f0b0b2b35f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "8 pieces",
        supplier: "Woodworking Tools",
        rating: 4.4,
        stock: 45,
        tags: ["saw", "circular", "tools"]
    },
    {
        id: 30,
        name: "Water Pump - 1HP Agricultural",
        description: "1HP agricultural water pump for irrigation and water transfer.",
        price: 65000,
        originalPrice: 75000,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "machinery",
        minOrder: "6 pieces",
        supplier: "Farm Equipment",
        rating: 4.6,
        stock: 35,
        tags: ["water pump", "agricultural", "irrigation"]
    },

    // AGRICULTURE (6 products)
    {
        id: 31,
        name: "Organic Coffee Beans - Premium Arabica",
        description: "Premium Arabica coffee beans, organically grown with rich flavor.",
        price: 9500,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "50 kg",
        supplier: "Coffee Farms Ltd",
        rating: 4.5,
        stock: 1000,
        tags: ["coffee", "organic", "arabica"]
    },
    {
        id: 32,
        name: "Cocoa Beans - Premium Quality",
        description: "Premium quality cocoa beans from West Africa for chocolate production.",
        price: 12000,
        originalPrice: 14000,
        image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "100 kg",
        supplier: "Cocoa Producers",
        rating: 4.7,
        stock: 800,
        tags: ["cocoa", "beans", "chocolate"]
    },
    {
        id: 33,
        name: "Farm Tractor - 45HP",
        description: "45HP farm tractor suitable for plowing, planting, and transportation.",
        price: 4500000,
        originalPrice: 5000000,
        image: "https://images.unsplash.com/photo-1572015098325-3c9dd8c45a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "1 piece",
        supplier: "Farm Machinery",
        rating: 4.8,
        stock: 10,
        tags: ["tractor", "farm", "agriculture"]
    },
    {
        id: 34,
        name: "Organic Fertilizer - 50kg Bag",
        description: "Organic fertilizer made from natural compost for soil improvement.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "20 bags",
        supplier: "Organic Farms",
        rating: 4.4,
        stock: 500,
        tags: ["fertilizer", "organic", "agriculture"]
    },
    {
        id: 35,
        name: "Greenhouse Kit - 10x20ft",
        description: "Complete greenhouse kit includes frame, cover, and ventilation.",
        price: 250000,
        originalPrice: 300000,
        image: "https://images.unsplash.com/photo-1591288497594-42d1f277d3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "5 kits",
        supplier: "Greenhouse Solutions",
        rating: 4.6,
        stock: 25,
        tags: ["greenhouse", "agriculture", "farming"]
    },
    {
        id: 36,
        name: "Palm Oil - Pure & Natural",
        description: "Pure and natural palm oil, cold-pressed from fresh palm fruits.",
        price: 7500,
        originalPrice: 9000,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "agriculture",
        minOrder: "50 liters",
        supplier: "Palm Oil Producers",
        rating: 4.5,
        stock: 300,
        tags: ["palm oil", "cooking oil", "agriculture"]
    }
];

// Special deals products
const deals = [
    { ...products[0], discount: 17 },
    { ...products[2], discount: 16 },
    { ...products[5], discount: 17 },
    { ...products[9], discount: 17 },
    { ...products[14], discount: 16 },
    { ...products[19], discount: 28 }
];

// Shopping Cart
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Format price in FCFA
function formatPrice(price) {
    return price.toLocaleString('fr-FR') + ' FCFA';
}

// Calculate discount percentage
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('ecommerce_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `cart-notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Update cart display
function updateCart() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update cart count in all locations
    document.querySelectorAll('#cart-count, #modal-cart-count').forEach(element => {
        if (element) element.textContent = cartCount;
    });
    
    // Update cart totals
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotalPrice = document.getElementById('cart-total-price');
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(cartTotal);
    if (cartTotalPrice) cartTotalPrice.textContent = formatPrice(cartTotal);
    
    // Update cart items display
    renderCartItems();
    
    // Save to localStorage
    saveCartToLocalStorage();
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="index.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name.substring(0, 50)}${item.name.length > 50 ? '...' : ''}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to cart controls
    cartItemsContainer.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(id, -1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(id, 1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const quantity = parseInt(this.value) || 1;
            setCartItemQuantity(id, quantity);
        });
    });
    
    cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            item.quantity = 1;
        }
        updateCart();
        showNotification(`Updated ${item.name.substring(0, 20)}... quantity to ${item.quantity}`);
    }
}

// Set cart item quantity
function setCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item && quantity > 0) {
        item.quantity = quantity;
        updateCart();
        showNotification(`Updated ${item.name.substring(0, 20)}... quantity to ${quantity}`);
    }
}

// Remove item from cart
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        showNotification(`Removed ${item.name.substring(0, 20)}... from cart`, 'warning');
    }
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart UI
    updateCart();
    
    // Show notification
    showNotification(`Added ${product.name.substring(0, 20)}... to cart`);
}

// Buy now function
function buyNow(productId) {
    addToCart(productId);
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Quick view function
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const discount = product.originalPrice ? calculateDiscount(product.price, product.originalPrice) : 0;
    const quickViewBody = document.getElementById('quick-view-body');
    const quickViewModal = document.getElementById('quick-view-modal');
    
    if (!quickViewBody || !quickViewModal) return;
    
    quickViewBody.innerHTML = `
        <div class="quick-view-product">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-details">
                <h2>${product.name}</h2>
                <div class="quick-view-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `
                        <span class="original-price">${formatPrice(product.originalPrice)}</span>
                        <span class="discount">-${discount}%</span>
                    ` : ''}
                </div>
                <div class="quick-view-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span>(${product.rating})</span>
                </div>
                <div class="quick-view-description">
                    <p>${product.description}</p>
                </div>
                <div class="quick-view-meta">
                    <div><strong>Category:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                    <div><strong>Min. Order:</strong> ${product.minOrder}</div>
                    <div><strong>Supplier:</strong> ${product.supplier}</div>
                    <div><strong>Stock:</strong> ${product.stock} available</div>
                </div>
                <div class="quick-view-actions">
                    <button class="add-to-cart-quick" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="buy-now-quick" data-id="${product.id}">
                        <i class="fas fa-bolt"></i> Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners to quick view buttons
    quickViewBody.querySelector('.add-to-cart-quick').addEventListener('click', function() {
        addToCart(productId);
        quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    quickViewBody.querySelector('.buy-now-quick').addEventListener('click', function() {
        buyNow(productId);
        quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Create product card HTML
function createProductCard(product) {
    const discount = product.originalPrice ? calculateDiscount(product.price, product.originalPrice) : 0;
    
    return `
        <div class="product-card">
            ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
            </div>
            <div class="product-info">
                <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
                <div class="product-price">
                    ${formatPrice(product.price)}
                    ${product.originalPrice ? `
                        <span class="original-price">${formatPrice(product.originalPrice)}</span>
                        <span class="discount">-${discount}%</span>
                    ` : ''}
                </div>
                <div class="product-meta">
                    <span class="min-order">Min. Order: ${product.minOrder}</span>
                    <span class="supplier">${product.supplier}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="buy-now-btn" data-id="${product.id}">
                        <i class="fas fa-bolt"></i> Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load products to the page
function loadProducts(filter = 'all') {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    let filteredProducts = products;
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try different filter or browse other categories</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners
    addProductEventListeners();
}

// Load category products
function loadCategoryProducts(category) {
    const categoryProductsContainer = document.getElementById('category-products');
    if (!categoryProductsContainer) return;
    
    categoryProductsContainer.innerHTML = '';
    
    const categoryProducts = products.filter(product => product.category === category);
    
    if (categoryProducts.length === 0) {
        categoryProductsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found in this category</h3>
                <p>Try browsing other categories</p>
            </div>
        `;
        return;
    }
    
    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = createProductCard(product);
        categoryProductsContainer.appendChild(productCard);
    });
    
    // Update counts
    const productCount = document.getElementById('product-count');
    const filteredCount = document.getElementById('filtered-count');
    const supplierCount = document.getElementById('supplier-count');
    
    if (productCount) productCount.textContent = categoryProducts.length;
    if (filteredCount) filteredCount.textContent = `Showing ${categoryProducts.length} products`;
    
    // Count unique suppliers
    if (supplierCount) {
        const uniqueSuppliers = new Set(categoryProducts.map(p => p.supplier));
        supplierCount.textContent = uniqueSuppliers.size;
    }
    
    // Add event listeners
    addProductEventListeners();
}

// Add event listeners to product elements
function addProductEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.buy-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            buyNow(productId);
        });
    });
    
    document.querySelectorAll('.product-title').forEach(title => {
        title.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showQuickView(productId);
        });
    });
    
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showQuickView(productId);
        });
    });
}

// Load deals
function loadDeals() {
    const dealsContainer = document.getElementById('deals-container');
    if (!dealsContainer) return;
    
    dealsContainer.innerHTML = '';
    
    deals.forEach(product => {
        const discount = product.originalPrice ? calculateDiscount(product.price, product.originalPrice) : 0;
        
        const dealCard = document.createElement('div');
        dealCard.className = 'deal-card';
        dealCard.innerHTML = `
            <div class="deal-badge">-${discount}% OFF</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name.substring(0, 50)}${product.name.length > 50 ? '...' : ''}</h3>
                <div class="product-price">
                    ${formatPrice(product.price)}
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                </div>
                <div class="product-meta">
                    <span class="min-order">Min. Order: ${product.minOrder}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        dealsContainer.appendChild(dealCard);
    });
    
    // Add event listeners to deal cart buttons
    addProductEventListeners();
}

// Search function
function performSearch(query) {
    const productsContainer = document.getElementById('products-container') || document.getElementById('category-products');
    if (!productsContainer) return;
    
    if (!query.trim()) {
        // Check if we're on category page or home page
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat');
        if (category) {
            loadCategoryProducts(category);
        } else {
            loadProducts();
        }
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    productsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found for "${query}"</h3>
                <p>Try different keywords or browse categories</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    // Update filtered count on category page
    const filteredCount = document.getElementById('filtered-count');
    if (filteredCount) {
        filteredCount.textContent = `Showing ${filteredProducts.length} products`;
    }
    
    // Add event listeners to search results
    addProductEventListeners();
}

// Initialize page
function initializePage() {
    // Load cart from localStorage
    loadCartFromLocalStorage();
    
    // Check if we're on category page
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    
    // Category descriptions
    const categoryDescriptions = {
        electronics: "Discover the latest electronics including smartphones, laptops, audio devices, and home appliances from verified suppliers.",
        fashion: "Browse African fashion including traditional fabrics, clothing, accessories, and footwear from top manufacturers.",
        home: "Find quality home decor, furniture, kitchenware, and garden supplies for your home improvement needs.",
        beauty: "Explore natural beauty products, skincare, haircare, and wellness products from African manufacturers.",
        machinery: "Source industrial machinery, equipment, tools, and supplies for your business operations.",
        agriculture: "Find agricultural equipment, tools, seeds, and supplies for farming and agribusiness."
    };
    
    if (category && categoryDescriptions[category]) {
        // On category page
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        document.title = `${categoryName} - E-Commerce`;
        
        const categoryTitle = document.getElementById('category-title');
        const categoryDescription = document.getElementById('category-description');
        
        if (categoryTitle) categoryTitle.textContent = categoryName;
        if (categoryDescription) categoryDescription.textContent = categoryDescriptions[category];
        
        loadCategoryProducts(category);
    } else {
        // On home page
        loadProducts();
        loadDeals();
    }
    
    // Cart icon click
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                cartModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    // Close modal
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                cartModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close quick view
    const closeQuickViewBtn = document.querySelector('.close-quick-view');
    if (closeQuickViewBtn) {
        closeQuickViewBtn.addEventListener('click', function() {
            const quickViewModal = document.getElementById('quick-view-modal');
            if (quickViewModal) {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        const cartModal = document.getElementById('cart-modal');
        const quickViewModal = document.getElementById('quick-view-modal');
        
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.target === quickViewModal) {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert(`Proceeding to checkout with ${cartCount} items. Total: ${formatPrice(cartTotal)}`);
        });
    }
    
    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    // Hero search
    const heroSearchBtn = document.getElementById('hero-search-btn');
    const heroSearchInput = document.getElementById('hero-search-input');
    if (heroSearchBtn && heroSearchInput) {
        heroSearchBtn.addEventListener('click', function() {
            performSearch(heroSearchInput.value);
        });
        
        heroSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(heroSearchInput.value);
            }
        });
    }
    
    // Category filter
    const categorySelect = document.getElementById('category-select');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            if (this.value === 'All Categories') {
                loadProducts();
            } else {
                loadProducts(this.value);
            }
        });
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                // Load products with filter
                const filter = this.getAttribute('data-filter');
                loadProducts(filter);
            });
        });
    }
    
    // Category page filters
    setupCategoryFilters();
}

// Setup category filters
function setupCategoryFilters() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const sortSelect = document.getElementById('sort-by');
    const applyPriceBtn = document.getElementById('apply-price');
    const resetFiltersBtn = document.getElementById('reset-filters');
    
    if (filterOptions.length === 0) return;
    
    // Filter option click
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from siblings
            const parent = this.parentElement;
            parent.querySelectorAll('.filter-option').forEach(opt => {
                opt.classList.remove('active');
            });
            // Add active class to clicked
            this.classList.add('active');
            applyCategoryFilters();
        });
    });
    
    // Sort select change
    if (sortSelect) {
        sortSelect.addEventListener('change', applyCategoryFilters);
    }
    
    // Price filter apply
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', applyCategoryFilters);
    }
    
    // Reset filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            // Reset price inputs
            const minPrice = document.getElementById('min-price');
            const maxPrice = document.getElementById('max-price');
            if (minPrice) minPrice.value = '';
            if (maxPrice) maxPrice.value = '';
            
            // Reset filter options
            document.querySelectorAll('.filter-option').forEach(opt => {
                if (opt.getAttribute('data-sort') === 'featured' || 
                    opt.getAttribute('data-order') === 'all') {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
            
            // Reset sort select
            if (sortSelect) sortSelect.value = 'featured';
            
            applyCategoryFilters();
        });
    }
}

// Apply category filters
function applyCategoryFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    if (!category) return;
    
    let filteredProducts = products.filter(product => product.category === category);
    
    // Get price filters
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    
    if (minPriceInput && minPriceInput.value) {
        const minPrice = parseInt(minPriceInput.value);
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
    }
    
    if (maxPriceInput && maxPriceInput.value) {
        const maxPrice = parseInt(maxPriceInput.value);
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    }
    
    // Get sort option
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        switch(sortSelect.value) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
        }
    }
    
    // Get minimum order filter
    const activeOrderFilter = document.querySelector('.filter-option.active[data-order]');
    if (activeOrderFilter && activeOrderFilter.getAttribute('data-order') !== 'all') {
        const orderFilter = activeOrderFilter.getAttribute('data-order');
        filteredProducts = filteredProducts.filter(product => {
            const minOrder = product.minOrder.toLowerCase();
            if (orderFilter === 'low') {
                return minOrder.includes('1') || minOrder.includes('2') || minOrder.includes('3') || 
                       minOrder.includes('4') || minOrder.includes('5') || minOrder.includes('10');
            } else if (orderFilter === 'medium') {
                return minOrder.includes('11') || minOrder.includes('20') || minOrder.includes('30') || 
                       minOrder.includes('40') || minOrder.includes('50');
            } else if (orderFilter === 'high') {
                return minOrder.includes('51') || minOrder.includes('100') || minOrder.includes('200') || 
                       minOrder.includes('500') || minOrder.includes('1000');
            }
            return true;
        });
    }
    
    // Display filtered products
    const categoryProductsContainer = document.getElementById('category-products');
    if (!categoryProductsContainer) return;
    
    categoryProductsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        categoryProductsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found with current filters</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        
        const filteredCount = document.getElementById('filtered-count');
        if (filteredCount) filteredCount.textContent = `Showing 0 products`;
        
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = createProductCard(product);
        categoryProductsContainer.appendChild(productCard);
    });
    
    // Update filtered count
    const filteredCount = document.getElementById('filtered-count');
    if (filteredCount) filteredCount.textContent = `Showing ${filteredProducts.length} products`;
    
    // Add event listeners
    addProductEventListeners();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);