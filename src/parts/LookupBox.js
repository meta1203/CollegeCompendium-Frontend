import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function LookupBox(props) {
  const {
    id,
    receiveChange,
    getOptions,
    label,
  } = props;
  const [ listOpen, setListOpen ] = useState(true);
  const [ value, setValue ] = useState("");

  return <div>
    <Form.Group>
      <Form.Label for={`${id}-box`}>{label}</Form.Label>
      <Form.Control id={`${id}-box`} value={value} 
      onFocus={event => setListOpen(true)}
      onChange={event => setValue(event.target.value)} />
      {listOpen ?
        <>
          <br />
          <select className='form-select' multiple onChange={event => {
            receiveChange(event.target.value);
            setValue(event.target.selectedOptions[0].text);
            setListOpen(false);
          }}>
            {getOptions(value).map(line => {
              console.log("got line " + JSON.stringify(line));
              return <option key={line.value} value={line.value}>{line.text}</option>
            })}
          </select>
        </>
        :
        undefined}
    </Form.Group>
  </div>
}