import SectionHeading from "@/components/ui/typography/section-heading";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ApplicantDashboard() {
  return (
    <main>
      <header className="flex justify-between items-center">
        <div className="">
          <SectionHeading text="Application Management" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aspernatur.</p>
        </div>
        <div className="">
          <Link href={'/institute '} className="btn btn-primary">
            <Plus />
            New Application
          </Link>
        </div>
      </header>
    </main>
  );
}