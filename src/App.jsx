import Product from "./Product"
import Products from "./api/product"



function App() {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-4xl text-center font-semibold">PRODUCTS</h1>
      <div className="flex gap-5 justify-center items-center">
        {
          Products.map((ele, index) => {
            return (
              <Product key={index} data={ele}></Product>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
