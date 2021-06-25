import { useState, useEffect } from "react";
import { getFeatures } from "../libraries/api/features";

import FeaturesAddition from "./additions/FeaturesAddition";

export default function Features() {
  const [response, setResponse] = useState();
  useEffect(() => {
    getFeatures()
      .then(res => setResponse(res))
      .catch(err => err ? console.error(err) : console.log('!ERROR'))
  }, []);

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1'>
          <h2 className='section-title-features'>Features</h2>
        </div>
        <div className='row'>
          {response
            ? response.data.map((data, ic) => (
                <div key={`${data.title}-${ic}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={data.icon} style={{marginTop: '60px'}}></i>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
        <FeaturesAddition />
      </div>
    </div>
  )
}
