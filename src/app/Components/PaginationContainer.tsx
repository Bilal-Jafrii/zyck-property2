'use client'
import { Pagination } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    totalPages: number;
    currentPage: number;
    route: string;
}

const PaginationContainer = ({totalPages, currentPage, route="/"} : Props) => {
    const router = useRouter();
    if(totalPages <= 1) return null;
  return (
   <Pagination
   total={totalPages}
    page={currentPage}
    initialPage={1}
    onChange={(page) => router.push(`${route}?pagenum=${page}`)}
   />
  )
}

export default PaginationContainer
