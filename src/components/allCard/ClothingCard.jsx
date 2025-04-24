import Image from "next/image"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card"
import Link from "next/link"

const ClothingCard = ({ clothing }) => {

    const { name, price, image, description } = clothing

    return (
        <Card className="pt-0">
            <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="100%"
                />
            </div>
            <CardContent className={"space-y-2"}>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardTitle>${price}</CardTitle>
            </CardContent>
            <CardFooter>
                <div className="flex  gap-5 justify-between">
                    <div>
                        <Link href={`/services/clothing/${clothing.id}`}><Button  className={"cursor-pointer"}>View Details</Button></Link>
                    </div>
                    <Button >Add to Cart</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ClothingCard