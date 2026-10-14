import Image from "next/image";
import ChessBoard from "./components/ChessBoard";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center gap-6">
        <ChessBoard />
      </main>
   
  );
}
