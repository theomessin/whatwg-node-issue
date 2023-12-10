import { parse } from 'graphql'
import { it } from "vitest";
import { executor } from "./main";

function assertSingleValue<TValue extends object>(
  value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
  if (Symbol.asyncIterator in value) {
    throw new Error('Expected single value')
  }
}


it("works", async () => {
  const result = await executor({
    document: parse(/* GraphQL */ `
      query {
        greetings
      }
    `)
  })
 
  assertSingleValue(result)
  console.error(result.errors);
});

