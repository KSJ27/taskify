import AddColumnBtn from '@/components/Dashboard/AddColumnBtn';
import DashboardColumn from '@/components/Dashboard/DashboardColumn/DashboardColum';
import GetDashboardColumn from '@/components/Dashboard/DashboardColumn/action';

export default async function DashboardId({
  params,
}: {
  params: Promise<{ dashboardId: string }>;
}) {
  const dashboardId = (await params).dashboardId;

  const columns = await GetDashboardColumn(Number(dashboardId));
  if (!columns) return;

  return (
    <div className="flex flex-col lg:flex-row">
      {columns.map((column) => (
        <DashboardColumn key={column.id} title={column.title} id={column.id} />
      ))}
      <div className="fixed inset-x-3 bottom-7 lg:static lg:mx-5 lg:mt-[68px]">
        <AddColumnBtn />
      </div>
    </div>
  );
}
