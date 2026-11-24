
let cart = [];

function addToCart(sku, name, price) {
  let item = cart.find(p => p.sku === sku);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      sku: sku,
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  if (cart.length === 0) {
    cartItems.innerHTML = "ยังไม่มีสินค้า";
  } else {
    cartItems.innerHTML = cart.map(item =>
      `<p>${item.name} x ${item.quantity} = ${item.price * item.quantity} บาท</p>`
    ).join("");
  }

  let sum = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  total.textContent = sum;
}

function checkout() {
  if (cart.length === 0) {
    alert("กรุณาเลือกสินค้าก่อนสั่งซื้อ");
    return;
  }

  alert("สั่งซื้อสินค้าสำเร็จ ขอบคุณที่ใช้บริการค่ะ");

  cart = [];
  updateCart();
}
