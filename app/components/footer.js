const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <footer>       
            <p>© {currentYear} Ninja List. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

