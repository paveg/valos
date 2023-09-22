import axios, { AxiosInstance, AxiosResponse } from "axios";
import { NextResponse } from "next/server";

const baseURL = "https://ap.api.riotgames.com/val";
const client: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

export async function GET(request: Request, {}) {
  const res = await client.get(
    `/content/v1/contents?api_key=${process.env.RIOT_API_KEY}`,
  );
  return NextResponse.json(res.data);
}
