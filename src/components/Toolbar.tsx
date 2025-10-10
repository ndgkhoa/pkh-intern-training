import LimitSelect from './LimitSelect';
import Pagination from './Pagination';

interface ToolbarProps {
  total: number;
}

const Toolbar = ({ total }: ToolbarProps) => {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:w-auto">
        <LimitSelect />
      </div>

      <div className="flex w-full justify-center sm:w-auto sm:justify-end">
        <Pagination total={total} />
      </div>
    </div>
  );
};

export default Toolbar;
