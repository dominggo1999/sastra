import {
  AiOutlineTwitter, AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram,
} from 'react-icons/ai';
import { FaUnsplash, FaVimeo } from 'react-icons/fa';

const footerSocials = [
  {
    path: 'www.twitter.com',
    icon: AiOutlineTwitter,
    name: 'twitter-icon',
  },
  {
    path: 'https://github.com/',
    icon: AiFillGithub,
    name: 'github-icon',
  },
  {
    path: 'https://www.linkedin.com/',
    icon: AiFillLinkedin,
    name: 'linkedin-icon',
  },
  {
    path: 'https://www.youtube.com/',
    icon: AiFillYoutube,
    name: 'youtube-icon',
  },
  {
    path: 'https://www.instagram.com/?hl=en',
    icon: AiOutlineInstagram,
    name: 'instagram-icon',
  },
  {
    path: 'https://unsplash.com/images',
    icon: FaUnsplash,
    name: 'unsplash-icon',
  },
  {
    path: 'https://duckduckgo.com/?q=viemo&atb=v294-3&ia=web',
    icon: FaVimeo,
    name: 'vimeo-icon',
  },
];

export default footerSocials;
