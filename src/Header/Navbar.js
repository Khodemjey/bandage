
import Callbtn from "./Callbtn"

export default function Navbar() {

    const callbtnlist = [
        { name: 'phone', img: './header/navbar/phone.png', text: '(225) 555-0118' },
        { name: 'email', img: './header/navbar/email.png', text: 'michelle.rivera@example.com' }
    ]


    return (
        <div className="dark-nav-container">
            <div className="flex w-full justify-around ">
                <div className="container p-[0.62rem] flex">
                    <div className="flex items-center gap-x-[0.62rem]">
                        <Callbtn {...callbtnlist[0]} />
                        <Callbtn {...callbtnlist[1]} />
                    </div>
                </div>
                <div>
                    <span className="text">Follow Us  and get a chance to win 80% off</span>
                </div>
                <div>
                    <span className="text">Follow Us  and get a chance to win 80% off</span>
                </div>
            </div>
        </div>
    )
}
