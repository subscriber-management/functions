import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { executeFunction } from "./Functions.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome to the functions service!";
});

router.post("/functions/execute", executeFunction);

export default router;
