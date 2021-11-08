// const precioOriginal = 120;
// const descuento = 18;


const copuons = [
    { name: "Cupon 1", descuento: 10 },
    { name: "Cupon 2", descuento: 25 },
    { name: "Cupon 3", descuento: 15 }
]




function calcularPrecioConDescuento(precio, descuento) {
    const inputCupon = document.getElementById("InputCoupon");
    const porcentajePrecioConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    const isCouponValueValid = function(coupon) {
        return coupon.name === inputCupon.value;
    };

    const userCoupon = copuons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + inputCupon.value + " no es válido");
    } else {
        precioConDescuento = precioConDescuento * (1 - userCoupon.descuento / 100);
    }

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuentos es: $" + precioConDescuento;
}


// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });