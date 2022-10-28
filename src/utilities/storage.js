

function addToDb(id){
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart') || '{}');
    if(shoppingCart[id]){
        shoppingCart[id] = shoppingCart[id] + 1;
    }else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));    
}




export{
    addToDb
}