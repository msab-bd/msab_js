'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function MedicineCard({ med }) {
    const {
        id,
        name,
        brand,
        category,
        price,
        discount,
        stock,
        expiry_date,
        description,
        prescription_required,
        image,
    } = med || {};

    return (
        <Card className="w-full  mx-auto rounded-2xl shadow-md pt-0">
            <CardHeader className={"px-0"}>
                <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="100%"
                    />
                </div>
                <CardTitle className="text-xl px-5 font-semibold mt-3">{name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm h-full">
                <p><strong>Brand:</strong> {brand}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Price:</strong> ৳{price} <span className="text-green-600 ml-1">(-{discount}%)</span></p>
                <p><strong>Stock:</strong> {stock}</p>
                <p><strong>Expiry:</strong> {expiry_date}</p>
                <p className="text-muted-foreground">{description}</p>
                {prescription_required === "true" && (
                    <Badge variant="destructive">Prescription Required</Badge>
                )}
            </CardContent>
            <CardFooter>
                {/* <Button className="w-full">Add to Cart</Button> */}
                <Link href={`/services/medicine/${ med.id}`} className="w-full">
                    <Button className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded-full text-sm md:text-base">
                        বিস্তারিত দেখুন
                    </Button>
                </Link>
            </CardFooter>
        </Card >
    )
}
