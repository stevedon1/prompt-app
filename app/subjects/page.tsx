import { subjects } from "@/libs";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
       <Navbar/>
      <div>
        <p>subjects</p>
        {subjects.map(subject=>(
          <Link href={`/subjects/${subject.id}`} key={subject.id}>
            <h1>{subject.title}</h1>

          </Link>
        ))}
      </div>
    </div>
  );
}
