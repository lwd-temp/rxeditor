import { INodeSchema } from "@rxdrag/schema";
import { inputBaseSchemas } from "../schemas";
import { createSchema, SchemaOptions } from "@rxdrag/react-antd-shell";

const mentionsNumberPros = [
  ...inputBaseSchemas,
  {
    componentName: "FormItem",
    props: {
      label: "$showCount",
    },
    children: [
      {
        componentName: "Switch",
        "x-field": {
          name: "showCount",
          params: {
            valuePropName: "checked",
            withBind: true,
          }
        },
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$maxLength",
    },
    children: [
      {
        componentName: "InputNumber",
        "x-field": {
          name: "maxLength",
          params: {
            withBind: true,
          }
        },
      }
    ]
  },
]

const options: SchemaOptions = {
  propsSchemas: mentionsNumberPros
}

export const inputNumberSchema: INodeSchema = createSchema(options)

