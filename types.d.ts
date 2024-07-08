interface ButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarCardProps {
  car: CarProps;
}

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

interface HomeProps {
  searchParams: FilterProps;
}

interface OptionProps {
  title: string;
  value: string;
}

interface FilterComponentProps {
  title: string;
  options: OptionProps[];
}

interface ShowMoreButtonProps {
  pageNumber: number;
  isNext: boolean;
}
