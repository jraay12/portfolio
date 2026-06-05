import { Link, useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

/* images imports stay the same */
import progresso1 from "../assets/progress-projects.jpg";
import progresso2 from "../assets/progresso-dashboard.jpg";
import progresso3 from "../assets/progresso-task.jpg";

import Goldsmith1 from "../assets/dashboard.png";
import Goldsmith2 from "../assets/h&c login.png";

import Smartleaf1 from "../assets/smartleaf1.jpg";
import Smartleaf2 from "../assets/smartleaf2.jpg";
import Smartleaf3 from "../assets/smartleaf3.jpg";
import Smartleaf4 from "../assets/smartleaf4.jpg";

import findly1 from "../assets/findly1.png";
import findly2 from "../assets/findly2.png";
import findly3 from "../assets/findly3.png";
import findly4 from "../assets/findly4.png";

import booking1 from "../assets/booking1.png";
import booking2 from "../assets/booking2.png";
import booking3 from "../assets/booking3.png";
import booking4 from "../assets/booking4.png";
import booking5 from "../assets/booking5.png";

import nima1 from "../assets/nima1.png";
import nima2 from "../assets/nima2.png";
import nima3 from "../assets/nima3.png";
import nima4 from "../assets/nima4.png";


/* -----------------------------
   PROJECT DATA
------------------------------*/
const projects = {
  booking: {
    title: "Multi-Tenant Booking & Service Management System",
    description:
      "A scalable multi-tenant booking platform with role-based access, appointment scheduling, staff management, and real-time updates for service-based businesses.",
    images: [booking1, booking2, booking3, booking4, booking5],
    stack: [
      "Docker",
      "GitHub Actions",
      "MySQL",
      "Prisma ORM",
      "Node.js",
      "Express.js",
      "TypeScript",
      "React.js",
      "Socket.IO",
      "RabbitMQ",
    ],
    features: [
      "Multi-Tenant Architecture",
      "Role-Based Access Control",
      "Appointment Scheduling",
      "Staff & Service Management",
      "Real-Time Booking Updates",
      "Business & Branch Management",
      "Queue & Booking Workflow",
      "Authentication & Authorization",
      "Responsive Dashboard",
      "Scalable Backend Architecture",
    ],
    github: "https://github.com/jraay12/Saas-booking-backend.git",
    demo: null,
    impact:
      "Centralizes booking operations and business workflows into a scalable multi-tenant system.",
  },

  progresso: {
    title: "Progresso",
    description:
      "Construction project tracking system for managing tasks, logs, materials, and reporting.",
    images: [progresso1, progresso2, progresso3],
    stack: ["React Native", "TypeScript", "Node.js", "MySQL", "Prisma"],
    features: [
      "Task Assignment",
      "Daily Site Logs",
      "Material Tracking",
      "PDF Reports",
    ],
    github: "https://github.com/jraay12/progresso-backend.git",
    frontendGithub: null,
    backendGithub: null,
    demo: null,
    impact:
      "Improves coordination between field teams and project managers.",
  },

  Goldsmith: {
    title: "H&C Goldsmith",
    description:
      "Inventory and order management system for jewelry businesses.",
    images: [Goldsmith1, Goldsmith2],
    stack: ["React", "Node.js", "Express", "MySQL", "Prisma"],
    features: [
      "Inventory Management",
      "Order Tracking",
      "Financial Monitoring",
    ],
    github: "https://github.com/jraay12/inventory_v2.git",
    demo: null,
    impact: "Reduces manual inventory tracking and improves accuracy.",
  },

  Findly: {
    title: "Findly",
    description:
      "Lost-and-found platform using QR codes and automated notifications.",
    images: [findly1, findly2, findly3, findly4],
    stack: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "QR Code Item Registration",
      "Lost Item Reporting",
      "Email Notifications",
      "Public Listings",
    ],
    github: "https://github.com/jraay12/findly-backend.git",
    demo: null,
    impact: "Speeds up item recovery using QR-based tracking.",
  },

  smartleaf: {
    title: "Smart Leaf",
    description: "AI-powered mango leaf disease detection system.",
    images: [Smartleaf1, Smartleaf2, Smartleaf3, Smartleaf4],
    stack: ["React Native", "Python", "FastAPI"],
    features: ["Disease Detection", "Image Analysis", "AI Prediction"],
    github: "https://github.com/jraay12/mango-new.git",
    demo: null,
    impact: "Provides fast mobile-based plant disease detection.",
  },

  nima: {
    title: "Membership and Event Management System",
    description:
      "Web-based system for managing members and events with a public portal and admin dashboard.",
    images: [nima1, nima2, nima3, nima4],
    stack: [
      "Docker",
      "GitHub Actions",
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Express",
    ],
    features: [
      "Member Management",
      "Event Management",
      "Authentication System",
      "Admin Dashboard",
      "Event Publishing",
      "Search & Filtering",
      "Responsive UI",
    ],
    
    frontendGithub: "https://github.com/jraay12/nima.git",
    backendGithub: "https://github.com/jraay12/nima-backend.git",
    demo: "https://jraay12.github.io/nima/",
    impact:
      "Centralizes member and event management while providing a public-facing portal for organizations.",
  },
};

/* -----------------------------
   COMPONENT
------------------------------*/
export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = id ? projects[id] : null;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-slate-600">
        Project not found
      </div>
    );
  }

  const ActionButton = ({
    href,
    children,
    primary = false,
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition
        ${
          primary
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
        }`}
    >
      {children}
    </a>
  );

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-slate-500 hover:text-slate-900"
        >
          ← Back to projects
        </button>

        {/* HERO */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 font-playfair">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 font-inter">
              {project.description}
            </p>

            {/* STACK */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <ActionButton href={project.github} primary>
                  GitHub
                </ActionButton>
              )}

              {project.frontendGithub && (
                <ActionButton href={project.frontendGithub}>
                  Frontend Repo
                </ActionButton>
              )}

              {project.backendGithub && (
                <ActionButton href={project.backendGithub}>
                  Backend Repo
                </ActionButton>
              )}

              {project.demo && (
                <ActionButton href={project.demo} primary>
                  Live Demo
                </ActionButton>
              )}
            </div>

            {/* FEATURES */}
            <div className="mt-14">
              <h2 className="text-lg font-semibold text-slate-900">
                Key Features
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <p className="text-sm leading-7 text-slate-700">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMPACT */}
            <div className="mt-14 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Project Impact
              </h2>
              <p className="leading-8 text-slate-600">{project.impact}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src={project.images[activeImage]}
                className="max-h-[620px] w-full object-contain"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-2xl border transition hover:scale-105 ${
                    activeImage === i
                      ? "border-slate-900"
                      : "border-slate-200 opacity-60"
                  }`}
                >
                  <img src={img} className="h-20 w-24 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}