import { auth } from "@clerk/nextjs/server";

export default function Page() {
  auth().protect();
  return <div></div>;
}
