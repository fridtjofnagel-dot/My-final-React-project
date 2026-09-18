import { useEffect, useState } from 'react';
import { fetchNasaPic } from '../server/NasaApi'
import { Loading } from './shared/Loading';
import { ErrorMessage } from './shared/ErrorMessage'
import { useApp } from '../context';

function NasaPic () {
  const { NasaPicDay, setNasaPicDay } = useApp();
  const [loading, setLoading] = useState(false);
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
          <NasaPic key={post_id.id} picture={hdurl} />
      </div>
    </div>
  );
}

export default NasaPic;
