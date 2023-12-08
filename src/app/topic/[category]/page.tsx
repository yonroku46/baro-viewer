'use client';

import { useState } from 'react';

function TopicCategoryPage({ params }: { params: { category: string } }) {
  const [num, setNum] = useState<number>(0);

  return (
    <main>
      <div>
        TOPIC Category:{params.category}
      </div>
      <div>{num}</div>
      <button type="button" onClick={() => setNum(num + 1)}>
        puls
      </button>
    </main>
  );
}

export default TopicCategoryPage;
