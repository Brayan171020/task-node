import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">React Tasks</h1>
        <p className="text-md text-slate-400">
          Boost your productivity and stay on top of your tasks with our feature-rich note-taking app. 
          Seamlessly create, manage, and prioritize tasks by effortlessly saving titles, detailed descriptions, and due dates. 
          Never miss a deadline again as you organize your thoughts and track your progress in one convenient place. 
          Stay focused, stay organized, and unlock your full potential with our powerful note-taking app.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Get Started
        </Link>
      </header>
    </section>
  );
}

export default HomePage;