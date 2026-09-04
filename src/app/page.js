import { getWebsiteLists } from "@/services/website.service";
import Link from "next/link";

export default async function Home() {
  const websites = await getWebsiteLists();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Doctor App</h1>
        <p className="text-gray-600 mb-8">create your doctor website</p>
        <ul>
          {
            websites.map((website, index) => {
              return (
                <li key={website._id}>
                  <Link href={`/doctor/${website.subdomain}`}>Website {index + 1}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}
