import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Image from 'next/image';
import InviteDashboardList from './InviteDashboardList';
import { mockInvitations } from '@/mocks/invitations';

export default async function MyDashboard() {
  const acceptedDashboards = mockInvitations.filter(
    (mockInvitation) => mockInvitation.inviteAccepted === true
  );
  const pendingInvitations = mockInvitations.filter(
    (mockInvitation) => mockInvitation.inviteAccepted === null
  );

  return (
    <div id="dashboardWrapper" className="m-10 max-w-[1022px]">
      {/* 나의 대시보드 섹션 */}
      {mockInvitations.length > 0 ? (
        <>
          <div className="mb-10 flex flex-col gap-3">
            <div className="grid grid-cols-3 grid-rows-2 gap-[13px]">
              <Button variant="outline" size="dashboardCard">
                새로운 대시보드 +
              </Button>

              {acceptedDashboards.map((acceptedDashboard) => (
                <Button key={acceptedDashboard.id} variant="outline" size="dashboardCard">
                  {acceptedDashboard.dashboard.title}
                </Button>
              ))}
            </div>
            <button className="w-[200px] self-end">페이지네이션 버튼</button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-[114px] flex flex-col gap-3">
            <Button variant="outline" size="dashboardCard">
              새로운 대시보드 +
            </Button>
          </div>
        </>
      )}

      {/* 초대받은 대시보드 섹션 */}
      {mockInvitations.length > 0 ? (
        <>
          <div className="flex flex-col gap-6 rounded-lg bg-white py-6">
            <div className="flex flex-col gap-8 px-10">
              <h3 className="text-bold24 text-black200">초대받은 대시보드</h3>
              <Input
                placeholder="검색"
                size={16}
                customInputClass="h-6"
                customBorderClass="py-[7px]"
                leftIcon={
                  <img
                    src="/icons/search.svg"
                    alt="검색 아이콘"
                    width={17}
                    height={17}
                    className="ml-1"
                  />
                }
              />
            </div>
            <InviteDashboardList invitations={pendingInvitations} />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-[390px] rounded-2xl bg-white px-10 py-6">
            <h3 className="text-bold24 text-black2 00">초대받은 대시보드</h3>
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[30px]">
              <div className="relative h-[75px] w-[87px]">
                <Image src="/invite.svg" fill alt="초대받은 대시보드" />
              </div>
              <p className="text-gray400 text-regular18">아직 초대받은 대시보드가 없습니다.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
