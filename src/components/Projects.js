import React from "react";
import ProjectCard from "./ProjectCard";

import dev1 from "../assets/ecommerce.avif";
import dev2 from "../assets/skillforge.webp";
import ds1 from "../assets/malaria.jpg";
import ds2 from "../assets/car.jpg";
import ds3 from "../assets/customer.avif";
import ds4 from "../assets/transaction.jpg";
import ds5 from "../assets/book.jpg";

const developmentProjects = [
  {
    title: "E-Commerce Web Application",
    img: dev1,
    description:
      "Developed a responsive e-commerce web application using React and Redux, with MongoDB for robust data storage and Node.js with Express for efficient backend functionality. Implemented key features, enabling users to seamlessly view, filter, add/remove products in the cart, and complete orders. Designed an Admin portal for enhanced product management and real-time order status updates, leveraging the power of MongoDB, Node.js, and Express for a comprehensive and user-friendly e-commerce experience",
    viewUrl: "https://e-commerce-sai-taruns-projects-ae829a18.vercel.app/",
  },
  {
    title: "SkillForge: AI-Powered Personalized Learning Platform",
    img: dev2,
    description: `SkillForge is an AI-driven learning platform currently in development, designed to deliver personalized education experiences. Built with React for the front-end and Python with FastAPI and PostgreSQL for the backend, it ensures seamless interaction, efficient data management, and robust API integrations. The platform enables users to explore curated learning paths, track progress, and receive AI-driven career guidance. It also features AI-powered code reviews, providing real-time feedback to help developers refine their skills. With secure authentication, personalized user profiles, and intelligent recommendations, SkillForge aims to revolutionize self-paced learning by making education more accessible, efficient, and tailored to individual aspirations.`,
    viewUrl: "https://github.com/tarungajamoni/SkillForge",
  },
];

const dataScienceProjects = [
  {
    title: "Malaria Infected Cell Detection",
    img: ds1,
    description: `Demonstrating various machine learning models to classify a given cell image as uninfected or infected by malaria parasite. This project shows an in depth analysis of
              various features like HOG, LBP, SIFT, pixel values with
              feature reduction techniques PCA, LDA along with normalization
              techniques such as z-score and min-max over different classifiers
              such as Naive Bayes, SVM, XGBoost, Bagging, AdaBoost, K-Nearest Neighbors, Random Forests and compare their performance by tuning different hyper-parameters. We evaluate the
              performance of these classifiers on metrics such as Accuracy,
              Precision, Recall, F1 score and ROC`,
    viewUrl:
      "https://github.com/tarungajamoni/Data-Science-Projects/blob/main/Malaria%20Infected%20Cell%20Detection/Malaria%20Detection.ipynb",
  },
  {
    title: "Car Price Prediction",
    img: ds2,
    description: `Implemented a Flask-based website, focuses on the application of Linear Regression models to predict the price of used cars. 
              Key predictors, including the car's brand, model, kilometers driven, and year of purchase, are used to inform these predictions.
               The project involved data preprocessing and analysis, addressing the initial data's uncleanliness. 
              A Linear Regression model was constructed and achieved a notable R-squared score of 0.92, demonstrating its ability to accurately estimate car prices. 
              The project highlights the practical application of Linear Regression in the automotive sector, providing a user-friendly web platform for predicting car values and aiding potential buyers and sellers in making informed decisions.`,
    viewUrl:
      "https://github.com/tarungajamoni/Data-Science-Projects/tree/main/Car%20Price%20Prediction",
  },
  {
    title: "Customer Conversion Prediction",
    img: ds3,
    description: `Machine learning model that predicts insurance enrollment based on demographic and marketing data.
              The project aims to help the insurance company identify the customers that are most likely to convert, so that they can be targeted directly reducing marketing campaigns. 
              The historical sales data provided will be used to train and evaluate the performance of the machine learning models. 
              The analysis of the model will be done to identify the important factors that contribute towards the conversion and the AUROC metric will be used to evaluate the model's performance.`,
    viewUrl:
      "https://github.com/tarungajamoni/Data-Science-Projects/blob/main/Customer%20Conversion%20Prediction/Customer%20Conversion%20Prediction.ipynb",
  },
  {
    title: "Transaction Fraud Detection",
    img: ds4,
    description: `Primary objective of this project is to spot and stop financial fraud in mobile transactions.
              This involves performing deep analysis of the data and systematic evaluation of various machine learning models using cross-validation. 
              Despite the data's extreme imbalance, the project's top-performing model, XGBoost, demonstrates an 
              impressive 88.1% balanced accuracy and 94.4% precision for unseen data.
              The model's occasional misclassification of legitimate transactions as fraud translates to minor losses. 
              However, when considering the overall financial picture, the project anticipates a remarkable 93% profit margin`,
    viewUrl:
      "https://github.com/tarungajamoni/Data-Science-Projects/blob/main/Transaction%20Fraud%20Detection/Transaction%20Fraud%20Detection.ipynb",
  },
  {
    title: "Book Recommendation System",
    img: ds5,
    description: `Primary objective of this project is to spot and stop financial fraud in mobile transactions.
              This involves performing deep analysis of the data and systematic evaluation of various machine learning models using cross-validation. 
              Despite the data's extreme imbalance, the project's top-performing model, XGBoost, demonstrates an 
              impressive 88.1% balanced accuracy and 94.4% precision for unseen data.
              The model's occasional misclassification of legitimate transactions as fraud translates to minor losses. 
              However, when considering the overall financial picture, the project anticipates a remarkable 93% profit margin`,
    viewUrl:
      "https://github.com/tarungajamoni/Data-Science-Projects/blob/main/Transaction%20Fraud%20Detection/Transaction%20Fraud%20Detection.ipynb",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-semibold mb-6">Development Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {developmentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2 className="text-4xl font-semibold mt-12 mb-6">
        Data Science Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {dataScienceProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
