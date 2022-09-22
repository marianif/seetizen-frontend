export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/"
    : process.env.NEXT_PUBLIC_BASE_URL;
