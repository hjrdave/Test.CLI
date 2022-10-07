import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

const bootstrap = async () => {
  await CommandFactory.run(AppModule);
};

bootstrap();
