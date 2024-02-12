export async function loader() {
  const res = await globalThis.fetch("https://dummyjson.com/http/403");
  if (!res.ok) {
    throw res;
  }
  return res;
}

export default function TestRoute() {
  return <>Hello</>;
}
