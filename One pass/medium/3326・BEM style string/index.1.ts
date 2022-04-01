/*
  3326 - BEM style string
  -------
  by Songhn (@songhn233) #medium #template-literal #union #tuple
  
  ### Question
  
  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS. 
  
  For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.
  
  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).
  
  > View on GitHub: https://tsch.js.org/3326
*/

/* _____________ Your Code Here _____________ */

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E extends [] ? "" : "__"}${[E[number]] extends [never]
  ? ""
  : E[number]}${M extends [] ? "" : "--"}${[M[number]] extends [never]
  ? ""
  : M[number]}`;

type BEM1<
  B extends string,
  E extends string[],
  M extends string[]
> = E extends []
  ? `${B}--${M[number]}`
  : M extends []
  ? `${B}__${E[number]}`
  : `${B}__${E[number]}--${M[number]}`;

type case1 = BEM<"btn", ["price"], []>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];
type cases1 = [
  Expect<Equal<BEM1<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM1<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM1<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3326/answer
  > View solutions: https://tsch.js.org/3326/solutions
  > More Challenges: https://tsch.js.org
*/
