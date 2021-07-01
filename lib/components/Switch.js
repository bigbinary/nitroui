import React from "react";
import classnames from "classnames";

const Switch = ({
  label = "",
  className = "",
  labelProps = "",
  ...otherProps
}) => {

  return (
    <div className={classnames(["nui-input__wrapper", className])}>
      <span
        role="checkbox"
        tabIndex={0}
        aria-checked={otherProps["checked"]}
        className={classnames("nui-switch__item", {
          "nui-switch__item--checked": otherProps["checked"],
          "nui-switch__item--disabled": otherProps["disabled"],
        })}
      >
        <input
          type="checkbox"
          className="hidden w-0 h-0 opacity-0"
          {...otherProps}
        />
        <span
          aria-hidden="true"
          className={classnames("nui-switch", {
            "nui-switch--checked": otherProps["checked"],
          })}
        >
        </span>
      </span>
      {label && (
        <h4 className="ml-3 text-sm font-medium leading-5 text-gray-800">
          {label}
        </h4>
      )}
    </div>
  );
};

export default Switch;
