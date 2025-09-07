import React from "react";
import dishImg from "../images/muttonkolaurundai.jpg";
import grandmaImg from "../images/grandma.png";

function MuttonKolaUrundai() {
  return (
    <div className="recipe-page">
      <h1>Mutton Kola Urundai</h1>
      <img src={dishImg} alt="Mutton Kola Urundai" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Mutton Kola Urundai are spicy South Indian meatballs made with minced
          mutton, spices, and herbs. Typically fried or shallow-cooked, they are
          served as snacks or as a side dish with rice.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~250 kcal</li>
          <li>Protein: 20g</li>
          <li>Carbohydrates: 5g</li>
          <li>Fat: 15g</li>
          <li>Rich in iron and protein</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Mutton Kola Urundai</h2>
          <p>
            This dish is a traditional family recipe passed down from grandmothers.
            The flavorful meatballs are prepared during festive occasions and
            special gatherings, representing the rich culinary heritage of Tamil Nadu.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>500g minced mutton</li>
          <li>1 onion, finely chopped</li>
          <li>2 green chilies, chopped</li>
          <li>1 tsp ginger-garlic paste</li>
          <li>1/2 tsp turmeric powder</li>
          <li>1 tsp chili powder</li>
          <li>2 tbsp coriander leaves, chopped</li>
          <li>Salt to taste</li>
          <li>Oil for shallow frying</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Mix all ingredients (except oil) in a bowl and form small balls.</li>
          <li>Heat oil in a pan and shallow fry the balls until golden brown and cooked through.</li>
          <li>Drain excess oil on paper towels.</li>
          <li>Serve hot as a snack or with rice.</li>
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

export default MuttonKolaUrundai;
