import { redirect } from "next/navigation";

export default function CatchAll() {
  redirect("/"); // redirect user to homepage
  return null;
}
