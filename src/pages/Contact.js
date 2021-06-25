import { useState, useEffect } from "react";
import { getContactData } from "../libraries/api/contact";

export default function Contact() {
  const [response, setResponse] = useState();
  useEffect(() => {
    getContactData()
      .then(res => setResponse(res))
      .catch(err => err ? console.error(err) : console.log('!ERROR'))
  }, []);

  const [{ name }, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    alert('Thank you for the email, ' + name);
  }

  return (
    <div>
    <div id='contact'>
      <div className='container'>
        <div className='col-md-8'>
          <div className='row'>
            <div className='section-title'>
              <h2>Hubungi Kami</h2>
              <p>
                Isi form dibawah untuk mengirimkan pos-elektronik secara instan ke representatif kami.
              </p>
            </div>
            <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      placeholder='Nama'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Pos-el'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <textarea
                  name='message'
                  id='message'
                  className='form-control'
                  rows='4'
                  placeholder='Pesan'
                  required
                  onChange={handleChange}
                  style={{resize: 'none'}}
                ></textarea>
                <p className='help-block text-danger'></p>
              </div>
              <div id='success'></div>
              <button type='submit' className='btn btn-custom btn-lg'>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-3 col-md-offset-1 contact-info'>
        <div className='contact-item'>
            <h3>Narahubung</h3>
            <p>
              <span>
                <i className='fa fa-user'></i> Nama
              </span>
              {response ? response.data.name : 'Loading'}
            </p>
          </div>
          <div className='contact-item'>
            <p>
              <span>
                <i className='fa fa-phone'></i> Telepon
              </span>
              {response ? response.data.phoneNumber : 'Loading'}
            </p>
          </div>
          <div className='contact-item'>
            <p>
              <span>
                <i className='fa fa-building'></i> Alamat
              </span>{' '}
              {response ? response.data.address : 'Loading'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
