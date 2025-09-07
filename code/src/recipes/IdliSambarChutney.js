import React from "react";
import idliSambarImg from "../images/idlisambar.jpg";
import grandmaImg from "../images/grandma.png";

function IdliSambarChutney() {
  return (
    <div className="idli-sambar-chutney-page">
      <h1>Idli–Sambar–Chutney Combo</h1>
      <img src={idliSambarImg} alt="Idli Sambar Chutney" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          The Idli–Sambar–Chutney combo is a South Indian breakfast staple loved across the world.  
          Soft, fluffy steamed rice cakes (idlis) paired with spicy, tangy lentil-based sambar and  
          creamy coconut chutney create a wholesome, balanced meal rich in flavor and nutrition.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~350 kcal</li>
          <li>Carbohydrates: 55g</li>
          <li>Protein: 10g</li>
          <li>Fat: 6g</li>
          <li>Rich in fiber, protein, and essential minerals</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Idli–Sambar–Chutney</h2>
          <p>
            This breakfast combination has been a beloved morning tradition in South Indian households  
            for centuries. Grandmothers would grind rice and urad dal batter overnight, ferment it naturally,  
            and steam fluffy idlis in the morning. The comforting aroma of freshly tempered sambar and  
            chutney would fill the home, marking a warm family breakfast ritual.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <h3>For Idli:</h3>
        <ul>
          <li>2 cups idli rice</li>
          <li>1 cup urad dal</li>
          <li>1/2 tsp fenugreek seeds</li>
          <li>Salt to taste</li>
        </ul>

        <h3>For Sambar:</h3>
        <ul>
          <li>1/2 cup toor dal</li>
          <li>1 onion, 1 tomato</li>
          <li>Tamarind extract (small lemon-sized)</li>
          <li>Sambar powder (2 tsp)</li>
          <li>Vegetables of choice</li>
        </ul>

        <h3>For Coconut Chutney:</h3>
        <ul>
          <li>1 cup grated coconut</li>
          <li>2 green chilies</li>
          <li>1 tbsp roasted chana dal</li>
          <li>Salt to taste</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Soak rice, urad dal, and fenugreek separately. Grind to a smooth batter, ferment overnight.</li>
          <li>Steam idlis in idli moulds for 10–12 minutes until fluffy.</li>
          <li>Cook toor dal until soft. Boil tamarind extract, vegetables, and sambar powder.  
          Mix with dal and temper with mustard, curry leaves, and red chilies.</li>
          <li>Grind coconut, chilies, and chana dal to make chutney. Temper with curry leaves and mustard seeds.</li>
          <li>Serve hot idlis with sambar and chutney.</li>
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

export default IdliSambarChutney;
