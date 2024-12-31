
import { subjects } from "@/libs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
     
      <div>
        <p>subjects</p>
        {subjects.map(subject=>(
          <Link href={``} key={subject.id}>
            <h1>{subject.title}</h1>

          </Link>
        ))}
      </div>
    </div>
  );
}
