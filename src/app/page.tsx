'use client';
import { Character, useContent } from "@/models/generated";
import React from "react";

export default function Home() {
  const { data, isLoading } = useContent()
  return (
    <React.StrictMode>
      <main>
        {isLoading ? <>Loading...</> : <>
        {data?.data.content.characters.map((c: Character) => {
          return <div key={c.localizedNames["ja-JP"]}>{c.localizedNames["ja-JP"]}</div>
        })}
        </>}
      </main>
    </React.StrictMode>
  )
}
