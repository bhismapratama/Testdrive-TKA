"use client"

// import { useState, useEffect } from 'react'
import { useState } from 'react'

export default function Contact() {
    const [fullname, setFullname] = useState("")
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const [allData, setAllData] = useState([]);

    // const handleGet = async () => {
    //     try {
    //         const res = await fetch('/api/contact');
    //         const data = await res.json();
    //         console.log(data);
    //         setAllData(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        // console.log("full name = ", fullname);
        // console.log("email = ", email);
        // console.log("Message = ", message);

        try {
            const res = await fetch(`/api/contact`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    fullname,
                }),
            });
            const { msg, success } = await res.json();
            setError(msg);
            setSuccess(success);
            setIsLoading(false)

            if (success) {
                setFullname("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     handleGet();
    // }, []);

    return (
        <section className='w-full h-full flex flex-col justify-center items-center pt-20'>
            <p>TEST DRIVE</p>
            <div className='flex flex-wrap h-full gap-2 mb-6'>
                {
                    error && error.map((e) => (
                        <div className={`${success ? 'text-black' : 'text-red'}`} key="">
                            {e}
                        </div>
                    ))
                }
            </div>
            <form onSubmit={handleSubmit}>
                <div id='name'>
                    <input
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        id='fullName'
                        placeholder='test input data'
                        type="text" required={true}
                        className='text-center border-2 mt-3'
                    />
                </div>

                <button type='submit' className='w-full text-center mt-5' onClick={handleSubmit}>
                    {isLoading ? 'sending...' : 'submit'}
                </button>
            </form>
            {/* <div className='mt-5'>
                <button onClick={handleGet}>Get All Data</button>
                {allData.map((data, index) => (
                    <div key={index}>
                        <h1>{data}</h1>
                    </div>
                ))}
            </div> */}
        </section>
    )
}


// "use client"

// import { useState } from 'react'

// export default function Contact() {
//     const [fullname, setFullname] = useState("")
//     // const [email, setEmail] = useState("")
//     // const [message, setMessage] = useState("")
//     const [error, setError] = useState([])
//     const [success, setSuccess] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true)

//         // console.log("full name = ", fullname);
//         // console.log("email = ", email);
//         // console.log("Message = ", message);

//         try {
//             const res = await fetch(`/api/contact`, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     fullname,
//                     // email,
//                     // message,
//                 }),
//             });
//             const { msg, success } = await res.json();
//             setError(msg);
//             setSuccess(success);
//             setIsLoading(false)

//             if (success) {
//                 setFullname("")
//                     // setEmail(""),
//                     // setMessage("")
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <section className='w-full h-full flex flex-col justify-center items-center pt-20'>
//             <p>TEST DRIVE</p>
//             <div className='flex flex-wrap h-full gap-2 mb-6'>
//                 {
//                     error && error.map((e) => (
//                         <div className={`${success ? 'text-black' : 'text-red'}`} key="">
//                             {e}
//                         </div>
//                     ))
//                 }
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div id='name'>
//                     <input
//                         onChange={(e) => setFullname(e.target.value)}
//                         value={fullname}
//                         id='fullName'
//                         placeholder='test input data'
//                         type="text" required={true}
//                         className='text-center border-2 mt-3'
//                     />
//                 </div>
//                 {/* <div id='email'>
//                     <input
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         id='fullEmail'
//                         placeholder="email"
//                         type="email" required={true}
//                         className='text-center border-2 mt-3'
//                     />
//                 </div>
//                 <div id='messages'>
//                     <input
//                         onChange={(e) => setMessage(e.target.value)}
//                         value={message}
//                         id='fullMessages'
//                         placeholder='pesan'
//                         type="text" required={true}
//                         className='text-center border-2 mt-3'
//                     />
//                 </div> */}

//                 <button type='submit' className='w-full text-center mt-5' onClick={handleSubmit}>
//                     {isLoading ? 'sending...' : 'submit'}
//                 </button>
//             </form>
//         </section>
//     )
// }
