import Link from "next/link"

export default function Header(){
    return(
       //html ka tag aeyga zaroor k ye web page ka component bune
       <div className="headerContainer">
        <ul className="header-buttons">
            <li>
              <Link href={"/"}> Home</Link>
            </li>
            <li>
                <Link href={"/about-us"}>
             About Us</Link>
            </li>
            <li><Link href={"/contact-us"}>
            Contact Us</Link>
            </li>
             <li><Link href={"/Jobs"}>Jobs</Link></li>

        </ul>
       </div>
    )

}