const addToCart = id => {
    let shoppingCart = {};
    if (localStorage.getItem('shoppingCart')){
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (shoppingCart[id]){
        console.log('already added')
        const updateCart = shoppingCart[id]+1;
        shoppingCart[id] = updateCart;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

export {
    addToCart
}