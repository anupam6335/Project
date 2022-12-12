import React , { useState }from 'react'
import './registration.css';
import yoga from '../assets/yoga_pose.svg'
import register from '../assets/Mobile login.png';
import toast from 'react-hot-toast';

const Registration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [batch, setBatch] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
    const proceed = (e) => {
        e.preventDefault();
        if (!name ) {
            toast.error('Please Enter Your Name');
            return;
        }
        if (!age) {
            toast.error('Please Enter Your age between 18 to 65');
            return;
        }
        if (!phone ) {
            toast.error('Please Enter Your Phone number');
            return;
        }
        if (!batch ) {
            toast.error('Please choose your batch from dropdown menu');
            return;
        }
        
        const id = new Date().getUTCMilliseconds();
        setId(id);

        console.log(`name: ${name}, Age: ${age}, Phone Number:${phone}, Batch No: ${batch}`)
    };
    return (
        <>
            {/* <img src={yoga} alt="yoga" /> */}
            <div className="yoga__registration-container">
                <div className="yoga__registration-container_left">
                    <h1>Registration Form</h1>

                    <form className="yoga__register-form" id='yoga__register-form'>
                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name='name' id="name" autoComplete='off'
                                placeholder='Enter your name' title="required filled" 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">
                                <i className="zmdi zmdi-face"></i>
                            </label>
                            <input type="text" name='name' id="name" autoComplete='off'
                                placeholder='Enter your name' disabled value={id}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">
                                <i className="zmdi zmdi-cake"></i>
                            </label>
                            <input type="number" name='age' id="age" autoComplete='off'
                                placeholder='Age must be 18 t0 65' title="required filled" 
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                                min={18} max={65}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">
                                <i className="zmdi zmdi-calendar-note"></i>
                            </label>
                            <input type="text" name='address' id="address" autoComplete='off'
                                placeholder='Enter your address' 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">
                                <i className="zmdi zmdi-phone"></i>
                            </label>
                            <input type="number" name='phone' id="phone" autoComplete='off'
                                placeholder='Enter your phone' title="required filled" 
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputState">
                                <i className="zmdi zmdi-alarm-check"></i>
                            </label>
                            <select  id="inputState" className="form-control" title="required filled" 
                            onChange={(e) => setBatch(e.target.value)}
                            value={batch}
                            required>
                                <option defaultValue >Choose Batches</option>
                                <option>batch no1 time 6am - 7am</option>
                                <option>batch no2 time 7am - 8am</option>
                                <option>batch no3 time 8am - 9am</option>
                                <option>batch no4 time 6pm - 7pm</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">
                                <i className="zmdi zmdi-money"></i>
                            </label>
                            <input type="text" name='name' id="name" autoComplete='off'
                                placeholder='500' disabled
                            />
                        </div>
                    </form>
                    <button type="button" className="btn" onClick={proceed}>Pay Now</button>
                </div>
                <div className="yoga__registration-container_right">
                    {/* <img src={register} alt="register" /> */}
                    <img src={yoga} alt="yoga" draggable='false' />
                </div>
            </div>
        </>
    )
}

export default Registration