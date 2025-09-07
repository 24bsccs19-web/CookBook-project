import React from 'react';
import './App.css'; 

import bananaLeaf from "./images/banana-leaf.jpeg";
import overview from "./images/overview.jpg";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>🍲 Welcome to Traditional South Indian Recipes 🍲</h1>

      <p>
        This website is a celebration of our South Indian traditional foods.
        Our culture has always embraced the idea that food is not just about taste,
        but also about health, heritage, and togetherness. Through this cookbook,
        you will explore authentic recipes that have been passed down through generations.
      </p>

      <img
        src={bananaLeaf}
        alt="Traditional Food"
        className="food-image"
      />

      <p>

        In South Indian homes, food is more than just nourishment – it is a way of bringing families 
        together, celebrating festivals, and honoring traditions passed down through generations. 
        These recipes rely on fresh, seasonal, and locally sourced ingredients, making them both 
        sustainable and eco-friendly. Many of the dishes are also rooted in Ayurvedic wisdom  
        for example, Millets like Kudiraivali improve immunity, while Lemon Rice help digestion and 
        Chakra Pongal provides energy and strength. 
        Even the simplest meals like lemon rice remind us that health and taste can 
        come from the most humble ingredients.  Traditional foods are not only delicious but also filled with natural
        health benefits. 
      </p>

      <img
        src={overview}
        alt="South Indian Food"
        className="food-image"
      />

      <p>
        Traditional South Indian recipes are a beautiful blend of history, nature, and health.
        Passed down through generations, these dishes are carefully crafted using seasonal ingredients and
        time-tested cooking methods that enhance both taste and nutrition. From the aroma of freshly ground
        spices to the goodness of locally grown millets,every meal supports digestion, boosts immunity, and
        promotes overall well-being. More than just food, these recipes carry stories, values,and reflects
        a deep respect for nature and culture. This website is our way of preserving that heritage and
        sharing it with food lovers everywhere.
      </p>

      <Link to="/recipes" className="recipe-button">🍴 View Recipes</Link>

      
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          CookBook was born out of love for the rich culinary traditions of South India.
          Inspired by the stories of our grandmothers and the aromas of festive kitchens,
          this website is a tribute to recipes that have stood the test of time.
        </p>
        <p>
          Each dish we share has a story — of family gatherings, temple festivals, and
          everyday meals lovingly prepared with fresh ingredients from the garden.
          Our goal is to preserve these authentic flavors while making them easy for
          everyone to cook, whether you are a seasoned chef or a beginner.
        </p>
        <p>
          By exploring these recipes, you are not only tasting delicious food but also
          becoming part of a cultural journey that celebrates tradition, health, and togetherness.
        </p>
      </section>

      
      <section className="categories">
        <h2>Recipe Categories</h2>
        <div className="category-grid">
          <div className="card">Rice Dishes</div>
          <div className="card">Festival Foods</div>
          <div className="card">Breakfast Specials</div>
          <div className="card">Millet Recipes</div>
          <div className="card">Healthy Snacks</div>
          <div className="card">Desserts</div>
        </div>
      </section>

      
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get recipes, tips, and cultural stories straight to your inbox!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      
      <footer>
        <p>&copy; 2025 CookBook | All Rights Reserved</p>
        <p>💌 Mail the Chef</p>
        <p>Email: grandma@cookbook.com</p>
        <p>🍴 Meet the Chef</p>
        <p>Visit Us: 143 Traditional street, Chennai, India.</p>
      </footer>
    </div>
  );
}

export default HomePage;
