import React from "react";
import dishImg from "../images/uttapam.jpg";
import grandmaImg from "../images/grandma.png";

function Uttapam() {
  return (
    <div className="recipe-page">
      <h1>Uttapam</h1>
      <img src={dishImg} alt="Uttapam" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Uttapam is a thick, soft South Indian pancake made from fermented rice and
          urad dal batter. It is typically topped with vegetables like onions, tomatoes,
          and chilies, making it savory and nutritious.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~200 kcal</li>
          <li>Carbohydrates: 40g</li>
          <li>Protein: 5g</li>
          <li>Fat: 3g</li>
          <li>Rich in fiber and fermented nutrients</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Uttapam</h2>
          <p>
            Uttapam was often made by grandmothers as a quick, wholesome breakfast
            for the family. The combination of a fermented batter and fresh vegetables
            showcases the blend of tradition and nutrition.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup rice</li>
          <li>1/4 cup urad dal</li>
          <li>Salt to taste</li>
          <li>1/2 cup chopped onions</li>
          <li>1/4 cup chopped tomatoes</li>
          <li>2 green chilies, chopped</li>
          <li>1 tsp oil for cooking</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Soak rice and urad dal separately for 4-6 hours. Grind and ferment overnight.</li>
          <li>Heat a non-stick pan and pour a ladle of batter, spreading slightly.</li>
          <li>Sprinkle onions, tomatoes, and green chilies on top.</li>
          <li>Drizzle a little oil around the edges and cook until the base is golden.</li>
          <li>Flip briefly and cook the top. Serve hot with chutney or sambar.</li>
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

export default Uttapam;

