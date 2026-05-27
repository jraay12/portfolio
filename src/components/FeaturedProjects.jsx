import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProgressThumbnail from "../assets/progresso-thumbnail.png";
import GoldSmithThumbnail from "../assets/goldsmith-thumbnail.png";
import FindlyThumbnail from "../assets/findly-thumbnail.png";
import SmartLeafThumbnail from "../assets/smartleaf-thumbnail.png";
import BookingThumbnail from "../assets/booking-thumbnail.png"
export default function FeaturedProjects() {
  const projects = [
    {
      id: "booking",
      title: "Multi-Tenant Booking & Service Management System",
      description:
        "An ongoing personal project focused on building a scalable multi-tenant booking and business management platform with role-based access, appointment scheduling, staff management, real-time booking updates, and service operations for service-based businesses.",
      stack: [
        "Google Stitch",
        "Docker",
        "MySQL",
        "Prisma ORM",
        "Node.js",
        "Express.js",
        "TypeScript",
        "React.js",
        "Socket.IO",
        "RabbitMQ",
      ],
      type: "Ongoing Personal Project",
      image: BookingThumbnail,
    },
    {
      id: "progresso",
      title: "Progresso",
      description:
        "A mobile app for managing construction projects, daily site logs, and on-site updates to improve coordination and tracking.",
      stack: [
        "Prisma ORM",
        "MySQL",
        "Docker",
        "GitHub Actions",
        "Express.js",
        "Node.js",
        "TypeScript",
        "React Native (Expo)",
      ],
      type: "Mobile Application",
      image: ProgressThumbnail,
    },
    {
      id: "Goldsmith",
      title: "H&C Goldsmith",
      description:
        "A web-based internal system for managing inventory, orders, users, and basic financial tracking for small to medium operations.",
      stack: [
        "Prisma ORM",
        "MySQL",
        "Docker",
        "GitHub Actions",
        "Express.js",
        "JavaScript",
        "React.js",
      ],
      type: "Web Application",
      image: GoldSmithThumbnail,
    },
    {
      id: "Findly",
      title: "Findly",
      description:
        "A web-based internal system for managing inventory, orders, users, and basic financial tracking for small to medium operations.",
      stack: [
        "Prisma ORM",
        "MySQL",
        "Docker",
        "GitHub Actions",
        "Express.js",
        "JavaScript",
        "React.js",
      ],
      type: "Web Application",
      image: FindlyThumbnail,
    },
    {
      id: "smartleaf",
      title: "Smart Leaf",
      description:
        "A mobile application that detects and analyzes mango leaf diseases using AI-powered image recognition and machine learning models trained with mango leaf datasets from Kaggle.",
      stack: ["React Native", "Python", "FastAPI", "Kaggle Dataset"],
      type: "Mobile Application",
      image: SmartLeafThumbnail,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A selection of projects that showcase my skills in full-stack,
            backend systems, and real-time applications.
          </p>
        </div>

        <div className="grid items-stretch gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative block h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow Background */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-100 via-slate-100 to-blue-100 opacity-0 blur-2xl transition group-hover:opacity-100" />

              {/* Outer Card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative m-2 flex flex-1 flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-all duration-300 group-hover:bg-black/5">
                    <div className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                        Click to view details →
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}