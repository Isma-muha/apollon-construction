import NotFoundClient from "@/components/NotFoundClient";
import { notFoundVariants } from "@/lib/not-found-data";

export default function NotFound() {
  return <NotFoundClient variants={notFoundVariants()} />;
}
