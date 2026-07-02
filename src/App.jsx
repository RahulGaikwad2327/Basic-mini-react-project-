import { useState } from 'react'

function App() {
  const [color , setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center 
        gap-5 shadow-lg bg-white px-7 py-2 rounded-3xl">

          <button className="w-14 h-8 rounded-full bg-red-500"
          onClick={() => setColor("red")}
          >Red</button>

          <button className="w-14 h-8 rounded-full bg-blue-500"
          onClick={() => setColor("blue")}
          >Blue</button>

          <button className="w-14 h-8 rounded-full bg-green-500"
          onClick={() => setColor("green")}
          >Green  </button>

          <button className="w-14 h-8 rounded-full bg-yellow-500"
          onClick={() => setColor("yellow")}
          >Yellow</button>

          <button className="w-14 h-8 rounded-full bg-purple-500"
          onClick={() => setColor("purple")}
          >Purple</button>

          <button className="w-14 h-8 rounded-full bg-pink-500"
          onClick={() => setColor("pink")}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
