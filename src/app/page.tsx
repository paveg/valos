"use client";
import { Character, Map, useContents } from "@/models/generated";
import React from "react";

export default function Home() {
  const { data, isLoading, error } = useContents();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!!data?.data) {
    return (
      <React.StrictMode>
        <main>
          <div>
            <div>
              <h2 className="font-bold">Character List</h2>
              <table className="table-auto">
                <thead>
                  <th>ID</th>
                  <th>Localized Name - ja-JP</th>
                  <th>Localized Name - en-US</th>
                </thead>
                <tbody>
                  {data?.data.characters
                    .filter((c: Character) => !c?.name.includes("Null"))
                    .map((c: Character) => {
                      return (
                        <tr key={c?.id}>
                          <td>{c.id}</td>
                          <td>{c.localizedNames!["ja-JP"]}</td>
                          <td>{c.localizedNames!["en-US"]}</td>
                        </tr>
                      );
                    })}
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="font-bold">Map List</h2>
              <table className="table-auto">
                <thead>
                  <th>ID</th>
                  <th>Localized Name - ja-JP</th>
                  <th>Localized Name - en-US</th>
                </thead>
                <tbody>
                  {data?.data?.map
                    .filter((m: Map) => !m?.name.includes("Null"))
                    .map((m: Map) => {
                      return (
                        <tr key={m?.id}>
                          <td>{m.id}</td>
                          <td>{m.localizedNames!["ja-JP"]}</td>
                          <td>{m.localizedNames!["en-US"]}</td>
                        </tr>
                      );
                    })}
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </React.StrictMode>
    );
  }
}
