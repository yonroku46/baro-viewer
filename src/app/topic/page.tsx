'use client';

import { useState } from 'react';

function TopicPage() {
  const [num, setNum] = useState<number>(0);

  return (
    <main>
      <div>TOPIC</div>
      <div>{num}</div>
      <button type="button" onClick={() => setNum(num + 1)}>
        puls
      </button>
    </main>
  );
}

export default TopicPage;
