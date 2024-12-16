import React from 'react'


import './App.css'

function App(props) {
  

  return (
    <>
    <div>
      <h1>hello</h1>
    </div>
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-45 h-40 rounded mx-auto" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
       {props.no}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default App
