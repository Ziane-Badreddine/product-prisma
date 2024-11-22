import { prisma } from "@/prisma/route";

export default async function Home() {

  const products = await prisma.product.findMany()

  return (
    <div className="w-screen flex items-center justify-center flex-col gap-5 p-5">
      {products.map((product, index) => {
        return <div key={index} className="flex flex-col items-start gap-5 p-6 border-2 border-white">
          <h1 className="text-5xl capitalize">{product.title}</h1>
          <p className="text-xl font-semibold">{product.category}</p>
          <p className="text-sm text-foreground">{product.description}</p>
          <p className="underline">{product.price}</p>
        </div>

      })}
    </div>
  );
}
