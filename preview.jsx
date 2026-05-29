import React from "react";
import { motion } from "framer-motion";

export default function ProfessionalDevOpsPortfolio() {
  const stats = [
    ["20+", "AWS Services"],
    ["4+", "Projects"],
    ["99%", "Uptime"],
    ["60%", "Deploy Faster"],
  ];

  const skills = [
    "AWS Cloud",
    "Terraform IaC",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "Linux Administration",
  ];

  const projects = [
    {
      title: "AWS Three Tier Architecture",
      desc: "Highly available and scalable AWS architecture using EC2, ELB, Auto Scaling, and RDS Multi-AZ.",
    },
    {
      title: "Terraform + Kubernetes Deployment",
      desc: "End-to-end infrastructure automation and Kubernetes orchestration with Terraform IaC.",
    },
    {
      title: "Microservices on Kubernetes",
      desc: "Cloud-native Flask microservices architecture with Kubernetes networking and scaling.",
    },
    {
      title: "CI/CD Automation Pipeline",
      desc: "GitHub Actions and Docker based automated deployment pipeline with rollback support.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-emerald-400">Santhosh</span> M
            </h1>
            <p className="text-xs text-slate-400">
              DevOps & Cloud Engineer
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-5 py-2 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <span className="text-emerald-300 text-sm">
                Available for DevOps Roles
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-pulse">
                Cloud Infrastructure
              </span>
              That Scales.
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl">
              MCA graduate and DevOps Engineer specializing in AWS,
              Terraform, Kubernetes, Docker, and CI/CD automation.
              Passionate about building scalable cloud-native systems.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-emerald-400 text-black font-bold hover:scale-105 transition-all shadow-xl">
                Hire Me
              </button>

              <button className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition-all">
                View Projects
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
              {stats.map(([num, label]) => (
                <motion.div
                  whileHover={{ y: -8 }}
                  key={label}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5"
                >
                  <div className="text-3xl font-black text-emerald-400">
                    {num}
                  </div>
                  <div className="text-sm text-slate-400 mt-2">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center relative"
          >
            {/* PROFILE IMAGE */}
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* Replace image path with your image */}
              <img
                src="/myimage.jpeg"
                alt="Santhosh M"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-emerald-400/30 shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105 transition duration-500"
              />

              <div className="absolute -top-2 -right-2 animate-bounce bg-emerald-400 text-black px-4 py-2 rounded-2xl text-sm font-bold shadow-xl">
                DevOps 🚀
              </div>
            </div>

            {/* TERMINAL CARD */}
            <div className="w-full max-w-xl bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-sm text-slate-400 font-mono">
                  santhosh@devops:~
                </span>
              </div>

              <div className="p-8 font-mono text-sm leading-8">
                <p>
                  <span className="text-emerald-400">$</span> kubectl get pods
                </p>
                <p className="text-slate-400">
                  microservices-app Running
                </p>
                <p className="text-slate-400">
                  terraform-stack Running
                </p>
                <p className="text-slate-400">
                  ci-cd-pipeline Running
                </p>

                <br />

                <p>
                  <span className="text-emerald-400">$</span> terraform apply
                </p>

                <p className="text-cyan-400">
                  Infrastructure provisioned successfully ✓
                </p>

                <br />

                <p>
                  <span className="text-emerald-400">$</span> docker ps
                </p>

                <p className="text-slate-400">
                  5 containers healthy
                </p>

                <br />

                <p>
                  <span className="text-emerald-400">$</span>{" "}
                  deployment-status
                </p>

                <p className="text-emerald-300">
                  ✔ Zero downtime achieved
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-y border-white/10 bg-black/20 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee text-xl font-semibold text-slate-300">
          <span>AWS</span>
          <span>Terraform</span>
          <span>Kubernetes</span>
          <span>Docker</span>
          <span>GitHub Actions</span>
          <span>Linux</span>
          <span>Prometheus</span>
          <span>Grafana</span>
          <span>Jenkins</span>
          <span>Nginx</span>
          <span>Python</span>
          <span>AWS</span>
          <span>Terraform</span>
          <span>Kubernetes</span>
          <span>Docker</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-black mb-8">
              Professional DevOps Engineer
            </h2>

            <p className="text-slate-300 leading-8 text-lg">
              I specialize in AWS Cloud, Infrastructure as Code,
              Kubernetes orchestration, and CI/CD automation.
              Passionate about cloud-native infrastructure and scalable systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-300"
              >
                <div className="text-emerald-400 text-2xl mb-4">✦</div>
                <h3 className="font-bold text-lg">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-24 bg-black/20 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl font-black">
              Production Grade Infrastructure
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-cyan-400/40 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 transition duration-500"></div>

                <div className="relative">
                  <div className="text-6xl font-black text-white/5 mb-6">
                    0{index + 1}
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-8 text-lg">
                    {project.desc}
                  </p>

                  <button className="mt-8 text-emerald-400 font-semibold hover:translate-x-2 transition-all">
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-black">
            Internship & Professional Work
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-emerald-400/30 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold">
                DevOps Engineer Intern
              </h3>

              <p className="text-emerald-400 mt-2">
                DSEdify · Bengaluru
              </p>
            </div>

            <div className="bg-emerald-500/10 text-emerald-300 px-6 py-3 rounded-2xl border border-emerald-400/20">
              Jan 2026 – May 2026
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-slate-300 leading-8">
            <div>✔ Automated CI/CD pipelines</div>
            <div>✔ Provisioned AWS infrastructure</div>
            <div>✔ Managed Kubernetes deployments</div>
            <div>✔ Reduced deployment time by 60%</div>
            <div>✔ Maintained 99% uptime</div>
            <div>✔ Automated monitoring systems</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-24 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Let's Build
            <span className="block text-emerald-400">
              Cloud Systems Together
            </span>
          </h2>

          <p className="text-slate-300 text-xl leading-9 mt-8 max-w-3xl mx-auto">
            Open to DevOps Engineer, Cloud Engineer,
            Platform Engineer, and SRE roles across India.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a
              href="mailto:Santhoshmsanthosh9880@gmail.com"
              className="px-8 py-4 bg-emerald-400 text-black rounded-2xl font-bold hover:scale-105 transition-all"
            >
              Email Me
            </a>

            <a
              href="https://github.com/santhosh9880"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-white/20 rounded-2xl hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-white/20 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        © 2026 Santhosh M · DevOps Engineer · Built with React + Tailwind CSS
      </footer>

      {/* CUSTOM CSS */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}