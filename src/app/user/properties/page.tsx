import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import PropertiesTable from "./_components/PropertiesTable";

const PAGE_SIZE = 12;

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const PropertiesPage = async ({ searchParams }: Props) => {
  // Fetch the current user from Kinde authentication
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user) {
    // If there’s no user, handle the case (maybe redirect or return an error message)
    return <div>Not authorized</div>;
  }

  // Get the current page number, default to 0 if not available or invalid
  const pagenum = typeof searchParams.pagenum === "string" ? +searchParams.pagenum : 0;

  // Prisma query to get the properties based on the userId and pagination
  const propertiesPromise = prisma.property.findMany({
    where: {
      userId: user.id,
    },
    include: {
      type: true,
      status: true,
      images: true,
    },
    skip: pagenum * PAGE_SIZE,  // Skip the items already displayed
    take: PAGE_SIZE,            // Limit the results to PAGE_SIZE
  });

  // Prisma query to count the total properties for the current user
  const totalPropertiesPromise = prisma.property.count({
    where: {
      userId: user.id,
    },
  });

  // Resolve both promises in parallel
  const [properties, totalProperties] = await Promise.all([
    propertiesPromise,
    totalPropertiesPromise,
  ]);

  // Calculate the total pages, ensuring rounding up
  const totalPages = Math.ceil(totalProperties / PAGE_SIZE);

  return <PropertiesTable properties={properties} totalPages={totalPages} currentPage={pagenum} />;
};

export default PropertiesPage;
