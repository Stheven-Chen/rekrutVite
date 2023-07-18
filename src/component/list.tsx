import { useEffect, useState } from 'react';
import { State } from './state';
import { useNavigate } from 'react-router-dom';
import {HiPencil} from 'react-icons/hi'

interface ListProps {
  data: any;
  judul: string;
  to: string | undefined;
}

const List = (props: ListProps) => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState<State[]>([]);
  const [p, setP] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [table, setTable] = useState(false); // New state for table view

  const handleBack = () => {
    if (p === 1) {
      setP(1);
    } else {
      setP(p - 1);
    }
  };

  const handleNext = () => {
    if (p === pageCount) {
      setP(pageCount);
    } else {
      setP(p + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = props.data;
        if (query) {
          const res = await fetch(
            `https://rekrutserver.stheven.website/show?status=${query}&p=${p}`
          );
          if (!res.ok) {
            throw new Error('Gagal Melakukan Fetch Data');
          }
          const data = await res.json();
          setCandidate(data[0]);
          setPageCount(data[1]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [p, props.data]);

  return (
    <div className='font-Poppins'>
      <h1 className="text-xl text-gray-900 font-semibold">{props.judul}</h1>
      <div className="w-full p-5">
      <div className="flex items-center mt-4 mb-2 gap-3">
          <div onClick={()=>setTable(!table)} className={`bg-gray-300 cursor-pointer rounded-full duration-300 transition-colors h-5 w-10 ${table?'bg-green-500':''}`}>
            <div className={`bg-white h-5 w-5 rounded-full ${table?'translate-x-5':''} duration-300 transition-all `}/>
          </div>
          <span className='font-Poppins'>Table View</span>
        </div>
        {table ? ( // Render as table if table state is true
          <table className="table-auto w-full border-collapse rounded-xl overflow-x-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Position</th>
                <th className="px-4 py-2 text-left">Added Date</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidate.length > 0 &&
                candidate.map((item: State, index: number) => {
                  
                  return (
                    <tr
                      className={`bg-white transition-colors duration-300 ${
                        index % 2 === 0 ? 'bg-gray-100' : ''
                      }`}
                      key={index}
                    >
                      <td className="px-4 py-2">{item.nama}</td>
                      <td className="px-4 py-2">{item.posisi}</td>
                      <td className="px-4 py-2">{item.addedDate}</td>
                      <td className="px-4 py-2">{item.lokasi}</td>
                      <td className="px-4 py-2 cursor-pointer active:scale-90 duration-300 transfrom-gpu transition-transform" onClick={() =>
                        navigate(`/result/${props.to}/${item._id}`)
                      }>
                        <HiPencil size={25}/>
                        </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          // Render as card if table state is false
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {candidate.length > 0 &&
              candidate.map((item: State) => {
                let color = '';
                if (item.status.includes('New')) {
                  color = 'orange';
                } else if (
                  item.status.includes('Interview HC') ||
                  item.status.includes('Psychological Test') ||
                  item.status.includes('Interview User') ||
                  item.status.includes('Offering') ||
                  item.status.includes('Medical Check Up')
                ) {
                  color = 'blue';
                } else if (item.status.includes('Rejected')) {
                  color = 'red';
                } else if (item.status.includes('Accepted')) {
                  color = 'green';
                } else if (item.status.includes('Consideration')) {
                  color = 'yellow';
                }
                return (
                  <div
                    className={`grid grid-cols-2 bg-white h-32 p-4 text-sm w-full rounded-md gap-2 shadow-xl transform-gpu transition-transform duration-300 active:scale-90 cursor-pointer`}
                    style={{ borderTop: `3px solid ${color}` }}
                    key={item._id}
                    onClick={() =>
                      navigate(`/result/${props.to}/${item._id}`)
                    }
                  >
                    <span className="text-start">{item.nama}</span>
                    <span className="text-end">{item.posisi}</span>
                    <span className="text-start">{item.addedDate}</span>
                    <span className="text-end">{item.lokasi}</span>
                  </div>
                );
              })}
          </div>
        )}
        <div className="flex justify-between mt-4">
          <button
            className="bg-yellow-500 h-12 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-600 disabled:bg-gray-400 disabled:pointer-events-none"
            disabled={p === 1}
            onClick={() => handleBack()}
          >
            Back
          </button>
          <button
            className="bg-sky-500 h-12 px-4 rounded-lg transition-colors duration-300 hover:bg-sky-600 disabled:bg-gray-400 disabled:pointer-events-none"
            disabled={p === pageCount}
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
