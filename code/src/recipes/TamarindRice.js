import React from "react";
import dishImg from "../images/tamarindrice.jpg";
import grandmaImg from "../images/grandma.png";

function TamarindRice() {
  return (
    <div className="recipe-page">
      <h1>Tamarind Rice (Puliyodarai)</h1>
      <img src={dishImg} alt="Tamarind Rice" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Tamarind Rice, also known as Puliyodarai, is a tangy and flavorful South
          Indian dish made with tamarind paste, rice, and a mix of spices. It's often
          prepared for festivals, lunch boxes, and special occasions.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~250 kcal</li>
          <li>Carbohydrates: 55g</li>
          <li>Protein: 5g</li>
          <li>Fat: 6g</li>
          <li>Contains fiber and antioxidants from tamarind</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Tamarind Rice</h2>
          <p>
            Tamarind Rice has been a staple in Tamil Nadu households for generations.
            Grandmothers used to prepare it as a simple, flavorful dish for festivals
            and temple offerings. Its tangy and spicy taste is a perfect example of
            traditional South Indian flavors.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups cooked rice (preferably cooled)</li>
          <li>2 tbsp tamarind paste</li>
          <li>2 tbsp sesame oil</li>
          <li>1 tsp mustard seeds</li>
          <li>1 tsp urad dal</li>
          <li>1 tsp chana dal</li>
          <li>2 dried red chilies</li>
          <li>10 curry leaves</li>
          <li>Salt to taste</li>
          <li>1/4 tsp turmeric powder</li>
          <li>2 tbsp roasted peanuts</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Heat sesame oil in a pan and add mustard seeds. Let them splutter.</li>
          <li>Add urad dal, chana dal, dried red chilies, and curry leaves. Fry until golden.</li>
          <li>Mix in turmeric powder and tamarind paste. Cook for 2-3 minutes until aromatic.</li>
          <li>Add cooked rice and salt. Mix gently to coat the rice evenly with tamarind mixture.</li>
          <li>Sprinkle roasted peanuts on top. Serve warm or at room temperature.</li>
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

export default TamarindRice;