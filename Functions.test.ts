import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { resolvedRepoUrl } from "./Functions.ts";

Deno.test("resolvedRepoUrl unfurls a github repo", () => {
  const input = "github:subscriber-management/functions/create.ts";
  const output =
    "https://raw.githubusercontent.com/subscriber-management/functions/create.ts";
  assertEquals(resolvedRepoUrl(input), output);
});
