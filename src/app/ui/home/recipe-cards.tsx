"use client";

import Image from "next/image";
import React from "react";
import { useAnimate, motion } from "framer-motion";

const recipes = [
  {
    name: "Creamy White Chili",
    ingredients: [
      "1 pound boneless skinless chicken breasts, cut into 1/2-inch cubes",
      "1 medium onion, chopped",
      "1-1/2 teaspoons garlic powder",
      "1 tablespoon canola oil",
      "2 cans (15-1/2 ounces each) great northern beans, rinsed and drained",
      "1 can (14-1/2 ounces) chicken broth",
      "2 cans (4 ounces each) chopped green chiles",
      "1 teaspoon salt",
      "1 teaspoon ground cumin",
      "1 teaspoon dried oregano",
      "1/2 teaspoon pepper",
      "1/4 teaspoon cayenne pepper",
      "1 cup sour cream",
      "1/2 cup heavy whipping cream",
      "Optional: Tortilla chips, shredded cheddar cheese, and sliced seeded jalapeno pepper",
    ],
    instructions: [
      "In a large saucepan, saute chicken, onion and garlic powder in oil until chicken is no longer pink.",
      "Add the beans, broth, chiles and seasonings. Bring to a boil.",
      "Reduce heat; simmer, uncovered, for 30 minutes.",
      "Remove from the heat; stir in sour cream and cream.",
      "Serve with tortilla chips, cheese and jalapeno if desired.",
    ],
    likes: 1900,
    time: 30,
    image: "/creamy-chili.jpg",
  },
  {
    name: "Spicy Vegetarian Black Bean Soup",
    ingredients: [
      "2 tablespoons olive oil",
      "1 large onion, chopped",
      "1 red bell pepper, chopped",
      "3 garlic cloves, minced",
      "2 teaspoons ground cumin",
      "1 teaspoon chili powder",
      "1/4 teaspoon cayenne pepper",
      "3 cans (15 ounces each) black beans, rinsed and drained",
      "4 cups vegetable broth",
      "1 can (14.5 ounces) diced tomatoes",
      "Salt and pepper to taste",
      "1/2 cup chopped fresh cilantro",
      "Juice of 1 lime",
      "Optional: Sour cream, avocado slices, and shredded cheese for garnish",
    ],
    instructions: [
      "In a large pot, heat the olive oil over medium heat. Add the onion and bell pepper, and cook until tender.",
      "Stir in the garlic, cumin, chili powder, and cayenne pepper; cook for 1 minute.",
      "Add the black beans, vegetable broth, and diced tomatoes. Bring to a boil.",
      "Reduce heat to low, cover, and simmer for 30 minutes.",
      "Use an immersion blender to puree the soup until smooth (or leave it chunky if preferred).",
      "Season with salt and pepper. Stir in cilantro and lime juice.",
      "Serve hot, garnished with sour cream, avocado slices, and shredded cheese if desired.",
    ],
    likes: 1250,
    time: 45,
    image: "/Spicy-Black-Bean-Soup.png",
  },
  {
    name: "Classic Beef Stew",
    ingredients: [
      "2 pounds beef stew meat, cut into 1-inch pieces",
      "1/4 cup all-purpose flour",
      "2 tablespoons olive oil",
      "4 cups beef broth",
      "1 teaspoon dried thyme",
      "1/2 teaspoon dried rosemary",
      "1 bay leaf",
      "2 medium potatoes, peeled and cubed",
      "2 large carrots, sliced",
      "1 onion, chopped",
      "3 celery stalks, sliced",
      "1 cup frozen peas",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Toss the beef with flour to coat evenly.",
      "In a large pot, heat olive oil over medium-high heat. Add beef and cook until browned on all sides.",
      "Add beef broth, thyme, rosemary, and bay leaf.",
      "Add potatoes, carrots, onion, and celery. Cover and cook for another 30 minutes.",
      "Stir in frozen peas and cook for an additional 10 minutes. Season with salt and pepper.",
      "Remove the bay leaf before serving.",
    ],
    likes: 1500,
    time: 120,
    image: "/beef-stew.jpg",
  },
  {
    name: "Creamy Mushroom Risotto",
    ingredients: [
      "1 tablespoon olive oil",
      "2 tablespoons butter",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 pound mushrooms, sliced",
      "1 cup Arborio rice",
      "1/2 cup dry white wine",
      "4 cups warm chicken broth",
      "1/2 cup grated Parmesan cheese",
      "Salt and pepper to taste",
      "2 tablespoons chopped fresh parsley",
    ],
    instructions: [
      "In a large pan, heat olive oil and 1 tablespoon of butter over medium heat.",
      "Add the mushrooms and cook until they are soft and browned.",
      "Stir in the rice and cook for 2 minutes until it's slightly toasted.",
      "Pour in the wine and stir until it has been absorbed.",
      "Add the chicken broth, 1/2 cup at a time, stirring frequently. Wait until the broth is almost completely absorbed before adding the next 1/2 cup.",
      "Once the rice is creamy and al dente, remove from heat. Stir in the Parmesan cheese, remaining butter, salt, and pepper.",
      "Garnish with fresh parsley before serving.",
    ],
    likes: 1750,
    time: 45,
    image: "/mushroom-ris.jpg",
  },
];

export const RecipeCards = () => {
  const [refCardOne, animate] = useAnimate();
  const [refCardTwo] = useAnimate();
  const [refCardThree] = useAnimate();
  const [refCardFour] = useAnimate();

  React.useEffect(() => {
    animate(
      refCardOne.current,
      {
        opacity: 1,
        x: 0,
      },
      { duration: 0.3 }
    );
    animate(
      refCardTwo.current,
      {
        opacity: 1,
        x: 0,
      },
      { duration: 0.3, delay: 0.3 }
    );
    animate(
      refCardThree.current,
      {
        opacity: 1,
        x: 0,
      },
      { duration: 0.3, delay: 0.6 }
    );
    animate(
      refCardFour.current,
      {
        opacity: 1,
        x: 0,
      },
      { duration: 0.3, delay: 0.9 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center">
      {recipes.map((recipe, index) => {
        // Determine alignment based on index
        const alignmentClass =
          index % 4 === 1 || index % 4 === 3 ? "self-end" : "self-start";
        return (
          <motion.div
            ref={
              index === 0
                ? refCardOne
                : index === 1
                ? refCardTwo
                : index === 2
                ? refCardThree
                : refCardFour
            }
            initial={{
              opacity: 0,
              x: index === 0 ? -30 : index === 1 ? 30 : index === 2 ? -30 : 30,
            }}
            key={recipe.name}
            className={`${alignmentClass} border-solid border-1 border-sky-500 w-[700px] bg-gradient-to-r from-[#09203f] to-[#537895] rounded-lg mt-4 overflow-hidden text-white text-left pb-2`}
          >
            <div className={`relative w-full h-[180px] rounded-lg`}>
              <Image
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
                loading="lazy"
                fill
              />
            </div>
            <div className="mt-4 px-4">
              <h3 className="text-xl font-bold">{recipe.name}</h3>
              {recipe.instructions.slice(0, 3).map((instruction, index) => (
                <p key={index} className="text-sm text-gray-300">
                  {instruction}
                </p>
              ))}
              <p className="text-sm text-gray-300">...</p>
              <div className="flex justify-between">
                <div className="flex items-center mt-2">
                  <Image
                    src="/heart.png"
                    alt="heart"
                    className="w-4 h-4 mr-1"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-[#f14e81] font-bold">
                    {recipe.likes} likes
                  </span>
                </div>
                <div className="flex items-center mt-2 color-white">
                  <Image
                    src="/clock.png"
                    alt="clock"
                    className="w-4 h-4 mr-1"
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                  <span className="text-sm">{recipe.time} mins</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
