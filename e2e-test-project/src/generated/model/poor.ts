import {HappyPoor} from "./happyPoor"
import {Miserable} from "./miserable"

export type Poor = HappyPoor | Miserable

export function fromJsonPoor(json: any): Poor {
  switch(json?.isTypeOf) {
    case 'HappyPoor': return new HappyPoor(undefined, json)
    case 'Miserable': return new Miserable(undefined, json)
    default: throw new TypeError('Unknown json object passed as Poor')
  }
}
