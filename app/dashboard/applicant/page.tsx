import { Plus } from "lucide-react";
import Link from "next/link";

export default function ApplicantDashboard() {
  return (
    <main className="p-8">
      <div className="">
        <h1>Application Management</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aspernatur.</p>
      </div>
      <div className="">
        <Link href={'/institute '} className="btn btn-primary">
          <Plus />
          New Application
        </Link>
      </div>
    </main>
  );
}