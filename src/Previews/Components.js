import { show } from "@blueprintjs/core/lib/esm/components/context-menu/contextMenu";
import React, { useState } from "react";
import { Button, Tab, Radio, Checkbox, Switch, Modal } from "../../lib";
import Header from "../Header";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <div className="w-full">
      <Header title="Buttons" />
      <Modal>
        <Modal.Title>Confirm deletion</Modal.Title>This is amazing
      </Modal>
      <div className="p-6 space-y-6">
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <Tab className="grid grid-cols-2">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-3">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-4">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
            <Tab.Item>Label 4</Tab.Item>
          </Tab>
          <Tab className="grid grid-cols-5">
            <Tab.Item active>Label 1</Tab.Item>
            <Tab.Item>Label 2</Tab.Item>
            <Tab.Item>Label 3</Tab.Item>
            <Tab.Item>Label 4</Tab.Item>
            <Tab.Item>Label 5</Tab.Item>
          </Tab>
        </div>
        <div className="w-1/2 p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item />
                <Radio.Item disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox />
              <Checkbox disabled />
            </div>
            <div className="flex space-x-6">
              <Switch />
              <Switch disabled />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item checked />
                <Radio.Item checked disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox checked />
              <Checkbox checked disabled />
            </div>
            <div className="flex space-x-6">
              <Switch checked />
              <Switch checked disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
