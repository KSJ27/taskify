import Button from '@/components/common/Button';
import React from 'react';
import { Invitation } from './invitations';

interface Props {
  invitations: Invitation[];
  onAccept: (id: number) => void;
  onDecline: (id: number) => void;
}

const InvitedDashboardList = ({ invitations, onAccept, onDecline }: Props) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      {/* Header */}
      <div className="text-gray400 text-regular16 grid grid-cols-3 px-[76px]">
        <span>이름</span>
        <span>초대자</span>
        <span className="text-center">수락 여부</span>
      </div>

      {/* Body - 무한스크롤 영역 */}
      <div className="divide-y">
        <div className="border-gray200 border-b">
          {invitations.map((invitation) => (
            <div key={invitation.id} className="grid grid-cols-3 items-center px-[76px] py-[23px]">
              <span>{invitation.dashboard.title}</span>
              <span>{invitation.inviter.nickname}</span>
              <span className="flex justify-center gap-2">
                <Button onClick={() => onAccept(invitation.id)}>수락</Button>
                <Button variant="outline" onClick={() => onDecline(invitation.id)}>
                  거절
                </Button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvitedDashboardList;
