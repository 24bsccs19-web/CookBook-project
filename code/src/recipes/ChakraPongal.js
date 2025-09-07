import React from "react";
import chakrapongalImg from "../images/sweetpongal.jpg";
import grandmaImg from "../images/grandma.png";

function ChakraPongal() {
  return (
    <div className="chakra-pongal-page">
      <h1>Chakra Pongal (Sweet Pongal)</h1>
      <img src={chakrapongalImg} alt="Chakra Pongal" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Chakra Pongal, also known as Sweet Pongal, is a rich South Indian dish made with rice, moong dal, jaggery, and ghee. Traditionally prepared during harvest festivals, it is a symbol of prosperity and joy in Tamil Nadu households.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~320 kcal</li>
          <li>Carbohydrates: 55g</li>
          <li>Protein: 6g</li>
          <li>Fat: 8g</li>
          <li>Rich in iron and antioxidants from jaggery</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />


        <div>
          <h2>Story Behind Chakra Pongal</h2>
          <p>
            This dish has been a festive staple for centuries, especially during Pongal celebrations in Tamil Nadu. Traditionally, families cook this dish outdoors in a new clay pot, allowing the mixture to boil over as a sign of abundance and good fortune. The sweet aroma of jaggery and cardamom brings back memories of childhood celebrations.
          </p>
        </div>
      </section>
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup raw rice</li>
          <li>1/4 cup moong dal</li>
          <li>1 cup powdered jaggery</li>
          <li>3 tbsp ghee</li>
          <li>10-12 cashews</li>
          <li>1 tbsp raisins</li>
          <li>1/4 tsp cardamom powder</li>
          <li>2 1/2 cups water</li>
          <li>1/2 cup milk (optional)</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Dry roast the moong dal until fragrant, then rinse with rice.</li>
          <li>Pressure cook rice and dal with water (and milk if desired) until soft.</li>
          <li>Melt jaggery in water, strain impurities, and boil until slightly thick.</li>
          <li>Mix cooked rice-dal mixture with jaggery syrup and stir well.</li>
          <li>Heat ghee, fry cashews and raisins, and add to the Pongal.</li>
          <li>Sprinkle cardamom powder and mix well before serving.</li>
        </ol>
      </section>

      <footer>
        <p>&copy; 2025 CookBook | All Rights Reserved</p>
        <p>💌Mail the Chef</p>
        <p>Email: grandma@cookbook.com</p>
        <p>🍴Meet the Chef</p>
        <p>Visit Us: 143 Traditional Street, Chennai, India</p>
      </footer>
    </div>
  );
}
export default ChakraPongal;

