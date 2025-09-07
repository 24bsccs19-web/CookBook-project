import React from "react";
import dishImg from "../images/kozhukattai.jpg";
import grandmaImg from "../images/grandma.png";

function Kozhukattai() {
  return (
    <div className="recipe-page">
      <h1>Kozhukattai</h1>
      <img src={dishImg} alt="Kozhukattai" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Kozhukattai is a traditional South Indian steamed dumpling made with
          rice flour and filled with sweet coconut-jaggery mixture. Often
          prepared during festivals like Ganesh Chaturthi, it’s a soft, sweet
          delight.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~150 kcal</li>
          <li>Carbohydrates: 30g</li>
          <li>Protein: 2g</li>
          <li>Fat: 4g</li>
          <li>Contains fiber and minerals</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />
        <div>
          <h2>Story Behind Kozhukattai</h2>
          <p>
            Grandmothers used to make Kozhukattai as a devotional offering during
            festivals. Soft rice flour shells filled with sweet coconut-jaggery
            mix symbolize purity and tradition, keeping the heritage alive in
            every Tamil household.
          </p>
        </div>
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup rice flour</li>
          <li>1 cup grated coconut</li>
          <li>3/4 cup jaggery</li>
          <li>1/4 tsp cardamom powder</li>
          <li>Water as needed</li>
          <li>Ghee for greasing</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Prepare rice flour dough with warm water and a pinch of salt.</li>
          <li>
            Melt jaggery with a little water, add coconut and cardamom powder to
            make the filling.
          </li>
          <li>
            Shape small dumplings from dough, fill with coconut-jaggery mixture,
            and seal.
          </li>
          <li>Steam dumplings for 10-12 minutes until cooked.</li>
          <li>Serve warm, optionally with a drizzle of ghee.</li>
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

export default Kozhukattai;