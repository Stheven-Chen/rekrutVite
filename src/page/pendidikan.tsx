import React, { useState } from 'react';
import Sidebar from '../component/sideBar';
import Button from '../component/button';
import {useNavigate, useLocation} from 'react-router-dom'

const DataDiri: React.FC = () => {
  const [data, setData] = useState({
    pendTerakhir:'',
    univ:'',
    jurusan:'',
    ipk:''
  });

  const navigate = useNavigate()

  const {state} = useLocation()

  const {nama,
    jenisKelamin,
    tanggalLahir,
    phone,
    email,
    domisili} = state

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/input/pengalaman', {
      state: {
        nama,
        jenisKelamin,
        tanggalLahir,
        phone,
        email,
        domisili,
        pendTerakhir:data.pendTerakhir,
        univ:data.univ,
        jurusan:data.jurusan,
        ipk:data.ipk
      },
    });
  }
  
  return (
    <Sidebar
      content={
        <div className="p-2">
          <h1 className="text-xl text-gray-900 font-semibold">Pendidikan</h1>

          <form onSubmit={submit} className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <label htmlFor="pendTerakhir" className="text-gray-700">
                Pendidikan Terakhir:
              </label>
              <input
                type="text"
                id="pendTerakhir"
                name="pendTerakhir"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.pendTerakhir}
                onChange={inputChange}
              />
              <label htmlFor="univ" className="text-gray-700">
                Universitas:
              </label>
              <input
                type="text"
                id="univ"
                name="univ"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.univ}
                onChange={inputChange}
              />
              <label htmlFor="jurusan" className="text-gray-700">
                Jurusan:
              </label>
              <input
                type="text"
                id="jurusan"
                name="jurusan"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.jurusan}
                onChange={inputChange}
              />
              <label htmlFor="ipk" className="text-gray-700">
                IPK:
              </label>
              <input
                type="text"
                id="ipk"
                name="ipk"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.ipk}
                onChange={inputChange}
              />
            </div>

              
           <div className='flex justify-center items-center mt-6'>
           <Button
            text="Next"
            textColor='white'
            />
           </div>
          </form>
        </div>
      }
    />
  );
};

export default DataDiri;
