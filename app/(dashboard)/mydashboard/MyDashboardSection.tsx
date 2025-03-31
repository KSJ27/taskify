'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '@/hooks/useModal';
import { usePagination } from '@/components/Pagination/usePagination';
import Button from '@/components/common/Button';
import PaginationItems from '@/components/Pagination/PaginationItems';
import PaginationControls from '@/components/Pagination/PaginationControls';
import MyDashboardListItem from './MyDashboardListItem';
import CreateDashboardModal from './CreateDashboardModal';
import { Dashboard } from './actions';

interface Props {
  mydashboards: Dashboard[];
}

export default function MyDashboardSection({ mydashboards }: Props) {
  const pathname = usePathname();
  const { isOpen, open, close } = useModal();
  const selectedId = pathname?.split('/dashboard/')[1]?.split('/')[0];

  const itemsPerPage = 6;

  const { currentPage, totalPages, goToPrev, goToNext } = usePagination(mydashboards, itemsPerPage);

  if (mydashboards.length === 0) {
    return (
      <div className="mb-[114px] flex flex-col gap-3">
        <Button variant="outline" size="dashboardCard" onClick={open}>
          <span className="text-black200 text-semi14 md:text-semi16">새로운 대시보드</span>
          <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
        </Button>
      </div>
    );
  }

  return (
    <div className="mb-[40px] flex flex-col gap-3">
      <PaginationItems
        data={mydashboards}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        wrapperClassName="grid grid-cols-3 grid-rows-2 gap-[13px]"
        renderFixedItem={() => (
          <Button variant="outline" size="dashboardCard" onClick={open}>
            <span className="text-black200 text-semi14 md:text-semi16">새로운 대시보드</span>
            <Image src="/icons/plus.svg" alt="추가" width={16} height={16} className="mr-2 ml-3" />
          </Button>
        )}
        renderItems={(pageItems) => (
          <>
            {pageItems.map((dashboard) => (
              <MyDashboardListItem
                key={dashboard.id}
                id={dashboard.id}
                dashboardId={dashboard.id}
                title={dashboard.title}
                color={dashboard.color}
                createdByMe={dashboard.createdByMe}
                isSelected={String(dashboard.id) === selectedId}
              />
            ))}
          </>
        )}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrev={goToPrev}
        goToNext={goToNext}
      />

      <CreateDashboardModal isOpen={isOpen} onClose={close} />
    </div>
  );
}
