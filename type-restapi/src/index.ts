import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./db";

const main = async() => {
try {
    await AppDataSource.initialize();
    console.log('Database Connected')
    app.listen(4000);
    console.log('Server is listening on port', 4000);
} catch (error) {
    console.log(error)
}

}

main();