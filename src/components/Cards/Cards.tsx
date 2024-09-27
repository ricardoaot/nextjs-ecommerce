import IProduct from "@/interface/IProduct"
import { Card } from "../Card/Card"

export const Cards:React.FC <{products: IProduct[]}> = ({products}) => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-center bg-greePrincipal py-8">
        {
            products.map( 
            (product) => {
                return (
                <Card key={product.id} {...product} />
                )
            }
            )
        }
    </div>
  )
}
