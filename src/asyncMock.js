const products =[
    {
      "id": 1,
      "img": "/Images/nike.jpg",
      "stock": 5,
      "title": "Nike",
      "description": "Zapatos Nike Mercurial",
      "price": "$200"
    },
    {
      "id": 2,
      "img": "/Images/adidas.jpg",
      "stock": 4,
      "title": "Addidas",
      "description": "Zapatos Addidas Copa 90",
      "price": "$160"
    },
    {
      "id": 3,
      "img": "/Images/puma.jpg",
      "stock": 3,
      "title": "Puma",
      "description": "Zapatos Puma special edition",
      "price": "$140"
    }
  ]



export const getProducts=() =>{

  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products)
      },1000)
}

  )

}
export const getProductsById=(productsId)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products.find(prod=>prod.id==productsId))
      },1000)

}
)}
