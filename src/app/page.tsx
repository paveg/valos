"use client";
import { Character, Map, useContents } from "@/models/generated";
import React from "react";

export default function Home() {
  const { data, isLoading, error } = useContents();
  return (
    <React.StrictMode>
      <main>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <div>
            <div>
              <h2 className="font-bold">Character List</h2>
              {data?.data.contents.characters.map((c: Character) => {
                return (
                  <div key={c.id}>
                    {c.localizedNames && c.localizedNames["ja-JP"]}
                  </div>
                );
              })}
            </div>
            <div>
              <h2 className="font-bold">Map List</h2>
              {data?.data.contents.maps.map((c: Map) => {
                return (
                  <div key={c.id}>
                    {c.localizedNames && c.localizedNames["ja-JP"]}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {error && <>{error.message}</>}
      </main>
    </React.StrictMode>
  );
}
