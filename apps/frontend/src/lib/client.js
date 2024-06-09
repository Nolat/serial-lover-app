import { SerialLoverClient } from "serial-lover-client";

export const client = new SerialLoverClient(
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"
);
