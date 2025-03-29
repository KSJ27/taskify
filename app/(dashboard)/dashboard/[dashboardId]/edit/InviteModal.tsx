import CloseIcon from '@/assets/icons/CloseIcon';
import Modal from '@/components/common/Modal';
import FormField from '@/components/compound/form/FormField';
import { validateEmail } from '@/utils/authValidate';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (email: string) => Promise<void>;
}

export default function InviteModal({ isOpen, onClose, onInvite }: Props) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [hasEmailBlurred, setHasEmailBlurred] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const canSubmit = hasEmailBlurred && isEmailValid && !isLoading;

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasEmailBlurred(true);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handleSubmitInvite = async () => {
    if (!canSubmit) return;

    try {
      setIsLoading(true);
      await onInvite(email);
      setEmail('');
      setIsEmailValid(true);
      onClose();
    } catch (error) {
      console.error('초대 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitInvite}
      submitMessage="생성"
      cancelMessage="취소"
      padding="24/24"
      borderRadius="8"
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-bold24">초대하기</h3>
          <button onClick={onClose}>
            <CloseIcon width="36" height="36" />
          </button>
        </div>
        <div className="mt-6 mb-1 flex flex-col gap-2">
          <FormField
            id="email"
            name="email"
            fieldType="input"
            label="이메일"
            type="email"
            errorMessage="이메일 형식으로 작성해 주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            isValid={hasEmailBlurred ? isEmailValid : true}
          />
        </div>
      </div>
    </Modal>
  );
}
