
import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TrackModule } from './track/track.module';
import * as path from 'path'
import { join } from 'path';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.join(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb://localhost:27017/spotifyDB'),
    TrackModule,
    FileModule,
  ]
})
export class AppModule {}