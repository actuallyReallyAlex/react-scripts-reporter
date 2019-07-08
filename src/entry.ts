import { Reporter } from "./reporter/Reporter";
import { Processor } from "./processor/Processor";

export function entry(this: any, parm0: any, parm1?: any) {
  if (this instanceof entry) {
    return new Reporter(parm0, parm1);
  } else {
    return Processor.run(parm0, parm1);
  }
}
