import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer aboslute bottom-0 p-10 text-base-content border-t-2 border-gray-900">
            <aside></aside>
            <nav>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Website Policy</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/compare">Products</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="/rentals">Rentals</a></li>
                    <ul className="flex">
                        <li className="p-6 "><a href="https://www.instagram.com/rhyno.in?igsh=NTc4MTIwNjQ2YQ=="><FaInstagram size={28}/></a></li>
                        <li className="p-6"><a href="https://www.linkedin.com/company/rhyno-wheels/"><FaLinkedinIn size={28}/></a></li>
                    </ul>
                </ul>
            </nav>
        </footer>
    )
}