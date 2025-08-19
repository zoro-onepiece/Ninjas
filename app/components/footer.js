const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (

        <footer>       
            <p>© {currentYear} Ninja Core. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

