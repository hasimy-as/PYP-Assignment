import { useState, useEffect } from "react";
import { getOriginators } from "../libraries/api/originators";

export default function Originators() {
  const [response, setResponse] = useState();
  useEffect(() => {
    getOriginators()
      .then(res => setResponse(res))
      .catch(err => err ? console.error(err) : console.log('!ERROR'))
  }, []);

  return (
    <div id='origins' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Pencetus EasyLend</h2>
          <p>
            Berikut adalah para pencetus/eksponen dari EasyLend.
          </p>
        </div>
        <div id='row'>
          {response
            ? response.data.map((data, ic) => (
                <div key={`${data.name}-${ic}`} className='col-md-3 col-sm-6 origins'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={data.img} alt='Photos' className='origins-img'/>
                    <div className='caption'>
                      <h4>{data.name}</h4>
                      <p>{data.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading'}
        </div>
      </div>
    </div>
  )
}
