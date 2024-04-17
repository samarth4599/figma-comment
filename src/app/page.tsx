import ThemeToggle from "@/components/atoms/ThemeToggle";
import UserPin from "@/components/atoms/UserPin";
import FigmaBox from "@/components/molecules/FigmaBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-100 dark:bg-black">
      <header className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Tap anywhere in the below box to add a comment
        </h1>
        <aside className=" absolute right-8 top-10">
          <ThemeToggle />
        </aside>
      </header>
      {/* <UserPin /> */}
      <FigmaBox />
    </main>
  );
}
