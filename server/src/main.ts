import {NestFactory} from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import {AppModule} from "./app.module";


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create<NestExpressApplication>(AppModule);
        app.enableCors()
        await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()