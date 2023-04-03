import {createAction, props} from "@ngrx/store";


export namespace ExampleActions {
  export const increaseCount = createAction("INCRASE_COUNT");

  export const sendMessage = createAction(
    "SEND_MESSAGE",
    props<{message?: string}>()
  )
}
