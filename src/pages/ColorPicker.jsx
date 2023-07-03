import React from 'react'
import Header from '../Components/Header'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

export default function ColorPicker() {
  const change=(args)=>{
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex
  }
  return (
  <>
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category='App' title='ColorPicker'/>
    <div className="text-center">
      <div id='preview'/>
      <div className="flex justify-center items-center flex-wrap gap-20">
        <div>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
          <ColorPickerComponent id='inline-Pallete' mode='Palette' modeSwitcher={false}
          inline showButtons={false}
            change={change}
          />
          
        </div>
        <div>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
          <ColorPickerComponent id='inline-Pallete' mode='picker' modeSwitcher={false}
          inline showButtons={false}
          change={change}
          />
          
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
