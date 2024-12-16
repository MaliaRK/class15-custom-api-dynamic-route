import React from 'react'

interface Books {
  id: number;
  name: string;
  title: string;
  author: string;
}

const page = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const data: Books[] = await res.json();
  console.log(data);
  return (
    <div>
    
    </div>
  )
}

export default page