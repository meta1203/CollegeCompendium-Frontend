import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

export default function LookupBox(props) {
  const {
    id,
    receiveChange,
    getOptions,
    label,
  } = props;
  const [listOpen, setListOpen] = useState(false);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  function load(input) {
    const newOptions = getOptions(input);
    // test for promise
    if (newOptions.then && (typeof newOptions.then) === "function")
      newOptions.then(o => setOptions(o));
    else
      setOptions(newOptions);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => load(value), []);

  return <div>
    <Form.Group>
      <Form.Label forHtml={`${id}-box`}>{label}</Form.Label>
      <Form.Control id={`${id}-box`} value={value}
        onFocus={() => setListOpen(true)}
        onChange={event => {
          setValue(event.target.value);
          load(event.target.value);
        }} />
      {listOpen ?
        <>
          <br />
          <select className='form-select' multiple onChange={event => {
            receiveChange(event.target.value);
            setValue(event.target.selectedOptions[0].text);
            setListOpen(false);
          }}>
            {options.map(line => <option key={line.value} value={line.value}>{line.text}</option>)}
          </select>
        </>
        :
        undefined}
    </Form.Group>
  </div>
}