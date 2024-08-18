declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        NEXT_PUBLIC_CRAFT_CMS_URL: string;
        NEXT_PUBLIC_CRAFT_CMS_TOKEN: string;
      }
    }
  }
  
  export {}