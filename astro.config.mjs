import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  pages: {
    '/': {
      load: '@site/routes/retention.astro',
      title: 'Retention'
    }
  },
  redirects: {
    '/': '/retention'
  },
    routes: [
        {
          path: '/retention',
          component: './src/pages/data-table.astro',
      },
      {
      path: '/retention/?',
      component: './src/pages/retention.astro',
  },
        {
          path: '/interest',
          component: './src/pages/data-table.astro',
        },
        {
          path: '/usage',
          component: './src/pages/data-table.astro',
        },
        {
          path: '/awareness',
          component: './src/pages/data-table.astro',
        },
        
    ],
    
    devOptions: {
        port: 5173,
      },
});
