import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { YouTubeVideo } from '@site/src/components/yt-video';
import { TwitchVideo } from '@site/src/components/twitch-video';

export default {
  ...MDXComponents,
  YouTubeVideo,
  TwitchVideo,
};
