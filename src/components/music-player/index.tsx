import Controls from '@/components/music-player/Controls';
import Player from '@/components/music-player/Player';
import Seekbar from '@/components/music-player/Seekbar';
import Track from '@/components/music-player/Track';
import VolumeBar from '@/components/music-player/VolumeBar';
import { HStack, Stack, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextSong, prevSong, playPause, usePlayer } from '../../redux/features/playerSlice';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = usePlayer();
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <Stack direction={{base:'column', md:'row'}} p={4} w='full' justify='center'>
      <Track isPlaying={isPlaying} activeSong={activeSong} />
      <VStack flex={1} spacing={0}>
        <Controls
          isPlaying={isPlaying}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min={0}
          max={duration}
          onChange={(value) => setSeekTime(value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </VStack>
      <VolumeBar value={volume} min={0} max={1} onChange={(value: number) => setVolume(value)} setVolume={setVolume} />
    </Stack>
  );
};

export default MusicPlayer;
