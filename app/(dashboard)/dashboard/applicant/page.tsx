import SectionHeading from "@/components/ui/typography/section-heading";
import { CheckCircle, ClipboardClock, FileText, Plus, Search } from "lucide-react";
import Link from "next/link";

export default function ApplicantDashboard({ applications }: { applications: any; }) {
    return (
        <>
            <header className="flex flex-col justify-between items-start gap-6">
                <div className="flex justify-between items-center w-full">
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
                </div>
                <div className="flex gap-6 w-full">
                    <div className="card border border-neutral-200 card-body flex flex-col items-start gap-4 flex-2">
                        <div className="p-2 bg-primary-content rounded-lg">
                            <FileText />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xs text-neutral-600 font-medium">Total Applications</h2>
                            <h4 className="text-xl font-semibold">1,200</h4>
                        </div>
                    </div>
                    <div className="card border border-neutral-200 card-body flex flex-col items-start gap-4 flex-1">
                        <div className="p-2 bg-warning/50 rounded-lg">
                            <ClipboardClock />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xs text-neutral-600 font-medium">Pending Reviews</h2>
                            <h4 className="text-xl font-semibold">1,200</h4>
                        </div>
                    </div>

                    <div className="card border border-neutral-200 card-body flex flex-col items-start gap-4 flex-1">
                        <div className="p-2 bg-success/40 rounded-lg">
                            <CheckCircle />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xs text-neutral-600 font-medium">Approved Applications</h2>
                            <h4 className="text-xl font-semibold">1,200</h4>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="rounded-lg overflow-clip border border-neutral-200">
                    <div className="p-6">
                        <label className="input">
                            <Search size={18} />
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-base-300">
                                <tr>
                                    <th></th>
                                    <th>Program</th>
                                    <th>University</th>
                                    <th>Submission Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {applications.map((item, idx) => (
                                    <TableRow
                                        key={idx}
                                        idx={idx}
                                        id={item.id}
                                        programTitle={item.program.title}
                                        universityTitle={item.universityTitle}
                                        submissionDate={item.submissionDate}
                                        status={item.status}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}

const TableRow = ({
    id,
    idx,
    programTitle,
    status,
    submissionDate,
    universityTitle
}: {
    id: string;
    idx: string;
    programTitle: string;
    universityTitle: string;
    submissionDate: string;
    status: string;
}) => {
    return (
        <tr>
            <th>{idx}</th>
            <td>{programTitle}</td>
            <td>{universityTitle}</td>
            <td>{submissionDate}</td>
            <td>{status}</td>
            <td>Blue</td>
        </tr>
    )
}