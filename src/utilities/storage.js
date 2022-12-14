

function addToDb(id){
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart') || '{}');
    if(shoppingCart[id]){
        shoppingCart[id] = shoppingCart[id] + 1;
    }else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));    
}

function getStoredValue(){
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart') || '{}');
    return shoppingCart;
}

function decreaseDb(id){
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart') || '{}');
    if(shoppingCart[id] >= 0){
        if(shoppingCart[id] === 0){
            let prop = id;
            delete shoppingCart[prop]
        }else{
            shoppingCart[id] = shoppingCart[id] - 1;
        }
                
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));        
}

export{
    addToDb,
    decreaseDb,
    getStoredValue
}