import React from "react";
import dishImg from "../images/vadai.jpg";
import grandmaImg from "../images/grandma.png";

function VazhaipooVadai() {
  return (
    <div className="recipe-page">
      <h1>Vazhaipoo Vadai</h1>
      <img src={dishImg} alt="Vazhaipoo Vadai" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Vazhaipoo Vadai is a unique South Indian snack made from banana
          flowers, lentils, and spices. Crispy, nutritious, and full of
          flavor, it’s often prepared during festivals and special occasions.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~200 kcal</li>
          <li>Carbohydrates: 30g</li>
          <li>Protein: 6g</li>
          <li>Fat: 5g</li>
          <li>Rich in fiber and antioxidants</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Vazhaipoo Vadai</h2>
          <p>
            Grandmothers skillfully used banana flowers from backyard trees to
            make these nutritious vadas. Each bite reflects care, tradition,
            and the flavors of Tamil Nadu cuisine.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup banana flower (vazhaipoo), finely chopped</li>
          <li>1/2 cup urad dal</li>
          <li>1/4 tsp turmeric powder</li>
          <li>1-2 green chilies, chopped</li>
          <li>Salt to taste</li>
          <li>Oil for deep frying</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Soak urad dal for 3-4 hours, grind to a coarse paste.</li>
          <li>Mix banana flower, dal paste, turmeric, green chilies, and salt.</li>
          <li>Shape into small patties and deep fry in hot oil until golden brown.</li>
          <li>Drain excess oil and serve hot with chutney or sambar.</li>
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

export default VazhaipooVadai;