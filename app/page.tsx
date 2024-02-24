import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow py-96 flex flex-col items-center justify-between">
        main content
      </main>
      <footer className="p-4">
        footer
      </footer>
    </div>
  );
}
