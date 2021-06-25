import { useState, useEffect } from "react";
import { getAboutData } from "../libraries/api/about";

export default function About() {
  const [response, setResponse] = useState();
  useEffect(() => {
    getAboutData()
      .then(res => setResponse(res))
      .catch(err => err ? console.error(err) : console.log('!ERROR'))
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?b=1&k=6&m=1256603011&s=170667a&w=0&h=_kcFBNuLI7CJyQXyDhJcq5i0Fcw9Zro7WaRKpLCgcxk=' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Tentang Kami</h2>
              <p>{response ? response.data.about : 'Loading'}</p>
              <h3>Kenapa pilih EasyLend?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {response
                      ? response.data.checkList.map((data, ic) => (
                          <li key={`${data}-${ic}`}>{data}</li>
                        ))
                      : 'Loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {response
                      ? response.data.secondCheckList.map((data, ic) => (
                          <li key={`${data}-${ic}`}> {data}</li>
                        ))
                      : 'Loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
