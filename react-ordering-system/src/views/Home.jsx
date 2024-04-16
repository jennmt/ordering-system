import { products } from "../data/products"

export default function Home() {
  
  console.log(products)

  return (
    <>
      <h1 className="text-4xl font-black">Home</h1>
      <p className="text-2xl my-10">
        Choose and customize your order below.
      </p>
    </>
  )
}
