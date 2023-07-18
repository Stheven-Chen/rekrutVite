import React, { useEffect } from 'react';
import Sidebar from '../component/sideBar';
import List from '../component/list';
import { useParams } from 'react-router-dom';

const Interview: React.FC = () => {
  const [need, setNeed] = React.useState('');
  const { where } = useParams<{ where: string }>();

  useEffect(() => {
    if (where === "interview") {
      setNeed('Interview HC');
    }
    if (where === "pystest") {
      setNeed('Psychological Test');
    }
    if (where === "interviewuser") {
      setNeed('Interview User');
    }
    if (where === "offering") {
      setNeed('Offering');
    }
    if (where === "mcu") {
      setNeed('Medical Check Up');
    }
  }, [where, need]);

  return (
    <Sidebar
      content={
        <List judul={need} data={need} to={where} />
      }
    />
  );
};

export default Interview;
