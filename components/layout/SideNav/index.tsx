'use client';

import Link from 'next/link';
import Image from 'next/image';
import DashboardListItem from './DashboardListItem';
import AddDashboardButton from './AddDashboardButton';
import { useEffect, useState } from 'react';
import { mockDashboards, MockDashboard } from '@/mocks/dashboards';
import { usePathname } from 'next/navigation';
import PaginationItems from '@/components/Pagination/PaginationItems';
import { usePagination } from '@/components/Pagination/usePagination';
import PaginationControls from '@/components/Pagination/PaginationControls';

export default function SideNav() {
  const pathname = usePathname();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];
  const itemsPerPage = 15;
  // mock data 적용
  const [dashboards, setDashboards] = useState<MockDashboard[]>([]);
  const { currentPage, totalPages, goToPrev, goToNext } = usePagination(dashboards, itemsPerPage);

  useEffect(() => {
    setDashboards(mockDashboards);
  }, []);

  return (
    <nav className="h-screen w-[67px] md:w-[160px] lg:w-[300px]">
      <div id="sideNavWrapper" className="flex flex-col gap-14 pt-5 pr-3 pl-2">
        <h2 id="sideNavHeader">
          <Link href="/">
            <Image
              src="/logo-large.svg"
              alt="Taskify 로고"
              width={109}
              height={33}
              className="mx-auto hidden md:block lg:ml-0"
            />
            <Image
              src="/logo-small.svg"
              alt="Taskify 로고"
              width={24}
              height={27}
              className="mx-auto block md:hidden"
            />
          </Link>
        </h2>
        <div id="sideNavItems" className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-semi12 text-gray500 hidden md:block">Dash Boards</h2>
            <AddDashboardButton />
          </div>
          <ul className="space-y-2">
            <PaginationItems
              data={dashboards}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              renderItems={(dashboards) => (
                <>
                  {dashboards.map((dashboard) => (
                    <DashboardListItem
                      key={dashboard.id}
                      dashboardId={dashboard.id}
                      title={dashboard.title}
                      colorKey={dashboard.color}
                      createdByMe={dashboard.createdByMe}
                      isSelected={String(dashboard.id) === selectedId}
                    />
                  ))}
                </>
              )}
            />
          </ul>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            goToPrev={goToPrev}
            goToNext={goToNext}
          />
        </div>
      </div>
    </nav>
  );
}
