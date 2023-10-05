
import { Label, Select } from 'flowbite-react';

const SelectInput = () => {
  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Category"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option>
          Sport
        </option>
        <option>
          Science
        </option>
        <option>
          Technology
        </option>
        <option>
          Politics
        </option>
      </Select>
    </div>
  )
}
export default SelectInput


