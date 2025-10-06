import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import Section1 from './Section1.jsx'
// import Counter from './Counter.jsx'

// import Greet from './Greet.jsx'

// import Add from './Add.jsx'

// import MyComponent from './wed24/MyComponent'

import Form from './mon29/Form.jsx'
import Form2 from './mon29/Form2.jsx'
import Form3 from './mon29/Form3.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Section1 />  */}
    {/* <Add a="3" b="4" c="5" /> */}

    {/* <Counter />

    <Greet /> */}

    <Form />
  </StrictMode>,
)
