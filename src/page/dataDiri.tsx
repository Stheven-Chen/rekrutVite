import React, { useState } from 'react';
import Sidebar from '../component/sideBar';
import Button from '../component/button';
import {useNavigate} from 'react-router-dom'

const DataDiri: React.FC = () => {
  const [data, setData] = useState({
    nama: '',
    jenisKelamin: '',
    tanggalLahir: '',
    phone: '',
    email: '',
    domisili: ''
  });

  const navigate = useNavigate()

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
    navigate('/input/pendidikan', {
      state: {
        nama: data.nama,
        jenisKelamin: data.jenisKelamin,
        tanggalLahir: data.tanggalLahir,
        phone: data.phone,
        email: data.email,
        domisili: data.domisili,
      },
    });
  }
  
  return (
    <Sidebar
      content={
        <div className="p-2">
          <h1 className="text-xl text-gray-900 font-semibold">Data Diri</h1>

          <form onSubmit={submit} className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <label htmlFor="nama" className="text-gray-700">
                Nama:
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.nama}
                onChange={inputChange}
              />

              <label htmlFor="jenisKelamin" className="text-gray-700">
                Jenis Kelamin:
              </label>
              <div className='flex flex-col'>
                <label>
                  <input
                    type="radio"
                    className='mr-2'
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value="laki-laki"
                    checked={data.jenisKelamin === 'laki-laki'}
                    onChange={inputChange}
                  />
                  Laki-laki
                </label>
                <label>
                  <input
                    type="radio"
                    className='mr-2'
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value="perempuan"
                    checked={data.jenisKelamin === 'perempuan'}
                    onChange={inputChange}
                  />
                  Perempuan
                </label>
              </div>

              <label htmlFor="tanggalLahir" className="text-gray-700">
                Tanggal Lahir:
              </label>
              <input
                type="date"
                id="tanggalLahir"
                name="tanggalLahir"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.tanggalLahir}
                onChange={inputChange}
              />

              <label htmlFor="phone" className="text-gray-700">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.phone}
                onChange={inputChange}
              />

              <label htmlFor="email" className="text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.email}
                onChange={inputChange}
              />

              <label htmlFor="domisili" className="text-gray-700">
                Domisili:
              </label>
              <input
                type="text"
                id="domisili"
                name="domisili"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.domisili}
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
