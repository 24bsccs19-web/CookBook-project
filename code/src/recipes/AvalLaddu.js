import React from "react";
import dishImg from "../images/laddu.jpg";
import grandmaImg from "../images/grandma.png";

function AvalLaddu() {
  return (
    <div className="recipe-page">
      <h1>Aval Laddu</h1>
      <img src={dishImg} alt="Aval Laddu" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Aval Laddu is a traditional sweet made with flattened rice (poha),
          jaggery, grated coconut, and ghee. It’s an energy-rich treat commonly
          prepared during festivals and special occasions.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~180 kcal</li>
          <li>Carbohydrates: 35g</li>
          <li>Protein: 3g</li>
          <li>Fat: 4g</li>
          <li>Rich in iron and energy</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />


        <div>
          <h2>Story Behind Aval Laddu</h2>
          <p>
            Grandmothers in Tamil Nadu often made Aval Laddu using leftover
            flattened rice, jaggery, and coconut. This sweet symbolizes care and
            energy, often given to children or served during festivals like
            Krishna Jayanthi.
          </p>
        </div>
      </section>
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups flattened rice (poha)</li>
          <li>1 cup grated jaggery</li>
          <li>1/2 cup grated coconut</li>
          <li>2 tbsp ghee</li>
          <li>1/4 tsp cardamom powder</li>
          <li>1 tbsp chopped nuts (optional)</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Dry roast flattened rice until slightly crisp. Set aside.</li>
          <li>Melt jaggery with a little water to make a syrup.</li>
          <li>
            Add roasted flattened rice, coconut, cardamom, and ghee. Mix well.
          </li>
          <li>Shape the mixture into small round laddus while warm.</li>
          <li>Garnish with chopped nuts if desired and serve.</li>
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
export default AvalLaddu;