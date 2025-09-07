import React from "react";
import dishImg from "../images/karupukavuniricekanji.jpg";
import grandmaImg from "../images/grandma.png";

function KarupuKavuniRiceKanji() {
  return (
    <div className="recipe-page">
      <h1>Karupu Kavuni Rice Kanji</h1>
      <img src={dishImg} alt="Karupu Kavuni Rice Kanji" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Karupu Kavuni Rice Kanji is a nutritious South Indian porridge made from
          black/purple rice. It is often prepared as a healthy breakfast or comfort
          food, rich in antioxidants, fiber, and natural flavor.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~180 kcal</li>
          <li>Carbohydrates: 35g</li>
          <li>Protein: 4g</li>
          <li>Fat: 1g</li>
          <li>Rich in fiber, iron, and antioxidants</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Karupu Kavuni Rice Kanji</h2>
          <p>
            This wholesome porridge has been traditionally prepared by grandmothers
            as a nourishing meal for the family. Karupu Kavuni rice, with its
            distinct purple color, symbolizes health and natural goodness in every
            household.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup Karupu Kavuni (black/purple) rice</li>
          <li>6 cups water</li>
          <li>1/4 tsp salt</li>
          <li>1 tbsp grated coconut (optional)</li>
          <li>1 tsp jaggery or honey (optional)</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Wash the Karupu Kavuni rice thoroughly.</li>
          <li>In a pot, add rice and water, bring to a boil, then simmer on low heat.</li>
          <li>Cook for 30-40 minutes until the rice becomes soft and porridge-like, stirring occasionally.</li>
          <li>Add salt, and optionally grated coconut or jaggery for taste.</li>
          <li>Serve warm, as a wholesome breakfast or comfort food.</li>
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

export default KarupuKavuniRiceKanji;
