import React from "react";
const colorFooter = {
    background: '#f5f5f5',
    borderRadious: '34px'
}

const para = {
    color: '#000000'
  }

function Footer(){
    return (
        <div className="footer">
            <footer style={colorFooter} class="fixed-bottom">
                <div class="container">
                    <p style={para} class="m-0 text-center text-white">Copyright &copy; create by Bitwize Development</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;