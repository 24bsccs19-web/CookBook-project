import React from "react";
import dishImg from "../images/payasam.jpg";
import grandmaImg from "../images/grandma.png";

function RichCreamyPayasam() {
  return (
    <div className="recipe-page">
      <h1>Rich Creamy Payasam</h1>
      <img src={dishImg} alt="Rich Creamy Payasam" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Rich Creamy Payasam is a classic South Indian dessert made with milk,
          sugar, vermicelli or rice, and flavored with cardamom, cashews, and
          raisins. It's traditionally prepared during festivals and
          celebrations, offering a creamy, indulgent sweetness.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~350 kcal</li>
          <li>Carbohydrates: 60g</li>
          <li>Protein: 6g</li>
          <li>Fat: 12g</li>
          <li>Rich in calcium and energy</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Payasam</h2>
          <p>
            Payasam has been a cherished dessert in Tamil Nadu for generations.
            Grandmothers often prepared it in clay pots during festivals,
            simmering milk slowly to create the perfect creamy texture. It's a
            symbol of warmth, celebration, and love, bringing families together
            during special occasions.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup vermicelli or rice</li>
          <li>4 cups full cream milk</li>
          <li>3/4 cup sugar</li>
          <li>2 tbsp ghee</li>
          <li>10-12 cashews</li>
          <li>10-12 raisins</li>
          <li>4-5 green cardamom pods, crushed</li>
          <li>1/4 tsp nutmeg (optional)</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Heat ghee in a pan and fry cashews and raisins until golden. Set aside.</li>
          <li>In the same ghee, lightly roast vermicelli or rice for 2-3 minutes.</li>
          <li>Add milk and cook on medium heat, stirring occasionally, until the vermicelli or rice is soft.</li>
          <li>Add sugar, cardamom, and nutmeg. Cook for another 5-7 minutes until thick and creamy.</li>
          <li>Garnish with fried cashews and raisins. Serve warm or chilled.</li>
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
export default RichCreamyPayasam;
