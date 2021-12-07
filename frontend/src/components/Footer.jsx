import React from "react";
const colorFooter = {
    background: '#55A1C9',
    borderRadious: '34px'
}

function Footer(){
    return (
        <div className="footer">
            <footer style={colorFooter} class="fixed-bottom">
                <div class="container">
                    <p class="m-0 text-center text-white">Copyright &copy; create by Bitwize Development</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;