// import React from 'react'
// import './child.css'

// export default function Child(props) {
//     return (
//         <div>
//             <div>
//                 {props.x.map((item) => (<div className='box' key={item}><br />


                   

//                     <div className='name'><h2>{item.inputvalue1}  {item.inputvalue2}</h2></div><br />

//                     <div className='reg'><h2>{item.inputvalue3}</h2></div><br />

//                     <div className='degree'>
//                         <img src="/images/gra.jpg" alt="Img" />
//                         <p>{item.inputvalue4}<b>-</b><b className='degree01'>{item.inputvalue5}</b>-<b></b>{item.inputvalue6}<b></b></p></div>

//                     <div className='mobile'><img src="/images/call.jpg" alt="Img" /><p>{item.inputvalue7}</p></div>

//                     <div className='email'><img src="/images/email.jpg" alt="Img" /><p>{item.inputvalue8}</p></div>

//                     <div className='blood'><img src="/images/blood.jpg" alt="Img" /><p>{item.inputvalue9}</p></div>

//                     <div className='add'><img src="/images/add.jpg" alt="Img" /><p>{item.inputvalue10}</p></div>

//                 </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
import React from 'react';
import './child.css';

export default function Child(props) {
    return (
        <div>
            <div>
                {props.x.map((item) => (
                    <div className='box' key={item.inputvalue3}><br />

                        {item.photoPreview && (
                            <div className='img1'>
                                <img
                                    id='pic1'
                                    src={item.photoPreview}
                                    alt="Passport"
                                    width="200"
                                    height="200"
                                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                                />
                            </div>
                        )}<br />

                        <div className='name'><h2>{item.inputvalue1} {item.inputvalue2}</h2></div><br />

                        <div className='reg'><h2>{item.inputvalue3}</h2></div><br />

                        <div className='degree'>
                            <img src="/images/gra.jpg" alt="Img" id='i1'/>
                            <p>
                                {item.inputvalue4}<b>-</b>
                                <b className='degree01'>{item.inputvalue5}</b>-
                                <b>{item.inputvalue6}</b>
                            </p>
                        </div>

                        <div className='mobile'>
                            <img src="/images/call.jpg" alt="Img" id='i1' />
                            <p>{item.inputvalue7}</p>
                        </div>

                        <div className='email'>
                            <img src="/images/email.jpg" alt="Img" id='i1'/>
                            <p>{item.inputvalue8}</p>
                        </div>

                        <div className='blood'>
                            <img src="/images/blood.jpg" alt="Img" id='i1'/>
                            <p>{item.inputvalue9}</p>
                        </div>

                        <div className='add'>
                            <img src="/images/add.jpg" alt="Img" id='i1' />
                            <p>{item.inputvalue10}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
