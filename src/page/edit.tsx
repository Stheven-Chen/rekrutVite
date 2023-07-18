import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sideBar';
import { useParams, useNavigate } from 'react-router-dom';
import { update } from '../reducers/candidateSlice';
import { useDispatch } from 'react-redux';
import Button from '../component/button';
import { State } from '../component/state';

const Edit: React.FC = () => {
  const { id, where } = useParams<{ id: string, where:string }>();
  console.log('id:', id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasil, setHasil] = useState('')

  const [candidateData, setCandidateData] = useState<State>({
    nama: '',
    jenisKelamin: '',
    tanggalLahir: '',
    phone: '',
    email: '',
    domisili: '',
    pendTerakhir: '',
    univ: '',
    jurusan: '',
    ipk: '',
    perusahaan: '',
    posisiT: '',
    posisi: '',
    sumber: '',
    addedDate: '',
    HCDate: '',
    pysDate: '',
    userDate: '',
    offeringDate: '',
    MCUDate: '',
    hasilHC: '',
    hasilPys: '',
    hasilUser: '',
    hasilOffering: '',
    hasilMCU: '',
    status: '',
    HCStatus: '',
    userStatus: '',
    pysStatus: '',
    offeringstatus: '',
    mcuStatus: '',
    lokasi:'',
    _id:undefined
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rekrutserver.stheven.website/show?id=${id}`);
        if (!res.ok) {
          throw new Error(`Gagal Mengambil Data dengan id : ${id}`);
        }
        const data = await res.json();
        console.log(data)
        setCandidateData(data[0][0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);


  useEffect(()=>{
    if(where){
      if(where === 'interview'){
        setHasil('hasilHC')
      }
      if(where === 'pystest'){
        setHasil('hasilPys')
      }
      if(where === 'interviewuser'){
        setHasil('hasilUser')
      }
      if(where === 'offering'){
        setHasil('hasilOffering')
      }
      if(where === 'mcu'){
        setHasil('hasilMCU')
      }
    }
  },[where])


  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCandidateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(update({
      nama:candidateData.nama,
      jenisKelamin:candidateData.jenisKelamin,
      tanggalLahir:candidateData.tanggalLahir,
      phone:candidateData.phone,
      email:candidateData.email,
      domisili:candidateData.domisili,
      pendTerakhir:candidateData.pendTerakhir,
      univ:candidateData.univ,
      jurusan:candidateData.jurusan,
      ipk:candidateData.ipk,
      perusahaan:candidateData.perusahaan,
      posisiT:candidateData.posisiT,
      posisi:candidateData.posisi,
      sumber:candidateData.sumber,
      addedDate:candidateData.addedDate,
      HCDate:where==='interview'?new Date().toISOString().split('T')[0].toString():candidateData.HCDate,
      pysDate:where==='pystest'?new Date().toISOString().split('T')[0].toString():candidateData.pysDate,
      userDate:where==='interviewuser'?new Date().toISOString().split('T')[0].toString():candidateData.userDate,
      offeringDate:where==='offering'?new Date().toISOString().split('T')[0].toString():candidateData.offeringDate,
      MCUDate:where==='mcu'?new Date().toISOString().split('T')[0].toString():candidateData.MCUDate,
      hasilHC:candidateData.hasilHC,
      hasilPys:candidateData.hasilPys,
      hasilUser:candidateData.hasilUser,
      hasilOffering:candidateData.hasilOffering,
      lokasi:candidateData.lokasi,
      hasilMCU:candidateData.hasilMCU,
      status:candidateData.status,
      HCStatus:where==='interview'?'Done':candidateData.HCStatus,
      userStatus:where==='interviewuser'?'Done':candidateData.userStatus,
      pysStatus:where==='pystest'?'Done':candidateData.pysStatus,
      offeringstatus:where==='offering'?'Done':candidateData.offeringstatus,
      mcuStatus:where==='mcu'?'Done':candidateData.mcuStatus,
      _id:candidateData._id,
    }));

    navigate('/result/interview');
  };

  const status = [
    {
      name: 'New',
      value: 'New',
    },
    {
      name: 'Interview HC',
      value: 'Interview HC',
    },
    {
      name: 'Psychological Test',
      value: 'Psychological Test',
    },
    {
      name: 'Interview User',
      value: 'Interview User',
    },
    {
      name: 'Offering',
      value: 'Offering',
    },
    {
      name: 'Medical Check Up',
      value: 'Medical Check Up',
    },
    {
      name: 'Rejected',
      value: 'Rejected',
    },
    {
      name: 'Consideration',
      value: 'Consideration',
    },
    {
      name: 'Accepted',
      value: 'Accepted',
    },
  ];

  return (
    <Sidebar
      content={
        <>
          <h1 className="text-xl text-gray-900 font-semibold">Interview HC</h1>
          <form onSubmit={submit}>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-gray-700">
                Nama:
              </span>
              <span>{candidateData.nama}</span>
              <span className="text-gray-700">
                Posisi yang di Ambil:
              </span>
                <span>{candidateData.posisi}</span>
              <span className="text-gray-700">
                Lokasi:
              </span>
                <span>{candidateData.lokasi}</span>
              <span className="text-gray-700">
                IPK:
              </span>
                <span>{candidateData.ipk}</span>
              <span className="text-gray-700">
                Jurusan:
              </span>
                <span>{candidateData.jurusan}</span>
              <span className="text-gray-700">
                Universitas:
              </span>
                <span>{candidateData.univ}</span>
              <span className="text-gray-700">
                Added Date
              </span>
                <span>{candidateData.addedDate}</span>
                {where === 'pystest'?(
                  <>
                <span className="text-gray-700">
                  Interview HC Date
                </span>
                <span>{candidateData.HCDate}</span>
                </>
                ):null}
                {where === 'interviewuser'?(
                  <>
                <span className="text-gray-700">
                  Interview HC Date
                </span>
                <span>{candidateData.HCDate}</span>
                <span className="text-gray-700">
                  Interview user Date
                </span>
                <span>{candidateData.userDate}</span>
                </>
                ):null}
                {where === 'offering'?(
                  <>
                <span className="text-gray-700">
                  Interview HC Date
                </span>
                <span>{candidateData.HCDate}</span>
                <span className="text-gray-700">
                  Interview user Date
                </span>
                <span>{candidateData.userDate}</span>
                <span className="text-gray-700">
                  Offering Date
                </span>
                <span>{candidateData.offeringDate}</span>
                </>
                ):null}
                {where === 'mcu'?(
                  <>
                <span className="text-gray-700">
                  Interview HC Date
                </span>
                <span>{candidateData.HCDate}</span>
                <span className="text-gray-700">
                  Interview user Date
                </span>
                <span>{candidateData.userDate}</span>
                <span className="text-gray-700">
                  Offering Date
                </span>
                <span>{candidateData.offeringDate}</span>
                <span className="text-gray-700">
                  MCU Date
                </span>
                <span>{candidateData.MCUDate}</span>
                </>
                ):null}
              <label htmlFor="status" className={`text-gray-700`}>
                Status Saat Ini:
              </label>
              <select
                id="status"
                name="status"
                value={candidateData.status}
                onChange={inputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                <option value="" className="text-center">
                  --Pilih--
                </option>
                {status.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>

              <label htmlFor={`${hasil}`} className={`text-gray-700`}>
                Hasil:
              </label>
              <textarea
                id={`${hasil}`}
                name={`${hasil}`}
                value={candidateData[hasil as keyof State] as string}
                onChange={inputChange}
                className="rounded-md pl-3 w-full h-32 mt-5 p-3 font-Poppins"
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-6 gap-4">
              <Button text="Back" textColor="white" color="#FFA41B" onClick={() => navigate(`/result/${where}`)} />
              <Button text="Next" textColor="white" />
            </div>
          </form>
        </>
      }
    />
  );
};

export default Edit;
