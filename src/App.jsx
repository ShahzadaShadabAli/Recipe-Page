function App() {
  return (
    <main className="w-full bg-[#f3e6d8] flex justify-center items-center">
      <div className="w-[46.2rem] my-[7.5rem] rounded-[25px] p-10 bg-white">
        <img
          src="/assets/images/image-omelette.jpeg"
          className="rounded-xl"
          alt=""
        />
        <h1 className="font-young text-[2.5rem] text-stone-800 mt-7">
          Simple Omelette Recipe
        </h1>
        <p className="font-outfit text-stone-600 my-3">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <section className="bg-[#fff5fa] text-[#883153] rounded-xl p-6 pl-7 mt-8">
          <h1 className="font-outfit-bold text-xl mb-2">Preparation time</h1>
          <ul className="ml-[1.45rem] mt-[.9rem]">
            <li className="mt-[.55rem]">
              <p className="text-stone-600 ml-4 font-outfit text-md">
                <span className=" font-outfit-bold">Total: </span>Approximately
                10 minutes
              </p>
            </li>
            <li className="mt-[.55rem]">
              <p className="text-stone-600 ml-4 font-outfit text-md">
                <span className="text-stone-600  font-outfit-bold">
                  Preparation:{" "}
                </span>
                5 minutes
              </p>
            </li>
            <li className="mt-[.55rem]">
              <p className="text-stone-600 ml-4 font-outfit text-md">
                <span className="text-stone-600  font-outfit-bold">
                  Cooking:{" "}
                </span>
                5 minutes
              </p>
            </li>
          </ul>
        </section>
        <h1 className="text-[1.75rem] font-young text-[#8d412a] mt-7">
          Ingredients
        </h1>
        <ul className="ml-[1.45rem] mt-[.9rem] second-list">
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              2-3 large eggs
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              Salt, to taste
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              Pepper, to taste
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              1 tablespoon of butter or oil
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              Optional fillings: cheese, diced vegetables, cooked meat, herbs
            </p>
          </li>
        </ul>
        <hr className="mt-8" />
        <h1 className="text-[1.75rem] font-young text-[#8d412a] mt-6">
          Instructions
        </h1>
        <ol className="ml-[1.45rem] mt-[.9rem] second-list">
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for flufflier texture.
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </p>
          </li>
          <li className="mt-[.55rem]">
            <p className="text-stone-600 ml-4 font-outfit text-md">
              <span className=" font-outfit-bold">Enjoy: </span>Serve hot, with additional salt and pepper if needed.
            </p>
          </li>
          
        </ol>
        <hr className="mt-8" />
        <h1 className="text-[1.75rem] font-young text-[#8d412a] mt-6">
          Nutrition
        </h1>
        <p className="font-outfit text-stone-600 my-4">
          The table below shows nutritional values per serving without the additional fillings.
        </p>
        <div className="grid grid-cols-2 text-[1rem] p-2">
          <p className="font-outfit text-stone-600 pl-6">Calories</p>
          <p className="font-outfit-bold pl-2 text-[#8d412a]">277kcal</p>
        </div>
        <hr className="my-1" />
        <div className="grid grid-cols-2 text-[1rem] p-2">
          <p className="font-outfit text-stone-600 pl-6">Carbs</p>
          <p className="font-outfit-bold pl-2 text-[#8d412a]">0g</p>
        </div>
        <hr className="my-1" />
        <div className="grid grid-cols-2 text-[1rem] p-2">
          <p className="font-outfit text-stone-600 pl-6">Protein</p>
          <p className="font-outfit-bold pl-2 text-[#8d412a]">20g</p>
        </div>
        <hr className="my-1" />
        <div className="grid grid-cols-2 text-[1rem] p-2 pb-0">
          <p className="font-outfit text-stone-600 pl-6">Fat</p>
          <p className="font-outfit-bold pl-2 text-[#8d412a]">22g</p>
        </div>
      </div>
    </main>
  );
}

export default App;
