import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";

type IPTableProps = {
  statuses: string[];
  columns: string[];
  data: {
    id?: number;
    DiaryNo?: string;
    ROCNo?: string;
    TitleofWork?: string;
    Applicant?: string;
    Date?: string;
    Category?: string;
  }[];
};

export default function IPTable({ statuses, columns, data }: IPTableProps) {
  const router = useRouter();
  const tableData = data;
  return (
    <>
      <div className='bg-black/5'>
        <div className='flex flex-wrap items-center gap-2 pt-4 pl-4'>
          Status:
          {statuses.map((status) => (
            <button
              key={status}
              className='px-2 py-2 text-sm bg-white rounded-md hover:bg-blue-600/90 hover:text-white'
            >
              {status}
            </button>
          ))}
        </div>
        <main className='max-w-full m-4 p-4 bg-white border border-black/20 rounded-md shadow'>
          <div className='flex justify-end p-4'>
            <label>
              Rows per page
              <select className='ml-2 border border-black/20 rounded'>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
                <option value='150'>150</option>
                <option value='200'>200</option>
              </select>
            </label>
            <span className='ml-4'>1-20 of 1000</span>
          </div>
          <table className='w-full'>
            <tbody>
              <tr className='bg-black/20'>
                <th>
                  <input type='checkbox' />
                </th>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
              {tableData.map((appl, i) => (
                <tr
                  key={i}
                  className='text-sm hover:cursor-pointer hover:bg-blue-300/10'
                  onClick={() =>
                    router.push(
                      `/copyright/${encodeURIComponent(appl.id ?? "")}`
                    )
                  }
                >
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>{appl.DiaryNo}</td>
                  <td>{appl.ROCNo}</td>
                  <td className='max-w-36'>{appl.TitleofWork}</td>
                  <td className='max-w-36'>{appl.Applicant}</td>
                  <td>{formatDate(appl.Date ?? "")}</td>
                  <td>{appl.Category}</td>
                  <td>
                    <span className='p-1 border-2 border-blue-500  rounded'>
                      Applied
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
