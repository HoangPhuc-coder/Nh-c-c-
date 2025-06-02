let currentPage = 'home';
let isAdmin = false;
let users = [];
let currentUser = null;
let products = [
    { id: 1, name: "Guitar Yamaha", price: 3000000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 2, name: "Piano Roland", price: 10000000, image: "https://i.imgur.com/37nWVZ1.jpg", type: "Piano" },
    { id: 3, name: "Trống Cajon", price: 1500000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 4, name: "Guitar Fender", price: 4500000, image: "https://i.imgur.com/y4n6WiE.jpg", type: "Guitar" },
    { id: 5, name: "Piano Casio", price: 8000000, image: "https://i.imgur.com/MZAsCrc.jpg", type: "Piano" },
    { id: 6, name: "Trống Jazz", price: 6000000, image: "https://i.imgur.com/wYXgqVv.jpg", type: "Trống" },
    { id: 7, name: "Ukulele", price: 1200000, image: "https://i.imgur.com/1Z5b2kH.jpg", type: "Guitar" },
    { id: 8, name: "Violin", price: 4000000, image: "https://i.imgur.com/3k5Z1bH.jpg", type: "Violin" },
    { id: 9, name: "Sáo Trúc", price: 500000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 10, name: "Harmonica", price: 300000, image: "https://i.imgur.com/7k1Z1bH.jpg", type: "Harmonica" },
    { id: 11, name: "Bộ gõ Cajon", price: 2000000, image: "https://i.imgur.com/8k1Z1bH.jpg", type: "Trống" },
    { id: 12, name: "Bộ trống điện", price: 12000000, image: "https://i.imgur.com/9k1Z1bH.jpg", type: "Trống" },
    { id: 13, name: "Bộ đàn organ", price: 5000000, image: "https://i.imgur.com/10k1Z1bH.jpg", type: "Piano" },
    { id: 14, name: "Bộ đàn guitar điện", price: 7000000, image: "https://i.imgur.com/11k1Z1bH.jpg", type: "Guitar" },
    { id: 15, name: "Bộ đàn guitar acoustic", price: 3500000, image: "https://i.imgur.com/12k1Z1bH.jpg", type: "Guitar" },
    { id: 16, name: "Bộ đàn violin điện", price: 8000000, image: "https://i.imgur.com/13k1Z1bH.jpg", type: "Violin" },
    { id: 17, name: "Bộ đàn ukulele soprano", price: 1500000, image: "https://i.imgur.com/14k1Z1bH.jpg", type: "Guitar" },
    { id: 18, name: "Bộ đàn ukulele concert", price: 1800000, image: "https://i.imgur.com/15k1Z1bH.jpg", type: "Guitar" },
    { id: 19, name: "Bộ đàn ukulele tenor", price: 2000000, image: "https://i.imgur.com/16k1Z1bH.jpg", type: "Guitar" },
    { id: 20, name: "Bộ đàn ukulele baritone", price: 2500000, image: "https://i.imgur.com/17k1Z1bH.jpg", type: "Guitar" },
    { id: 21, name: "Guitar Bass", price: 3500000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 22, name: "Guitar Điện", price: 1500000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 23, name: "Guitar Acoustic", price: 2500000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 24, name: "Guitar Classic", price: 1250000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 25, name: "Guitar Flamenco", price: 2350000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 26, name: "Sáo Bầu", price: 500000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 27, name: "Sáo Sắc", price: 600000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 28, name: "Sáo Trúc Cao Cấp", price: 800000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 29, name: "Sáo Trúc Thông Dụng", price: 300000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 30, name: "Sáo Trúc Mini", price: 200000, image: "https://i.imgur.com/5k1Z1bH.jpg", type: "Sáo" },
    { id: 31, name: "Bộ Trống Mini", price: 1000000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 32, name: "Bộ Trống Cơ Bản", price: 3000000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 33, name: "Bộ Trống Cao Cấp", price: 6000000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 34, name: "Bộ Trống Điện", price: 12000000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 35, name: "Bộ Trống Cajon Cao Cấp", price: 2000000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 36, name: "Bộ Trống Cajon Thông Dụng", price: 1500000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 37, name: "Bộ Trống Cajon Mini", price: 800000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 38, name: "Bộ Trống Cajon Đặc Biệt", price: 2500000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 39, name: "Bộ Trống Cajon Siêu Nhẹ", price: 1800000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" },
    { id: 40, name: "Bộ Trống Cajon Siêu Bền", price: 2200000, image: "https://i.imgur.com/uh4SejF.jpg", type: "Trống" }

];

let cart = [
    { id: 1, name: "Guitar Yamaha", price: 3000000, image: "https://i.imgur.com/OQz3iHz.jpg", type: "Guitar" },
    { id: 2, name: "Piano Roland", price: 10000000, image: "https://i.imgur.com/37nWVZ1.jpg", type: "Piano" }
];
let orders = [
    {
        id: 1,
        user: "guest1",
        total: 4500,
        status: "Đã giao",
        products: [
            { name: "Guitar Acoustic", quantity: 1 },
            { name: "Piano điện", quantity: 1 }
        ]
    }
];
let pageId = 'home'; // Biến toàn cục để theo dõi trang hiện tại
// Chuyển đổi trang
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        showPage(page);
        pageId = page; // Cập nhật biến toàn cục
    }
    );
});

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const section = document.getElementById(page);
    if (section) section.classList.add('active');
    currentPage = page;
}

// Đăng ký
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (users.find(u => u.username === username)) {
        alert("Tên đăng nhập đã tồn tại.");
        return;
    }

    users.push({ username, password, role: 'user' });
    alert("Đăng ký thành công. Hãy đăng nhập.");
    showPage('login');
});

// Đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('roleSelect').value;

    const user = users.find(u => u.username === username && u.password === password && u.role === role);
    if (!user && (username !== 'admin' || password !== 'admin' || role !== 'admin')) {
        alert("Sai thông tin đăng nhập.");
        return;
    }

    if (role === 'admin') {
        isAdmin = true;
        document.getElementById('navUser').classList.add('hidden');
        document.getElementById('navAdmin').classList.remove('hidden');
        showPage('adminProducts');
    } else {
        currentUser = username;
        document.getElementById('loginBtn').classList.add('hidden');
        document.getElementById('logoutBtn').classList.remove('hidden');
        showPage('home');
    }
});

// Đăng xuất
function logout() {
    currentUser = null;
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    showPage('home');
}
function logoutAdmin() {
    isAdmin = false;
    document.getElementById('navUser').classList.remove('hidden');
    document.getElementById('navAdmin').classList.add('hidden');
    showPage('home');
}

// Hiển thị sản phẩm
function renderProducts() {
    const list = document.getElementById('productList');
    list.innerHTML = '';

    products.forEach(p => {
        const item = document.createElement('div');
        item.className = 'product-card';

        item.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-image">
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} VND</p>
            <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        `;

        list.appendChild(item);
    });
}
function renderOrders() {
    const tbody = document.querySelector('#orderTable tbody');
    tbody.innerHTML = '';

    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">Không có đơn hàng nào.</td></tr>';
        return;
    }

    orders.forEach((order, index) => {
        const row = document.createElement('tr');

        const items = order.cart.map(p => `• ${p.name} (${p.price.toLocaleString()}₫)`).join('<br>');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}<br>${order.phone}</td>
            <td>${order.address}<br>${order.paymentMethod}</td>
            <td>${items}</td>
            <td>${order.status || "Chờ xác nhận"}</td>
            <td>
                <button class="order-action-btn btn-confirm" onclick="confirmOrder(${index})">Xác nhận</button>
                <button class="order-action-btn btn-delete" onclick="deleteOrder(${index})">Xoá</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}




// Tìm kiếm nâng cao
document.getElementById('btnAdvancedSearch').addEventListener('click', function () {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('filterCategory').value;
    const priceMin = parseInt(document.getElementById('priceMin').value) || 0;
    const priceMax = parseInt(document.getElementById('priceMax').value) || Infinity;

    const list = document.getElementById('productList');
    list.innerHTML = '';
    products
        .filter(p =>
            (!category || p.type === category) &&
            p.price >= priceMin && p.price <= priceMax &&
            p.name.toLowerCase().includes(keyword)
        )

        .forEach(p => {
            const item = document.createElement('div');
            item.className = 'product-item';
            item.innerHTML = `
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString()} VND</p>
                <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
            `;
            list.appendChild(item);
        });
});

// Giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert("Đã thêm vào giỏ hàng");
}

document.getElementById('checkoutBtn').addEventListener('click', function () {
    showPage('checkout');
    renderCheckoutSummary();
});

function renderCart() {
    const list = document.getElementById('cartItems');
    list.innerHTML = '';
    cart.forEach((p, i) => {
        const item = document.createElement('div');
        item.innerHTML = `${p.name} - ${p.price.toLocaleString()} VND <button onclick="removeFromCart(${i})">Xóa</button>`;
        list.appendChild(item);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Thanh toán
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('customerAddress').value;
    const phone = document.getElementById('customerPhone').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    orders.push({ name, address, phone, paymentMethod, cart });
    cart = [];
    alert("Đặt hàng thành công!");
    showPage('home');
});

function renderCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    summary.innerHTML = cart.map(p => `${p.name} - ${p.price.toLocaleString()} VND`).join('<br>') +
        `<hr><strong>Tổng cộng: ${total.toLocaleString()} VND</strong>`;
}


// Quản lý sản phẩm (admin)
document.getElementById('addProductForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('newProductName').value;
    const price = parseInt(document.getElementById('newProductPrice').value);
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push({ id, name, price, category: "Guitar" }); // mặc định category
    renderAdminProducts();
    e.target.reset();
});

function renderAdminProducts() {
    const list = document.getElementById('adminProductList');
    list.innerHTML = '';
    products.forEach(p => {
        const item = document.createElement('div');
        item.innerHTML = `${p.name} - ${p.price.toLocaleString()} VND`;
        list.appendChild(item);
    });
}

// Quản lý đơn hàng (admin)
function renderAdminOrders() {
    const list = document.getElementById('adminOrderList');
    list.innerHTML = '';
    orders.forEach((o, i) => {
        const item = document.createElement('div');
        item.innerHTML = `
            <strong>${o.name}</strong> (${o.phone})<br>
            Địa chỉ: ${o.address}<br>
            Hình thức: ${o.paymentMethod}<br>
            Sản phẩm: ${o.cart.map(p => p.name).join(', ')}
        `;
        list.appendChild(item);
    });
}

// Quản lý người dùng (admin)
function renderAdminUsers() {
    const list = document.getElementById('adminUserList');
    list.innerHTML = '';
    users.forEach(u => {
        const item = document.createElement('div');
        item.innerHTML = `${u.username} - ${u.role}`;
        list.appendChild(item);
    });
}

// Load lần đầu
window.onload = () => {
    renderProducts();
    renderCart();
    renderAdminProducts();
    renderAdminOrders();
    renderAdminUsers();
};
products.push({ id, name, price, category: "Guitar" });
const type = document.getElementById('newProductType').value;
products.push({ id, name, price, type });
// Lưu thông tin
localStorage.setItem("username", "Nguyen Van A");
localStorage.setItem("email", "nguyenvana@example.com");

// Đọc thông tin
const username = localStorage.getItem("username");
console.log("Xin chào " + username);

// Xóa thông tin
localStorage.removeItem("username");

// Xóa tất cả
localStorage.clear();

// Lớp User
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
sessionStorage.setItem("isLoggedIn", "true");
// Lấy thông tin người dùng
const isLoggedIn = sessionStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
    console.log("Người dùng đã đăng nhập");
}
// Xóa thông tin người dùng
sessionStorage.removeItem("isLoggedIn");
// Xóa tất cả thông tin người dùng
sessionStorage.clear();
// Lưu trữ giỏ hàng
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Tải giỏ hàng
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCart();
    }
}
// Lưu giỏ hàng khi có thay đổi
window.addEventListener('beforeunload', saveCart);
// Tải giỏ hàng khi trang được tải
window.addEventListener('load', loadCart);
// Lưu trữ đơn hàng
function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
// Tải đơn hàng
function loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
        renderAdminOrders();
    }
}
// Lưu đơn hàng khi có thay đổi
window.addEventListener('beforeunload', saveOrders);
// Tải đơn hàng khi trang được tải
window.addEventListener('load', loadOrders);
function handleLoginSuccess(role) {
    // Ẩn nút Đăng ký và Đăng nhập
    document.getElementById('registerBtn').classList.add('hidden');
    document.getElementById('loginBtn').classList.add('hidden');

    // Hiện nút Đăng xuất
    document.getElementById('logoutBtn').classList.remove('hidden');

    // Hiển thị giao diện tương ứng vai trò
    if (role === 'admin') {
        document.getElementById('navUser').classList.add('hidden');
        document.getElementById('navAdmin').classList.remove('hidden');
        showPage('adminProducts');
    } else {
        document.getElementById('navUser').classList.remove('hidden');
        document.getElementById('navAdmin').classList.add('hidden');
        showPage('home');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        handleLoginSuccess(user.role);
    }
});
document.getElementById('addProductForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('newProductName').value;
    const price = parseInt(document.getElementById('newProductPrice').value);
    const type = document.getElementById('newProductType').value; // Lấy loại sản phẩm
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push({ id, name, price, type }); // Dùng key đúng là 'type'
    renderAdminProducts();
    renderProducts();  // cập nhật danh sách sản phẩm người dùng cũng thấy
    e.target.reset();
});
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCart();
    }
}
function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
        renderAdminOrders();
    }
}
// Lưu giỏ hàng và đơn hàng trước khi đóng trang
window.addEventListener('beforeunload', () => {
    saveCart();
    saveOrders();
});

// Load giỏ hàng và đơn hàng khi trang load
window.addEventListener('load', () => {
    loadCart();
    loadOrders();
    renderProducts();
    renderCart();
    renderAdminProducts();
    renderAdminUsers();
});
function logout() {
    currentUser = null;
    cart = []; // Xóa giỏ hàng khi logout
    renderCart();
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    showPage('home');
}
if (pageId === 'adminOrders') {
    renderOrders();
}
function confirmOrder(index) {
    orders[index].status = "Đã xác nhận";
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
}

function deleteOrder(index) {
    if (confirm("Bạn có chắc chắn muốn xoá đơn hàng này không?")) {
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
    }
}



