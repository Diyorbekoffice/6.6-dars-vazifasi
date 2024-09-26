import React from 'react'
import { brands, colors } from '../constants'

function MyFormData() {
  function handleSubmit(e) {
    e.preventDefault()
    const result = new FormData(e.target)
    console.log(result.get('brand'), result.get('name'), result.get('color'))
  }

  return (
    <div className="base-container flex justify-center">
      <form onSubmit={handleSubmit} className='max-w-96 max-h-full'>
        <div className="flex gap-5 flex-wrap">
          <input
            name='name'
            type="text"
            placeholder="Topshiriq nomini kiriting..."
            className="input input-bordered input-info w-full max-w-xs"
            required
          />
          <select name='brand' className="select select-bordered w-full max-w-xs" required>
            <option value="" disabled selected>Mashina brendini tanlang</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select name='color' className="select select-bordered w-full max-w-xs" required>
            <option value="" disabled selected>Mashina rangini tanlang</option>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
          <button className='btn btn-primary' type='submit'>Tasdiqlash</button>
        </div>
      </form>
    </div>
  )
}

export default MyFormData
