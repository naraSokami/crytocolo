import { WhatBTHSTech, WhatAreWe, WhoBTHSTech, ContactUs } from "../src/containers";

import { Brand, Navbar, Timeline } from "../src/components/sandbox";

export default function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Brand />
      <WhatAreWe />
      <WhatBTHSTech />
      <WhatAreWe />
      
    </div>
  );
}
