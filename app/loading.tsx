import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center fullHeightMinusNav">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-200 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-200 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-200 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}

export default Loading