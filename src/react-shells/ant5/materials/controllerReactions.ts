import { IReactionMaterial } from "runner/reaction/interfaces/material";
import { ReactionType } from "runner/reaction/interfaces/metas";
import { setVariableIcon, listenVariableIcon, setPropIcon, methodIcon } from "../icons/reactions";

export const setVariableMaterial: IReactionMaterial = {
  name: "setVariable",
  icon: setVariableIcon,
  label: "$setVariable",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    ports: [
      {
        name: "input",
        label: "",//"$startUp",
        group: "in",
      },
    ],
  }
}

export const listenVariableMaterial: IReactionMaterial = {
  name: "listenVariable",
  icon: listenVariableIcon,
  label: "$listenVariable",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    ports: [
      {
        name: "output",
        label: "",//"$startUp",
        group: "out",
      },
    ],
  }
}

export const setPropMaterial: IReactionMaterial =   {
  name: "setProp",
  icon: setPropIcon,
  label: "$setProp",
  reactionType: ReactionType.ControllerDefaultReaction,
  meta: {
    ports: [
      {
        name: "input",
        label: "",//"$startUp",
        group: "in",
      },
    ],
  }
}

export const reactionMaterial: IReactionMaterial =   {
  name: "controllerReaction",
  icon: methodIcon,
  label: "reaction",
  reactionType: ReactionType.ControllerReaction,
  meta: {
    ports: [
      {
        name: "input",
        label: "",
        group: "in",
      },
      {
        name: "output",
        label: "",
        group: "out",
      },
    ],
  }
}


export const controllerReactions: IReactionMaterial[] = [
  setVariableMaterial,
  listenVariableMaterial,
  setPropMaterial,
  reactionMaterial
]