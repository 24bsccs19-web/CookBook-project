import React from "react";
import milletUpmaImg from "../images/upma.jpg";
import grandmaImg from "../images/grandma.png";

function MilletUpma() {
  return (
    <div className="millet-upma-page">
      <h1>Foxtail Millet Upma</h1>
      <img src={milletUpmaImg} alt="Foxtail Millet Upma" className="dish-image" />

      <section>
        <h2>Quick Intro</h2>
        <p>
          Foxtail Millet Upma is a healthy and nutritious South Indian breakfast made with foxtail millet, tempered spices, and fresh vegetables. It's light, filling, and perfect for a wholesome start to the day.
        </p>
      </section>

      <section>
        <h2>Nutrition (Per Serving)</h2>
        <ul>
          <li>Calories: ~220 kcal</li>
          <li>Carbohydrates: 40g</li>
          <li>Protein: 6g</li>
          <li>Fat: 5g</li>
          <li>High in fiber and minerals</li>
        </ul>
      </section>

      <section className="grandma-story">
        <img src={grandmaImg} alt="Grandmother" />


        <div>
          <h2>Story Behind Upma</h2>
          <p>
            Traditionally made using rava (semolina), foxtail millet has become a healthy substitute in modern kitchens. Grandmothers in Tamil Nadu often added fresh vegetables and aromatic spices to make this dish both nutritious and flavorful.
          </p>
        </div>
      </section>
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup foxtail millet</li>
          <li>2 tbsp oil or ghee</li>
          <li>1 tsp mustard seeds</li>
          <li>1 tsp urad dal</li>
          <li>1-2 green chilies, chopped</li>
          <li>1 small onion, chopped</li>
          <li>1 carrot, diced</li>
          <li>8-10 curry leaves</li>
          <li>2 1/2 cups water</li>
          <li>Salt to taste</li>
          <li>Fresh coriander leaves for garnish</li>
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li>Dry roast foxtail millet for 2-3 minutes. Set aside.</li>
          <li>Heat oil, add mustard seeds, urad dal, curry leaves, and green chilies. Sauté onions and carrot.</li>
          <li>Add water and salt, bring to boil.</li>
          <li>Add roasted millet, reduce heat, cover, and cook until water is absorbed and millet is soft.</li>
          <li>Garnish with coriander leaves and serve hot.</li>
        </ol>
      </section>

    </div>
  );
}
export default MilletUpma;