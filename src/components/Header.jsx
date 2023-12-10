function Header() {
    return <nav className="blue-grey darken-2">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">App Store</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href='/about'>About</a></li>
                <li><a href='/contacts'>Contacts</a></li>
            </ul>
        </div>
    </nav>
}

export {Header}