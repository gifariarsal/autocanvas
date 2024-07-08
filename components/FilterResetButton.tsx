'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

export const resetSearchParams = () => {
  const basePathname = window.location.pathname;
  return basePathname;
};

const FilterResetButton = () => {
  const router = useRouter();

  const handleReset = () => {
    const newPathname = resetSearchParams();
    router.push(newPathname, { scroll: false });
  };

  return (
    <Button
      title="Reset Filters"
      containerStyles="bg-gray-100 text-[14px] !py-2 !px-3 rounded-full"
      handleClick={handleReset}
    />
  );
};

export default FilterResetButton;
