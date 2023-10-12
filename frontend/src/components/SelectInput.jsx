
import { Label, Select } from 'flowbite-react';
import PropTypes from 'prop-types'; 

const SelectInput = ({category, setCategory}) => {
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
        name='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value={'Sport'}>
          Sport
        </option>
        <option value={'Science'}>
          Science
        </option>
        <option value={'Technology'}>
          Technology
        </option>
        <option value={'Politics'}>
          Politics
        </option>
      </Select>
    </div>
  )
}
SelectInput.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
}

export default SelectInput


