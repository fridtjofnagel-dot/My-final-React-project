import { useEffect, useState } from 'react';
import { fetchNasaPic } from '../server/NasaApi'
import Loading from './shared/Loading';
import ErrorMessage from './shared/ErrorMessage'
import { useApp } from '../context/AppContext';

function NasaPic () {
  const { nasaPicDay, setNasaPicDay } = useApp();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNasaPic (setLoading, setError, setNasaPicDay);
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h2 className='text-xl font-bold'>Nasa picture of the day</h2>
      <div className='flex flex-wrap justify-center items-center gap-4'>
          <img
            src={nasaPicDay.hdurl || nasaPicDay.url}
            alt={nasaPicDay.title || "Nasa picture of the day"}
            className="max-w-xl rounded-lg shadow-md"
            />
      </div>
    </div>
  );
}

export default NasaPic;
