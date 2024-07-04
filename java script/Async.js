
// async await
async function data() {
    await fetch("https://fakestoreapi.com/products/1")
            .then(res=>res.json())
            .then(json=>console.log(json))
}
data();
