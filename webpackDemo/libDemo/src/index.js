import _ from "lodash";
import numRef from "./ref.json";

export function numToWord(num) {
  return _.reduce(
    numRef,
    (cum, ref) => {
      return ref.num === num ? ref.word : cum;
    },
    ""
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (cum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : cum;
    },
    -1
  );
}
