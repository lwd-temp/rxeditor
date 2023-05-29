import { IController, InputFunc, EventFuncs, VariableListener, PropsListener, Controllers, UnListener } from "../interfaces/controller";
import { IControllerMeta } from "../interfaces";
import { IActivity, LogicFlow } from "@rxdrag/minions-runtime";
import { ILogicFlowDefinition } from "@rxdrag/minions-schema";

export const INIT_EVENT_NAME = "init"
export const DESTORY_EVENT_NAME = "destory"

export class DefaultController<LogicFlowContext> implements IController {
  id: string;
  name?: string;
  inited?: boolean;
  initEvent?: InputFunc | undefined;
  destoryEvent?: InputFunc | undefined;
  events: EventFuncs = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private variables: any = {};
  private variableListeners: {
    [name: string]: VariableListener[]
  } = {}
  private propsListeners: PropsListener[] = []

  private activites: IActivity[] = []

  constructor(public meta: IControllerMeta, protected parentControllers: Controllers, protected context?: LogicFlowContext) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.id = meta.id!
    for (const eventMeta of meta.events || []) {
      const reaction = this.makeReaction(eventMeta, { ...parentControllers, [this.id]: this })
      reaction && this.activites.push(reaction)
      if (!reaction) {
        continue
      }
      const inputOne = reaction.jointers.inputs[0]
      if (!inputOne) {
        continue
      }
      if (eventMeta.name === INIT_EVENT_NAME) {
        this.initEvent = inputOne.push
      } else if (eventMeta.name === DESTORY_EVENT_NAME) {
        this.destoryEvent = inputOne.push
      } else if (eventMeta.name) {
        this.events[eventMeta.name] = inputOne.push
      }
    }
    for (const variable of meta.variables || []) {
      this.variables[variable.name] = variable.defaultValue
    }
  }

  getVariable(name: string) {
    return this.variables[name]
  }

  destory = () => {
    for (const reaction of this.activites) {
      reaction.destory()
    }
    this.activites = []
    this.events = {}
  }

  setVariable = (name: string, value: unknown): void => {
    this.variables[name] = value
    const listeners = this.variableListeners[name] || []
    for (const listener of listeners) {
      listener(value)
    }
  }

  subscribeToVariableChange = (name: string, listener: VariableListener): UnListener => {
    if (!this.variableListeners[name]) {
      this.variableListeners[name] = []
    }
    this.variableListeners[name].push(listener)
    return () => {
      this.variableListeners[name].splice(this.variableListeners[name].indexOf(listener), 1)
    }
  }

  setProp = (name: string, value: unknown): void => {
    for (const listener of this.propsListeners) {
      listener(name, value)
    }
  }

  subscribeToPropsChange = (listener: PropsListener): UnListener => {
    this.propsListeners.push(listener)
    return () => {
      this.propsListeners.splice(this.propsListeners.indexOf(listener), 1)
    }
  }

  private makeReaction = (logicFlowMeta: ILogicFlowDefinition, controllers: Controllers) => {
    const context = {
      ...this.context,
      variableController: this,
      propsController: this,
      controllers,
    }
    return new LogicFlow(logicFlowMeta, context)
  }
}