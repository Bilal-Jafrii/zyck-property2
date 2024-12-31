import prisma from "@/lib/prisma";
import PropertyCard from "./Components/PropertyCard";
import PropertyContainer from "./Components/PropertyContainer";
import Search from "./Components/Search";
const PAGE_SIZE = 12;

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
}


export default async function Home({searchParams}: Props) {
    const pagenum = await searchParams.pagenum ?? 0;
    const query = await searchParams.query ?? "";
    const propertiesPromise = prisma.property.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        images: {
          select: {
            url: true,
          },
        },
        location: {
          select: {
            city: true,
            state: true,
          },
        },
      },
      ...(!!query && {
        where: {
          name: {
            contains: String(query),
          }
        }
      }),
      skip: +pagenum * PAGE_SIZE,
      take: PAGE_SIZE,
    });
  const totalPropertiesPromise = prisma.property.count({

    ...(!!query && {
      where: {
        name: {
          contains: String(query),
        }
      }
    }),
  }
);

  const [properties, totalProperties] = await Promise.all([
    propertiesPromise,
    totalPropertiesPromise
  ]);

  const totalPages = Math.floor(totalProperties / PAGE_SIZE);
  return (
   <>
   <Search/>
    <PropertyContainer totalPages={totalPages} currentPage={+pagenum}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </PropertyContainer>
   </>
  );
}
