type AppEnvType = 'develop' | 'staging' | 'production';

export const appEnv = (): AppEnvType => {
  return `${process.env.APP_ENV ?? 'develop'}` as AppEnvType;
};
