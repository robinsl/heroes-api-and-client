import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers: [
    HeroesController,
  ],
  providers: [
    HeroesService,
  ],
})
export class HeroesModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HeroesController);
  }
}
