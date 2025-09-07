import React from "react";
import dishImg from "../images/kuzhipaniyaram.jpg";
import grandmaImg from "../images/grandma.png";

function KuzhiPaniyaram() {
  return (
    <div className="recipe-page">
      <h1>Kuzhi Paniyaram</h1>
      <img src={dishImg} alt="Kuzhi Paniyaram" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Kuzhi Paniyaram are crispy-on-the-outside, soft-on-the-inside South
          Indian dumplings made from fermented rice and urad dal batter. Flavored
          with onions, green chilies, and curry leaves, they are perfect for
          breakfast or evening snacks.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~180 kcal</li>
          <li>Carbohydrates: 30g</li>
          <li>Protein: 5g</li>
          <li>Fat: 4g</li>
          <li>Contains fiber and protein from dal</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Kuzhi Paniyaram</h2>
          <p>
            Grandmothers often made Kuzhi Paniyaram in traditional cast-iron
            pans, ensuring each dumpling had a crispy edge and soft center.
            Adding onions, green chilies, and curry leaves made the flavor more
            vibrant. It is a cherished snack in Tamil Nadu homes and festivals.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup rice</li>
          <li>1/4 cup urad dal</li>
          <li>1 small onion, finely chopped</li>
          <li>1-2 green chilies, finely chopped</li>
          <li>8-10 curry leaves</li>
          <li>Salt to taste</li>
          <li>Oil for greasing pan</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Soak rice and urad dal for 4-5 hours, then grind to a smooth batter.</li>
          <li>Ferment the batter overnight for best results.</li>
          <li>Mix chopped onions, green chilies, and curry leaves into the batter.</li>
          <li>Heat a paniyaram pan, grease with oil, and pour batter into cavities.</li>
          <li>Cook until golden and crisp on both sides.</li>
          <li>Serve hot with coconut chutney or sambar.</li>
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

export default KuzhiPaniyaram;
