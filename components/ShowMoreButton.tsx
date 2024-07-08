'use client';

import { ShowMoreButtonProps } from '@/types';
import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';
import Button from './Button';

const ShowMoreButton = ({ pageNumber, isNext }: ShowMoreButtonProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleShowMore}
        />
      )}
    </div>
  );
};

export default ShowMoreButton;
