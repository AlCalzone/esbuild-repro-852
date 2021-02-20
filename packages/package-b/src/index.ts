import { foo } from "@monorepo/a";
import { bar } from "./test/foo/bar";

console.log(foo() ? "OK" : "NOK");
console.log(bar() === "bar" ? "OK" : "NOK");