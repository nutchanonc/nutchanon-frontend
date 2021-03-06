import { AiFillGithub, FiExternalLink } from "react-icons/all";
import HeaderDescription from "../../components/HeaderDescription";

export default function Contents() {
    return (
        <div>
            <div className="container" style={{ marginBottom: "120px" }}>
                <h4>Swap </h4>
                <HeaderDescription>Trade tokens in an instant</HeaderDescription>
                <hr />
                <a href="https://swappoolshere.web.app">
                    <FiExternalLink size="25px" className="me-3" color="#000" />
                </a>
                <a href="https://github.com/nutchanonc">
                    <AiFillGithub size="25px" color="#000" />
                </a>
                {/* <a href="https://swappoolshere.web.app">Visit {">"}</a> */}

                <div className="my-5">

                    <p>Swap is my Decentralized Exchange (DEX) clonned from <a href="https://pancakeswap.finance/">Pancakeswap</a>, running on Binance Smart Chain Testnet.</p>
                    <p>Swap allows users to swap their BNB with my own tokens</p>
                </div>
            </div>

            <div className="container" style={{ marginBottom: "120px" }}>
                <h4>Medprojects</h4>
                <HeaderDescription>Store medical records in blockchain</HeaderDescription>
                <hr />
                <a href="https://medprojects.nutchanon.co">
                    <FiExternalLink size="25px" className="me-3" color="#000" />
                </a>
                <a href="https://github.com/nutchanonc/medprojects">
                    <AiFillGithub size="25px" color="#000" />
                </a>
                {/* <a href="https://swappoolshere.web.app">Visit {">"}</a> */}

                <div className="my-5">
                    <p>
                        Medprojects allows hospitals or medical provides to store their patient's records on the blockchain which can be accessed at anytime. 
                        Hospitals can clone my smart contracts and deployed them by themself.
                    </p>
                </div>
            </div>


            <div className="container">

                <h4>Cryptoprices</h4>
                <HeaderDescription>Today's cryptocurrency prices</HeaderDescription>
                <hr />
                <a href="https://crypto.nutchanon.co">
                    <FiExternalLink size="25px" className="me-3" color="#000" />
                </a>
                <a href="https://github.com/nutchanonc">
                    <AiFillGithub size="25px" color="#000" />
                </a>
                <div className="my-5">
                    <p>Cryptoprices is a cryptocurrency prices website related from Bitkub, Thailand's Digital Asset Exchange. Cryptoprices uses Bitkub API to get a prices at the moment you enter the website. </p>
                </div>
            </div>

            <div className="container">

                <h4>Katrade</h4>
                <HeaderDescription>Trade your items</HeaderDescription>
                <hr />
                <a href="https://crypto.nutchanon.co">
                    <FiExternalLink size="25px" className="me-3" color="#000" />
                </a>
                <a href="https://github.com/nutchanonc">
                    <AiFillGithub size="25px" color="#000" />
                </a>
                <div className="my-5">
                    <p>Katrade is a trading platform that allows Kasetsart students to trade items in order to reduce waste and create a community that promotes environmental sustainability.</p>
                </div>
            </div>
        </div>
    )
}