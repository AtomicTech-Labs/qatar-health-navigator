'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

interface AudioChipProps {
  audioFile: string;
  label?: string;
  className?: string;
}

export default function AudioChip({ audioFile, label, className = '' }: AudioChipProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      console.error('Audio playback failed:', audioFile);
      setError(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [audioFile]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Don't render if there's an error or no audio file
  if (error || !audioFile) {
    return null;
  }

  return (
    <div 
      className={`rounded-2xl bg-white/35 backdrop-blur-[18px] border border-white/28 p-3 sm:p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] ${className}`}
      role="region"
      aria-label="Audio player"
    >
      <audio ref={audioRef} src={audioFile} preload="metadata" aria-hidden="true" />
      
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="flex-shrink-0 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-lake-blue text-white flex items-center justify-center hover:bg-lake-blue/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          type="button"
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <PlayIcon className="w-5 h-5 ml-0.5" aria-hidden="true" />
          )}
        </button>

        {/* Progress and Time */}
        <div className="flex-1 min-w-0">
          {label && (
            <div className="flex items-center gap-2 mb-1">
              <SpeakerWaveIcon className="w-4 h-4 text-lake-blue flex-shrink-0" aria-hidden="true" />
              <span className="text-small text-deep-forest font-medium truncate">
                {label}
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-lake-blue/20 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lake-blue [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-lake-blue [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #4F8FA6 0%, #4F8FA6 ${(currentTime / duration) * 100}%, rgba(79, 143, 166, 0.2) ${(currentTime / duration) * 100}%, rgba(79, 143, 166, 0.2) 100%)`
              }}
              aria-label="Audio progress"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            />
            
            {/* Time Display */}
            <span className="text-small text-deep-forest/70 font-mono flex-shrink-0 min-w-[70px] sm:min-w-[80px] text-right" aria-live="off">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
