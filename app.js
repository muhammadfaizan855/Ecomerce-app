// console.log('Hello world');

const phones = [
    {
        brand : 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        img : src ="https://images.priceoye.pk/samsung-galaxy-s20-pakistan-priceoye-qjkzf-500x500.webp"
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 500,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]



const div = document.querySelector('div')


function getPhone (){
    for(let i = 0 ; i < phones.length ; i++){
        console.log(phones[i])
        div.innerHTML += `        
        <div id="card-bg" class="card text-black border-light" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${phones[i].brand + ' ' + phones[i].model}</h5>
              
              <p class="card-text">${phones[i].price}</p>
              <button class="btn btn-primary" onclick="addToCart(${i})">Add To Cart</button>
            </div>
          </div>
          ` 
    }
    
}



getPhone()





// const arr = []

let arr;
let items = JSON.parse(localStorage.getItem("cartItems"))
if(items === null){
    arr = [] ;
}else{
    arr = items ;

}




function addToCart(index){
    console.log(arr.includes(phones[index]))
    
    if(arr.includes(phones[index])){
        phones[index].quantity += 1 
    }else{
        phones[index].quantity = 1
        arr.push(phones[index])
    }
    console.log(arr)

}









function checkOut(){
    console.log("hello check cart");

    localStorage.setItem("cartItems" , JSON.stringify(arr))
    window.location = "cart.html" ; 
}
















































