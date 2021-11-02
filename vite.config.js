// vite.config.json
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin(), reactSvgPlugin()],
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
});
