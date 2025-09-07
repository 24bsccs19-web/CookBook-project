import React from "react";
import "./App.css";

import lemonrice from "./images/lemonrice.png";
import pongal from "./images/sweetpongal.jpg";
import idlisambar from "./images/idlisambar.jpg";
import milletupma from "./images/upma.jpg";
import avalladdu from "./images/laddu.jpg";
import payasam from "./images/payasam.jpg";
import kuzhipaniyaram from "./images/kuzhipaniyaram.jpg";
import vazhaipoovadai from "./images/vadai.jpg";
import kozhukattai from "./images/kozhukattai.jpg";
import ragikali from "./images/ragikali.jpg";
import tamarindrice from "./images/tamarindrice.jpg";
import idiyappam from "./images/idiyappam.jpg";
import muttonkolaurundai from "./images/muttonkolaurundai.jpg";
import uttapam from "./images/uttapam.jpg";
import karupukavuniricekanji from "./images/karupukavuniricekanji.jpg";
import { Link} from "react-router-dom";

function RecipesPage() {
    return(
        <div>
            <h1>🍴 Our Recipes</h1>
            <div className="recipe-grid">
                <div className="recipe-card">
                    <img src={lemonrice}
                    alt="Lemon Rice" />
                    <h3>Lemon Rice</h3>
                    <Link to="/lemonrice" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={pongal} alt="Chakra Pongal" />
                    <h3>Chakra Pongal</h3>
                    <Link to="/chakrapongal" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={idlisambar} alt="Idli, Sambar, Chutney" />
                    <h3>Idli, Sambar & Chutney</h3>
                    <Link to="/idlisambarchutney" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={milletupma} alt="Foxtail Millet Upma" />
                    <h3>Foxtail Millet Upma</h3>
                    <Link to="/milletupma" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={avalladdu} alt="Aval Laddu" />
                    <h3>Aval Laddu</h3>
                    <Link to="/avalladdu" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={payasam} alt="Payasam" />
                    <h3>Rich Creamy Payasam</h3>
                    <Link to="/richcreamypayasam" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={kuzhipaniyaram} alt="Kuzhi Paniyaram" />
                    <h3>Kuzhi Paniyaram</h3>
                    <Link to="/kuzhipaniyaram" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={vazhaipoovadai} alt="Vazhaipoo Vadai" />
                    <h3> vazhaipoo Vadai</h3>
                    <Link to="/vazhaipoovadai" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={kozhukattai} alt="Kozhukattai" />
                    <h3>Kozhukattai</h3>
                    <Link to="/kozhukattai" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={ragikali} alt="Ragi Kali with Chicken Curry" />
                    <h3>Ragi Kali with Chicken Curry</h3>
                    <Link to="/ragikali" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={tamarindrice} alt="Tamarind Rice" />
                    <h3>Tamarind Rice</h3>
                    <Link to="/tamarindrice" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={idiyappam} alt="Idiyappam" />
                    <h3>Idiyappam</h3>
                    <Link to="/idiyappam" className="view-btn">View Recipe</Link>
                </div>
                
                <div className="recipe-card">
                    <img src={muttonkolaurundai} alt="Mutton Kola Urundai" />
                    <h3>Mutton Kola Urundai</h3>
                    <Link to="/muttonkolaurundai" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={uttapam} alt="Uttapam" />
                    <h3>Uttapam</h3>
                    <Link to="/uttapam" className="view-btn">View Recipe</Link>
                </div>

                <div className="recipe-card">
                    <img src={karupukavuniricekanji} alt="Karupu Kavuni Rice Kanji" />
                    <h3>Karupu Kavuni Rice Kanji</h3>
                    <Link to="/karupukavuniricekanji" className="view-btn">View Recipe</Link>
                </div>


            </div>
        </div>
    );

}

export default RecipesPage;
