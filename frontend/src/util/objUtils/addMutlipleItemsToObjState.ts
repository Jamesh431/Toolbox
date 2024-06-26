import { Dispatch, SetStateAction } from "react";

export function addMultipleItemsToObjState<T>(
  dataObj: object,
  setState: Dispatch<SetStateAction<T>>
): void {
  setState((prev: T) => ({ ...prev, ...dataObj }));
}

// for merging an object into current state object
