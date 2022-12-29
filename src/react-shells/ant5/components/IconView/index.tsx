import { BorderOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";
import { getIcon } from "react-shells/ant5/shared/icons/data";

import { IIcon } from "./model";
import { SvgStringIcon } from "./SvgStringIcon";

export const isEmpertyIcon = (icon?: IIcon) => {
  return !icon || (!icon.iconKey && !icon.svgString)
}

export const EmpertyIcon = (
  props: {
    style?: CSSProperties
  }
) => {
  const { style, ...other } = props;
  return <BorderOutlined style={{ ...style, color: "transparent", }} {...other} />
};


export interface IIconViewProps {
  icon?: IIcon;
  style?: CSSProperties,
  size?: number,
}

export const IconView = (props: IIconViewProps) => {
  const { icon, size, ...other } = props;
  if (isEmpertyIcon(icon)) {
    return <EmpertyIcon {...other} />;
  }

  if (icon?.iconKey) {
    const realIcon = getIcon(icon.iconKey);
    if (realIcon?.icon) {
      return <realIcon.icon {...other} />;
    }
  }

  if (icon?.svgString) {
    return <SvgStringIcon icon={icon.svgString} {...other} />;
  }

  return <EmpertyIcon {...other} />;
};