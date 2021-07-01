import React from 'react'
import { Button } from "../../lib";
import Header from '../Header';

const Buttons = () => {
  return (
    <div className="w-full">
      <Header title="Buttons"/>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button size="large" label="Label"/>
              <Button size="large" label="Label"/>
              <Button size="large" label="Label" disabled/>
              <Button size="large" label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button size="large" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button size="large" label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button size="large" label="Label" icon="ri-check-line"/>
              <Button size="large" label="Label" icon="ri-check-line"/>
              <Button size="large" label="Label" disabled icon="ri-check-line"/>
              <Button size="large" label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button label="Label"/>
              <Button label="Label"/>
              <Button label="Label" disabled/>
              <Button label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button label="Label" icon="ri-check-line"/>
              <Button label="Label" icon="ri-check-line"/>
              <Button label="Label" disabled icon="ri-check-line"/>
              <Button label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button size="large" style="secondary" label="Label"/>
              <Button size="large" style="secondary" label="Label"/>
              <Button size="large" style="secondary" label="Label" disabled/>
              <Button size="large" style="secondary" label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button size="large" style="secondary" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="secondary" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="secondary" label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="secondary" label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button size="large" style="secondary" label="Label" icon="ri-check-line"/>
              <Button size="large" style="secondary" label="Label" icon="ri-check-line"/>
              <Button size="large" style="secondary" label="Label" disabled icon="ri-check-line"/>
              <Button size="large" style="secondary" label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button style="secondary" label="Label"/>
              <Button style="secondary" label="Label"/>
              <Button style="secondary" label="Label" disabled/>
              <Button style="secondary" label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button style="secondary" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button style="secondary" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button style="secondary" label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button style="secondary" label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button style="secondary" label="Label" icon="ri-check-line"/>
              <Button style="secondary" label="Label" icon="ri-check-line"/>
              <Button style="secondary" label="Label" disabled icon="ri-check-line"/>
              <Button style="secondary" label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button size="large" style="danger" label="Label"/>
              <Button size="large" style="danger" label="Label"/>
              <Button size="large" style="danger" label="Label" disabled/>
              <Button size="large" style="danger" label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button size="large" style="danger" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="danger" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="danger" label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button size="large" style="danger" label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button size="large" style="danger" label="Label" icon="ri-check-line"/>
              <Button size="large" style="danger" label="Label" icon="ri-check-line"/>
              <Button size="large" style="danger" label="Label" disabled icon="ri-check-line"/>
              <Button size="large" style="danger" label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <div className="space-x-8">
              <Button style="danger" label="Label"/>
              <Button style="danger" label="Label"/>
              <Button style="danger" label="Label" disabled/>
              <Button style="danger" label="Label" loading/>
            </div>
            <div className="space-x-8">
              <Button style="danger" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button style="danger" label="Label" icon="ri-check-line" iconPosition="right"/>
              <Button style="danger" label="Label" disabled icon="ri-check-line" iconPosition="right"/>
              <Button style="danger" label="Label" loading icon="ri-check-line" iconPosition="right"/>
            </div>
            <div className="space-x-8">
              <Button style="danger" label="Label" icon="ri-check-line"/>
              <Button style="danger" label="Label" icon="ri-check-line"/>
              <Button style="danger" label="Label" disabled icon="ri-check-line"/>
              <Button style="danger" label="Label" loading icon="ri-check-line"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons
