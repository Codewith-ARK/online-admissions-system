import DashboardActionCard from "@/components/ui/cards/dashboard-action-card";
import { Plus } from "lucide-react";

export default function InstituteDashboard() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Institute Management Dashboard</h1>
      <p className="mt-4">Manage institute settings, review applications, and update admissions criteria here.</p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <DashboardActionCard
          title="Add Program"
          description="ettings, review applications, and update admissions criteri"
          actionText="Add"
          href="/"
          icon={<Plus />}
        />
      </section>
    </main>
  );
}