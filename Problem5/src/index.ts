import "dotenv/config";
import express, { Express, Request, Response, Application, NextFunction } from 'express';
import APIRoute from "@routes/index";
import { initializeDatabase } from "@databases/posgres";
import configs from '@configs/index';
import responseHandle from "@middleware/response-handle";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";


//For env File 

const app: Application = express();
app.use(morgan("dev"));

// setting base
app.use(
  helmet.frameguard({
    action: "deny",
  })
);
// strict transport security
const reqDuration = 2629746000;
app.use(
  helmet.hsts({
    maxAge: reqDuration,
  })
);

// content security policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  })
);
// x content type options
app.use(helmet.noSniff());
// x xss protection
app.use(helmet.xssFilter());
// referrer policy
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
);

app.use(
  compression({
    level: 6, // level compress
    threshold: 100 * 1024, // > 100kb threshold to compress
    filter: (req) => {
      return !req.headers["x-no-compress"];
    },
  })
);
if (configs.postgres.enable) {
  initializeDatabase(true);
}
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api", APIRoute);
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next({
    code: -13,
    message: `api not found`,
  });
});
app.use(responseHandle);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
