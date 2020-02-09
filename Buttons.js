import React, {useState} from 'react';

export default function Button(props) {
  const [size] = useState(props.size);
  const [variety] = useState(props.variety);
   return (
   <button className={`btn-${variety} btn-${size}`}>{props.children}</button>
   );
};
