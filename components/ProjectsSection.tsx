import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Trader Joes",
    description:
      "Developed a full-stack web application for Trader Joe’s using the MERN stack",
    image: "/Traderjoes.png",
    github: "https://github.com/AditiChikkali/Ecommerce_Website",
    link: "https://ecommerce-jg5e.onrender.com",
  },
  {
    name: "A Byte of yummy",
    description: "A food application using API that helps you to get instructions for every recipe you want and the list of ingredients as well",
    image: "/food.png",
    github: "https://github.com/Rutuja1805/FoodRecipeApp",
    link: "https://food-recipe-app-gold.vercel.app/",
  },
  {
    name: "CocktailQuest",
    description: "CocktailQuest is a dynamic web app that empowers users to explore a vast array of cocktails by offering a robust search feature and detailed information including categories, ingredients, and preparation instructions.",
    image: "/cocktail.png",
    github: "https://github.com/Rutuja1805/CocktailQuest",
    link: "https://cocktail-quest-nine.vercel.app/",
  },
  {
    name: "HealthPlus Services",
    description:
      "Health Plus would act as a bridge between enterprises and global members. Users will be able to offer services and easily connect to medical support. Health Plus also keeps track of the data and various types of service roles.",
    image: "/health.png",
    github: "https://github.com/Rutuja1805/HealthPlus_Services",
    link: "https://github.com/Rutuja1805/HealthPlus_Services",
  },
  {
    name: "To-do List",
    description:
      "A To-do list using react for managing our daily tasks.",
    image: "/todo.png",
    github: "https://github.com/Rutuja1805/TODO_List",
    link: "https://todo-list-82vwc1zmi-rutuja1805.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
