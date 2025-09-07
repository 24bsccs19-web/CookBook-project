import React from "react";
import "../App.css"; // reuse global styles
import lemonrice from "../images/lemonrice.png";
import grandma from "../images/grandma.png";

function LemonRice() {
  return (
    <div className="recipe-page">
      <h1> Lemon Rice (Elumichai Sadam)</h1>
      <img src={lemonrice} alt="Lemon Rice" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Lemon Rice is a refreshing, tangy South Indian dish made with fresh
          lemon juice, curry leaves, and tempered spices. A staple in Tamil Nadu
          homes, it’s perfect for a quick lunch, picnics, or temple offerings.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~250 kcal</li>
          <li>Carbohydrates: 45g</li>
          <li>Protein: 5g</li>
          <li>Fat: 6g</li>
          <li>Rich in Vitamin C and antioxidants</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandma} alt="Grandmother" />


        <div>
          <h2>Story Behind Lemon Rice</h2>
          <p>
            Lemon Rice, or Elumichai Sadam, has been a centuries-old South
            Indian classic, often made as a temple prasadam or a quick lunchbox
            dish. Grandmothers often squeezed fresh lemons from their backyard
            trees, making this dish a symbol of love and simplicity in Tamil
            kitchens.
          </p>
        </div>
      </section>
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups cooked rice</li>
          <li>2 tbsp lemon juice</li>
          <li>1 tsp mustard seeds</li>
          <li>2 green chilies (slit)</li>
          <li>1/2 tsp turmeric powder</li>
          <li>8-10 curry leaves</li>
          <li>1 tbsp chana dal</li>
          <li>1 tbsp urad dal</li>
          <li>2 tbsp oil</li>
          <li>Salt to taste</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Cook rice and spread it on a plate to cool slightly.</li>
          <li>Heat oil, add mustard seeds, and let them splutter.</li>
          <li>
            Add curry leaves, chilies, chana dal, urad dal, and sauté until
            golden.
          </li>
          <li>Add turmeric and salt, mix well.</li>
          <li>Turn off heat, add lemon juice, and mix.</li>
          <li>
            Gently mix the tempering with rice. Serve with papad or pickle.
          </li>
        </ol>
      </section>

      <footer>
        <p>&copy; 2025 CookBook | All Rights Reserved</p>
        <p>💌 Mail the Chef</p>
        <p>Email: grandma@cookbook.com</p>
        <p>🍴 Meet the Chef</p>
        <p>Visit Us: 143 Traditional Street, Chennai, India</p>
      </footer>
    </div>
  );
}
export default LemonRice;

