export default function NavBar() {
    return (
        <>
            <div id="navbar">
                <h1>Project M4</h1>
                <nav>
                    <ul>
                        <li>
                            <a href={`home`}>Home</a>
                        </li>
                        <li>
                            <a href={`about`}>About</a>
                        </li>
                        <li>
                            <a href={`signup`}>signup</a>
                        </li>
                        <li>
                            <a href={`login`}>login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}