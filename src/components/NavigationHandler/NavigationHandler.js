import React from 'react'

export default NavigationHandler() {
  return (
    <div>
       <BrowserRouter>
        <div className="App">
            <NavigationBar />
              <switch>
                <Route exact path = '/'     component={Home} />
                <Route       path = '/test' component={Test} />
                <Route       path = '/law'  component={Law}  />
              </switch>
        </div>
      </BrowserRouter>
    </div>
  )
}