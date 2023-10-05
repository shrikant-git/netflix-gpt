import { useState } from 'react';

const Demo = () => {
  const [text, setText] = useState('');
  return (
    <div className="m-4 p-4 w-96 h-96 border border-black">
      <div>
        <input
          className="border boorder-black w-72"
          type={'text'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Demo;
