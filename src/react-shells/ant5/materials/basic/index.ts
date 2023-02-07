import { createUuid } from "react-shells/ant5/SettingsForm/components/ReactionsInput/ReactionsEditor/utils";
import { ReactionType } from "runner/reaction/interfaces/metas";
import { IReactionMaterial } from "../../../../runner/reaction/interfaces/material";
import { delayIcon, endIcon, fixedValueIcon, loopIcon, mergeIcon, startIcon, switchIcon } from "../../icons/reactions";
import { startEndSchema } from "../baseSchema";
import { conditionMaterial } from "./condition";
import { intervalMaterial } from "./interval";
import { loopSchema } from "./loop/schema";
import { mergeSchema } from "./merge/schema";
import { randomMaterial } from "./random";
import { switchSchema } from "./switch/schema";

export const basicReactions: IReactionMaterial[] = [
  {
    name: "start",
    icon: startIcon,
    label: "$input",
    reactionType: ReactionType.Start,
    meta: {
      name: "input"
    },
    schema: startEndSchema,
  },
  {
    name: "end",
    icon: endIcon,
    label: "$output",
    reactionType: ReactionType.End,
    meta: {
      name: "output"
    },
    schema: startEndSchema,
  },
  conditionMaterial,
  {
    name: "loop",
    icon: loopIcon,
    label: "$loop",
    reactionType: ReactionType.SingleReaction,
    meta: {
      inPorts: [
        {
          id: createUuid(),
          name: "input",
          label: "",//"$input",
        },
      ],
      outPorts: [
        {
          id: createUuid(),
          name: "output",
          label: "",//"$output",
        },
      ],
    },
    schema: loopSchema,
  },
  {
    name: "merge",
    icon: mergeIcon,
    label: "$merge",
    reactionType: ReactionType.SingleReaction,
    meta: {
      inPorts: [
        {
          id: createUuid(),
          name: "input0",
          label: "input 0",
        },
        {
          id: createUuid(),
          name: "input1",
          label: "input 1",
        },
      ],
      outPorts: [
        {
          id: createUuid(),
          name: "output",
          label: "",//"$output",
        },
      ],
    },
    schema: mergeSchema,
  },

  {
    name: "switch",
    icon: switchIcon,
    label: "$switch",
    reactionType: ReactionType.SingleReaction,
    meta: {
      inPorts: [
        {
          id: createUuid(),
          name: "input",
          label: "",//"$input",
        },
      ],
      outPorts: [
        {
          id: createUuid(),
          name: "output0",
          label: "output 0",
        },
        {
          id: createUuid(),
          name: "output1",
          label: "output 1",
        },
      ],
    },
    schema: switchSchema
  },
  {
    name: "delay",
    icon: delayIcon,
    label: "$delay",
    reactionType: ReactionType.SingleReaction,
    meta: {
      inPorts: [
        {
          id: createUuid(),
          name: "startUp",
          label: "",//"$startUp",
        },
      ],
      outPorts: [
        {
          id: createUuid(),
          name: "output",
          label: "",//"$output",
        },
      ],
    }
  },
  randomMaterial,
  intervalMaterial,
  {
    name: "fixedValue",
    icon: fixedValueIcon,
    label: "$fixedValue",
    reactionType: ReactionType.SingleReaction,
    meta: {
      inPorts: [
        {
          id: createUuid(),
          name: "input",
          label: "",
        },
      ],
      outPorts: [
        {
          id: createUuid(),
          name: "output",
          label: "",//"$output",
        },
      ],
    }
  },
]