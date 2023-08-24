import IContactCard from "../interfaces/IContactCard";
import { CardsListToDoActions } from "../common/enums/ActionTypes";

type ActionType =
  | { type: CardsListToDoActions.ADD; payload: IContactCard }
  | { type: CardsListToDoActions.EDIT; payload: IContactCard }
  | { type: CardsListToDoActions.DELETE; payload: number }
  | { type: CardsListToDoActions.INITIAL_STATE; payload: IContactCard[] };

export default function ContactCardListReducer(
  state: IContactCard[],
  action: ActionType
) {
  const { type, payload } = action;

  switch (type) {
    case CardsListToDoActions.INITIAL_STATE:
      return payload;

    case CardsListToDoActions.ADD:
      return [payload, ...state];

    case CardsListToDoActions.EDIT:
      return state.map((item) => (item.id === payload.id ? payload : item));

    case CardsListToDoActions.DELETE:
      return state.filter((item) => item.id !== payload);
  }
}
