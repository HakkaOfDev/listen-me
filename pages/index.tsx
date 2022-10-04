import Loader from '@/components/Loader';
import PageLayout from '@/components/page-layout';
import SongCard from '@/components/SongCard';
import { usePlayer } from '@/redux/features/playerSlice';
import { useGetTopChartsQuery } from '@/services/shazamCore';
import { SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const { data, isFetching } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = usePlayer();

  return (
    <PageLayout title='Home' description='Home page for songs...'>
      {!data && isFetching ? (
        <Loader />
      ) : (
        <SimpleGrid w='full' gap={4} columns={{ base: 2, md: 4, lg: 8 }}>
          {data?.map((song, idx) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={idx}
            />
          ))}
        </SimpleGrid>
      )}
    </PageLayout>
  );
};

export default IndexPage;
