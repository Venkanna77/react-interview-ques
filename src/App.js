import React, { useState } from 'react';
import './style.css';

const country_list = [
  'Argentina',
  'Australia',
  'Belgium',
  'Belize',
  'China',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'South Africa',
  'South Korea',
  'Swaziland',
  'Sweden',
  'Switzerland',
];

export default function App() {
  const [result, setResult] = useState([...country_list]);

  const searchList = (e) => {
    let a = e.target.value;
    let new_list = country_list.filter((i) => {
      if (a == '') return i;
      else return i.toLocaleLowerCase().includes(a.toLocaleLowerCase());
    });
    setResult(new_list);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" onChange={(e) => searchList(e)} />
      {result.map((i) => (
        <ul key={i}>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  );
}
