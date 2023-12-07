
import Callbtn from "./Callbtn"

export default function Navbar() {

    const callbtnlist = [
        { name: 'phone', img: './header/navbar/phone.png', text: '(225) 555-0118' },
        { name: 'email', img: './header/navbar/email.png', text: 'michelle.rivera@example.com' }
    ]


    return (
        <div className="dark-nav-container">
            <div className="flex w-full justify-between items-center px-[1.5rem]">
                <div className="p-[0.62rem] flex">
                    <div className="flex items-center gap-x-[0.62rem] max-w-max">
                        <Callbtn {...callbtnlist[0]} />
                        <Callbtn {...callbtnlist[1]} />
                    </div>
                </div>
                <div>
                    <p className="text">Follow Us  and get a chance to win 80% off</p>
                </div>
                <div className="flex items-center gap-x-[0.94rem]">
                    <p className="text">Follow Us :</p>
                    <div className="flex gap-x-[0.97rem]">
                        <a href="#">
                            <img src="./header/navbar/social/instagram.svg" alt="instagram-logo" />
                        </a>
                        <a href="#">
                            <img src="./header/navbar/social/youtube.svg" alt="instagram-logo" />
                        </a>
                        <a href="#">
                            <img src="./header/navbar/social/facebook.svg" alt="facebook-logo" />
                        </a>
                        <a href="#">
                            <img src="./header/navbar/social/twitter.svg" alt="twitter-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
