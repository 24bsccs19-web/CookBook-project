import React from "react";
import dishImg from "../images/idiyappam.jpg";
import grandmaImg from "../images/grandma.png";

function Idiyappam() {
  return (
    <div className="recipe-page">
      <h1>Idiyappam</h1>
      <img src={dishImg} alt="Idiyappam" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Idiyappam, also known as string hoppers, is a soft, steamed South Indian
          breakfast dish made from rice flour pressed into thin noodles. It pairs
          perfectly with coconut milk, curries, or sweetened coconut.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~180 kcal</li>
          <li>Carbohydrates: 38g</li>
          <li>Protein: 3g</li>
          <li>Fat: 1g</li>
          <li>Gluten-free and light on the stomach</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Idiyappam</h2>
          <p>
            Grandmothers would make Idiyappam as a breakfast staple, especially for
            family gatherings. The delicate, lacy noodles symbolize skill and care in
            traditional cooking.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups rice flour</li>
          <li>1 1/2 cups hot water</li>
          <li>1/2 tsp salt</li>
          <li>1 tsp oil (optional, for kneading)</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Boil water with salt. Gradually add rice flour to form a soft dough.</li>
          <li>Grease an idiyappam press and fill it with dough.</li>
          <li>Press the dough into thin noodles over small idli plates or steaming plates.</li>
          <li>Steam for 8-10 minutes until cooked.</li>
          <li>Serve warm with coconut milk or curry.</li>
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

export default Idiyappam;
