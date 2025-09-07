import React from "react";
import ragiImg from "../images/ragikali.jpg";
import grandmaImg from "../images/grandma.png";

function RagiKali() {
  return (
    <div className="recipe-page">
      <h1>Ragi Kali with Chicken Curry</h1>
      <img src={ragiImg} alt="Ragi Kali with Chicken Curry" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Ragi Kali is a nutritious porridge made from finger millet flour, often paired with spicy chicken curry. This combination is a wholesome South Indian meal packed with protein, fiber, and flavor.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~400 kcal</li>
          <li>Carbohydrates: 50g</li>
          <li>Protein: 20g</li>
          <li>Fat: 12g</li>
          <li>High in fiber, calcium, and protein</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Ragi Kali</h2>
          <p>
            Grandmothers often prepared Ragi Kali as a healthy breakfast or meal. When paired with chicken curry, it provided a perfect balance of nutrition and taste for the family. This dish reflects the ingenuity of traditional Tamil cuisine.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <h3>Ragi Kali</h3>
        <ul>
          <li>1 cup ragi (finger millet) flour</li>
          <li>4 cups water</li>
          <li>Salt to taste</li>
          <li>1 cup cooked chicken curry (spicy)</li>
          <li>Optional: ghee for drizzling</li>
        </ul>
      </section>

      <section>
        <h3>Chicken Curry (Side Dish)</h3>
        <p>
          This Spicy Chicken Curry is a flavorful South Indian classic made with tender chicken, aromatic spices, and coconut milk. Perfect to pair with Ragi Kali.
        </p>
      </section>

      <section>
        <ul>
          <li>500g chicken, cut into pieces</li>
          <li>2 onions, finely chopped</li>
          <li>2 tomatoes, chopped</li>
          <li>1/2 cup coconut milk</li>
          <li>2 tsp ginger-garlic paste</li>
          <li>1 tsp turmeric powder</li>
          <li>2 tsp red chili powder</li>
          <li>1 tsp coriander powder</li>
          <li>1 tsp garam masala</li>
          <li>8-10 curry leaves</li>
          <li>2 tbsp oil</li>
          <li>Salt to taste</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <h3>For Ragi Kali:</h3>
        <ol>
          <li>Mix ragi flour with water to form a smooth mixture.</li>
          <li>Cook over medium heat, stirring continuously until it thickens into a porridge.</li>
          <li>Add salt and cook for another 2-3 minutes.</li>
          <li>Serve hot with chicken curry on the side.</li>
          <li>Optional: drizzle a little ghee for extra flavor.</li>
        </ol>

        <h3>For Chicken Curry:</h3>
        <ol>
          <li>Heat oil in a pan, sauté onions until golden brown.</li>
          <li>Add ginger-garlic paste, curry leaves, and sauté for 2 minutes.</li>
          <li>Add tomatoes and cook until soft.</li>
          <li>Add turmeric, chili powder, coriander powder, and salt. Mix well.</li>
          <li>Add chicken pieces, cover, and cook until chicken is tender.</li>
          <li>Pour coconut milk, simmer for 5-7 minutes. Add garam masala and stir.</li>
          <li>Serve hot with Ragi Kali on the side.</li>
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

export default RagiKali;