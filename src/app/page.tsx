import ThemeToggle from "@/components/atoms/ThemeToggle";
import PlayBoard from "@/components/organisms/PlayBoard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-100 dark:bg-black">
      <header className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Tap anywhere in the below box
        </h1>
        <aside className=" absolute right-8 top-10">
          <ThemeToggle />
        </aside>
      </header>
      <PlayBoard />
    </main>
  );
}
